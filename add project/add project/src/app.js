/**
 * E-Commerce Product Catalogue Application
 * Main application logic for filtering, sorting, and searching products
 */

// ============================================
// APPLICATION STATE
// ============================================

const appState = {
    allProducts: products,
    filteredProducts: products,
    filters: {
        category: 'all',
        minPrice: 0,
        maxPrice: Infinity,
        searchTerm: '',
        sortOrder: ''
    }
};

// ============================================
// DOM ELEMENTS
// ============================================

const elements = {
    productsGrid: document.getElementById('productsGrid'),
    productCount: document.getElementById('productCount'),
    emptyState: document.getElementById('emptyState'),
    searchInput: document.getElementById('searchInput'),
    searchInputMobile: document.getElementById('searchInputMobile'),
    minPrice: document.getElementById('minPrice'),
    maxPrice: document.getElementById('maxPrice'),
    minPriceMobile: document.getElementById('minPriceMobile'),
    maxPriceMobile: document.getElementById('maxPriceMobile'),
    sortDropdown: document.getElementById('sortDropdown'),
    resetFilters: document.getElementById('resetFilters'),
    emptyStateReset: document.getElementById('emptyStateReset'),
    categoryButtons: document.querySelectorAll('[data-category]'),
    mobileCategoryButtons: document.querySelectorAll('.mobile-category'),
    mobileFilterBtn: document.getElementById('mobileFilterBtn'),
    mobileFilterModal: document.getElementById('mobileFilterModal'),
    closeFilterModal: document.getElementById('closeFilterModal'),
    filterSidebar: document.getElementById('filterSidebar')
};

// ============================================
// EVENT LISTENERS
// ============================================

/**
 * Initialize all event listeners
 */
function initializeEventListeners() {
    // Category filter buttons (Desktop)
    elements.categoryButtons.forEach(button => {
        button.addEventListener('click', handleCategoryFilter);
    });

    // Category filter buttons (Mobile)
    elements.mobileCategoryButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            handleCategoryFilter(e);
            updateMobileCategoryButtons(e.target);
        });
    });

    // Search input (Desktop & Mobile)
    elements.searchInput?.addEventListener('input', debounce(handleSearch, 300));
    elements.searchInputMobile?.addEventListener('input', debounce(handleSearch, 300));

    // Price range inputs (Desktop)
    elements.minPrice?.addEventListener('change', handlePriceFilter);
    elements.maxPrice?.addEventListener('change', handlePriceFilter);

    // Price range inputs (Mobile)
    elements.minPriceMobile?.addEventListener('change', handlePriceFilterMobile);
    elements.maxPriceMobile?.addEventListener('change', handlePriceFilterMobile);

    // Sort dropdown
    elements.sortDropdown?.addEventListener('change', handleSort);

    // Reset buttons
    elements.resetFilters?.addEventListener('click', handleResetFilters);
    elements.emptyStateReset?.addEventListener('click', handleResetFilters);

    // Mobile filter modal
    elements.mobileFilterBtn?.addEventListener('click', openMobileFilterModal);
    elements.closeFilterModal?.addEventListener('click', closeMobileFilterModal);
    elements.mobileFilterModal?.addEventListener('click', closeMobileFilterModal);
}

// ============================================
// EVENT HANDLERS
// ============================================

/**
 * Handle category filter button click
 * @param {Event} event - Click event
 */
function handleCategoryFilter(event) {
    const category = event.target.getAttribute('data-category');
    appState.filters.category = category;
    updateCategoryButtons(event.target);
    applyFilters();
}

/**
 * Handle search input
 * @param {Event} event - Input event
 */
function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase().trim();
    appState.filters.searchTerm = searchTerm;
    applyFilters();
}

/**
 * Handle price range filter (Desktop)
 */
function handlePriceFilter() {
    const minPrice = parseFloat(elements.minPrice?.value) || 0;
    const maxPrice = parseFloat(elements.maxPrice?.value) || Infinity;
    
    if (minPrice > maxPrice) {
        alert('Min price cannot be greater than max price');
        elements.minPrice.value = appState.filters.minPrice;
        return;
    }
    
    appState.filters.minPrice = minPrice;
    appState.filters.maxPrice = maxPrice;
    applyFilters();
}

/**
 * Handle price range filter (Mobile)
 */
function handlePriceFilterMobile() {
    const minPrice = parseFloat(elements.minPriceMobile?.value) || 0;
    const maxPrice = parseFloat(elements.maxPriceMobile?.value) || Infinity;
    
    if (minPrice > maxPrice) {
        alert('Min price cannot be greater than max price');
        return;
    }
    
    appState.filters.minPrice = minPrice;
    appState.filters.maxPrice = maxPrice;
    applyFilters();
}

/**
 * Handle sort dropdown change
 * @param {Event} event - Change event
 */
function handleSort(event) {
    appState.filters.sortOrder = event.target.value;
    applyFilters();
}

/**
 * Reset all filters
 */
function handleResetFilters() {
    // Reset filter state
    appState.filters = {
        category: 'all',
        minPrice: 0,
        maxPrice: Infinity,
        searchTerm: '',
        sortOrder: ''
    };

    // Reset UI elements
    elements.searchInput && (elements.searchInput.value = '');
    elements.searchInputMobile && (elements.searchInputMobile.value = '');
    elements.minPrice && (elements.minPrice.value = '');
    elements.maxPrice && (elements.maxPrice.value = '');
    elements.minPriceMobile && (elements.minPriceMobile.value = '');
    elements.maxPriceMobile && (elements.maxPriceMobile.value = '');
    elements.sortDropdown && (elements.sortDropdown.value = '');

    // Reset button states
    elements.categoryButtons.forEach(btn => {
        if (btn.getAttribute('data-category') === 'all') {
            updateCategoryButton(btn, true);
        } else {
            updateCategoryButton(btn, false);
        }
    });

    elements.mobileCategoryButtons.forEach(btn => {
        if (btn.getAttribute('data-category') === 'all') {
            updateCategoryButton(btn, true);
        } else {
            updateCategoryButton(btn, false);
        }
    });

    // Reapply filters
    applyFilters();
    closeMobileFilterModal();
}

/**
 * Open mobile filter modal
 */
function openMobileFilterModal() {
    elements.mobileFilterModal?.classList.remove('hidden');
}

/**
 * Close mobile filter modal
 */
function closeMobileFilterModal(event) {
    // Only close if clicking the modal background, not the content
    if (!event || event.target === elements.mobileFilterModal || event.target.id === 'closeFilterModal') {
        elements.mobileFilterModal?.classList.add('hidden');
    }
}

// ============================================
// FILTERING & SORTING LOGIC
// ============================================

/**
 * Apply all active filters to products
 */
function applyFilters() {
    let results = appState.allProducts;

    // Apply category filter
    if (appState.filters.category !== 'all') {
        results = results.filter(product =>
            product.category === appState.filters.category
        );
    }

    // Apply price range filter
    results = results.filter(product =>
        product.price >= appState.filters.minPrice &&
        product.price <= appState.filters.maxPrice
    );

    // Apply search filter
    if (appState.filters.searchTerm) {
        results = results.filter(product =>
            product.name.toLowerCase().includes(appState.filters.searchTerm) ||
            product.description.toLowerCase().includes(appState.filters.searchTerm) ||
            product.category.toLowerCase().includes(appState.filters.searchTerm)
        );
    }

    // Apply sort
    if (appState.filters.sortOrder === 'asc') {
        results.sort((a, b) => a.price - b.price);
    } else if (appState.filters.sortOrder === 'desc') {
        results.sort((a, b) => b.price - a.price);
    }

    appState.filteredProducts = results;
    renderProducts();
}

/**
 * Render products to the DOM
 */
function renderProducts() {
    elements.productsGrid.innerHTML = '';

    if (appState.filteredProducts.length === 0) {
        elements.emptyState.classList.remove('hidden');
        elements.productCount.textContent = '(0)';
        return;
    }

    elements.emptyState.classList.add('hidden');
    elements.productCount.textContent = `(${appState.filteredProducts.length})`;

    appState.filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        elements.productsGrid.appendChild(productCard);
    });
}

/**
 * Create a product card element
 * @param {Object} product - Product object
 * @returns {HTMLElement} Product card element
 */
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl';

    // Calculate discounted price
    const discountedPrice = product.discount
        ? (product.price * (1 - product.discount / 100)).toFixed(2)
        : product.price.toFixed(2);

    card.innerHTML = `
        <div class="relative">
            <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
            ${product.discount ? `<div class="discount-badge">${product.discount}% OFF</div>` : ''}
        </div>
        <div class="p-4 flex flex-col h-full">
            <h3 class="font-bold text-lg text-gray-900 mb-2 line-clamp-2">${product.name}</h3>
            <p class="text-gray-600 text-sm mb-3 line-clamp-2">${product.description}</p>
            
            <div class="mb-3 space-y-2">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                        <span class="text-2xl font-bold text-green-600">$${discountedPrice}</span>
                        ${product.discount ? `<span class="text-sm text-gray-400 line-through">$${product.price.toFixed(2)}</span>` : ''}
                    </div>
                </div>
                
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <span class="star-rating">★★★★★</span>
                        <span class="text-gray-600 text-sm ml-2">(${product.rating})</span>
                    </div>
                </div>
            </div>
            
            <div class="mb-4">
                <span class="stock-badge ${product.inStock ? 'in-stock' : 'out-of-stock'}">
                    ${product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
                </span>
            </div>
            
            <button class="mt-auto w-full ${product.inStock ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'} text-white py-2 rounded font-semibold transition-colors add-to-cart-btn" ${product.inStock ? '' : 'disabled'} data-product-id="${product.id}">
                ${product.inStock ? '🛒 Add to Cart' : 'Out of Stock'}
            </button>
        </div>
    `;

    // Add event listener for add to cart button
    const addToCartBtn = card.querySelector('.add-to-cart-btn');
    addToCartBtn?.addEventListener('click', () => handleAddToCart(product));

    return card;
}

/**
 * Handle add to cart button click
 * @param {Object} product - Product object
 */
function handleAddToCart(product) {
    alert(`Added "${product.name}" to cart!`);
    // TODO: Implement cart functionality
}

// ============================================
// UI UPDATE FUNCTIONS
// ============================================

/**
 * Update category button states
 * @param {HTMLElement} clickedButton - The clicked button
 */
function updateCategoryButtons(clickedButton) {
    const isAllCategory = clickedButton.getAttribute('data-category') === 'all';

    elements.categoryButtons.forEach(button => {
        const category = button.getAttribute('data-category');
        
        if (isAllCategory) {
            // If "All" is clicked, deselect others
            updateCategoryButton(button, category === 'all');
        } else {
            // If other category is clicked, deselect "All"
            if (category === 'all') {
                updateCategoryButton(button, false);
            } else if (button === clickedButton) {
                updateCategoryButton(button, true);
            } else {
                updateCategoryButton(button, false);
            }
        }
    });
}

/**
 * Update mobile category buttons
 * @param {HTMLElement} clickedButton - The clicked button
 */
function updateMobileCategoryButtons(clickedButton) {
    const isAllCategory = clickedButton.getAttribute('data-category') === 'all';

    elements.mobileCategoryButtons.forEach(button => {
        const category = button.getAttribute('data-category');
        
        if (isAllCategory) {
            updateCategoryButton(button, category === 'all');
        } else {
            if (category === 'all') {
                updateCategoryButton(button, false);
            } else if (button === clickedButton) {
                updateCategoryButton(button, true);
            } else {
                updateCategoryButton(button, false);
            }
        }
    });
}

/**
 * Update single category button styling
 * @param {HTMLElement} button - Button element
 * @param {boolean} isActive - Is button active
 */
function updateCategoryButton(button, isActive) {
    if (isActive) {
        button.classList.remove('inactive');
        button.classList.add('active');
    } else {
        button.classList.remove('active');
        button.classList.add('inactive');
    }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Debounce function to limit function calls
 * @param {Function} func - Function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} Debounced function
 */
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

/**
 * Format price with currency symbol
 * @param {number} price - Price value
 * @returns {string} Formatted price
 */
function formatPrice(price) {
    return `$${price.toFixed(2)}`;
}

/**
 * Get unique categories from products
 * @returns {Array} Array of unique categories
 */
function getUniqueCategories() {
    const categories = new Set(appState.allProducts.map(p => p.category));
    return Array.from(categories);
}

// ============================================
// INITIALIZATION
// ============================================

/**
 * Initialize the application
 */
function initializeApp() {
    console.log('Initializing E-Commerce Catalogue App');
    
    // Set initial "All Categories" button as active
    elements.categoryButtons.forEach(button => {
        if (button.getAttribute('data-category') === 'all') {
            updateCategoryButton(button, true);
        }
    });

    elements.mobileCategoryButtons.forEach(button => {
        if (button.getAttribute('data-category') === 'all') {
            updateCategoryButton(button, true);
        }
    });

    // Initialize event listeners
    initializeEventListeners();

    // Render initial products
    renderProducts();

    console.log('App initialized with', appState.allProducts.length, 'products');
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', initializeApp);

// Alternative: Run immediately if script loads after DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}
