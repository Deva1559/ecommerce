/**
 * Product Data Module
 * Contains all product information for the e-commerce catalogue
 */

const products = [
    {
        id: 1,
        name: "Wireless Headphones Pro",
        description: "Premium sound quality with active noise cancellation and 30-hour battery life. Bluetooth 5.0 connectivity.",
        price: 79.99,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
        rating: 4.5,
        inStock: true,
        discount: 10
    },
    {
        id: 2,
        name: "Cotton T-Shirt",
        description: "Comfortable 100% cotton t-shirt available in multiple colors. Breathable and perfect for everyday wear.",
        price: 19.99,
        category: "Fashion",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
        rating: 4.2,
        inStock: true,
        discount: 0
    },
    {
        id: 3,
        name: "Coffee Maker Deluxe",
        description: "Programmable coffee maker with thermal carafe. Brews up to 12 cups with automatic shut-off.",
        price: 49.99,
        category: "Home & Kitchen",
        image: "https://images.unsplash.com/photo-1517668808822-9ebb02ae2a0e?w=400&h=300&fit=crop",
        rating: 4.8,
        inStock: true,
        discount: 15
    },
    {
        id: 4,
        name: "Running Shoes Ultra",
        description: "Lightweight athletic shoes designed for running and training. Features cushioning and breathable mesh.",
        price: 89.99,
        category: "Sports & Outdoors",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
        rating: 4.6,
        inStock: false,
        discount: 5
    },
    {
        id: 5,
        name: "Modern JavaScript Guide",
        description: "Comprehensive guide to modern JavaScript programming. Covers ES6+, async/await, and advanced concepts.",
        price: 29.99,
        category: "Books",
        image: "https://images.unsplash.com/photo-150784272343-583f20270319?w=400&h=300&fit=crop",
        rating: 4.9,
        inStock: true,
        discount: 20
    },
    {
        id: 6,
        name: "Smartwatch Pro",
        description: "Feature-rich smartwatch with heart rate monitor, sleep tracking, and GPS. Water-resistant design.",
        price: 199.99,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
        rating: 4.4,
        inStock: true,
        discount: 0
    },
    {
        id: 7,
        name: "Casual Jeans Classic",
        description: "Durable denim jeans with perfect fit. Available in multiple sizes and washes. Machine washable.",
        price: 49.99,
        category: "Fashion",
        image: "https://images.unsplash.com/photo-1542272604-787c62d465d1?w=400&h=300&fit=crop",
        rating: 4.3,
        inStock: true,
        discount: 25
    },
    {
        id: 8,
        name: "Yoga Mat Premium",
        description: "Non-slip yoga mat made from natural rubber. Extra thick padding for joint protection.",
        price: 35.99,
        category: "Sports & Outdoors",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop",
        rating: 4.7,
        inStock: true,
        discount: 12
    },
    {
        id: 9,
        name: "Blender Master Chef",
        description: "High-power blender with multiple speeds. Perfect for smoothies, soups, and more. 1000W motor.",
        price: 59.99,
        category: "Home & Kitchen",
        image: "https://images.unsplash.com/photo-1584568694244-14fbbc50bd94?w=400&h=300&fit=crop",
        rating: 4.6,
        inStock: true,
        discount: 8
    },
    {
        id: 10,
        name: "Web Development Mastery",
        description: "Complete guide to full-stack web development. HTML, CSS, JavaScript, Node.js, and React covered.",
        price: 39.99,
        category: "Books",
        image: "https://images.unsplash.com/photo-1497633762265-25c6b04588d7?w=400&h=300&fit=crop",
        rating: 4.8,
        inStock: true,
        discount: 0
    },
    {
        id: 11,
        name: "Wireless Speaker Boom",
        description: "Portable Bluetooth speaker with 360-degree sound. Water-resistant and 12-hour battery.",
        price: 69.99,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1488148841803-63bdb297e1f7?w=400&h=300&fit=crop",
        rating: 4.5,
        inStock: true,
        discount: 18
    },
    {
        id: 12,
        name: "Winter Jacket Cozy",
        description: "Warm and stylish winter jacket. Insulated with water-resistant outer layer.",
        price: 129.99,
        category: "Fashion",
        image: "https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=400&h=300&fit=crop",
        rating: 4.4,
        inStock: true,
        discount: 30
    },
    {
        id: 13,
        name: "Tent Outdoor Explorer",
        description: "Lightweight 4-person tent. Easy setup with weatherproof fabric. Perfect for camping.",
        price: 149.99,
        category: "Sports & Outdoors",
        image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&h=300&fit=crop",
        rating: 4.6,
        inStock: true,
        discount: 10
    },
    {
        id: 14,
        name: "Cookware Set Essential",
        description: "Non-stick cookware set with 5 pieces. Includes frying pan, saucepan, and more. Oven safe.",
        price: 79.99,
        category: "Home & Kitchen",
        image: "https://images.unsplash.com/photo-1584568694244-14fbbc50bd94?w=400&h=300&fit=crop",
        rating: 4.7,
        inStock: true,
        discount: 22
    },
    {
        id: 15,
        name: "Design Thinking Handbook",
        description: "Learn design thinking methodology. Perfect for product designers and innovators.",
        price: 24.99,
        category: "Books",
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=300&fit=crop",
        rating: 4.5,
        inStock: true,
        discount: 15
    },
    {
        id: 16,
        name: "USB-C Charging Cable",
        description: "High-speed USB-C charging and data transfer cable. 2-meter length. Durable braided design.",
        price: 12.99,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1589880365271-cc67bb20dda0?w=400&h=300&fit=crop",
        rating: 4.3,
        inStock: true,
        discount: 0
    },
    {
        id: 17,
        name: "Sneakers Comfort Walk",
        description: "Comfortable everyday sneakers with cushioned sole. Breathable mesh upper for all-day comfort.",
        price: 64.99,
        category: "Fashion",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
        rating: 4.2,
        inStock: true,
        discount: 20
    },
    {
        id: 18,
        name: "Hiking Backpack Pro",
        description: "40-liter hiking backpack with weather protection. Multiple compartments for organization.",
        price: 119.99,
        category: "Sports & Outdoors",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
        rating: 4.8,
        inStock: false,
        discount: 5
    },
    {
        id: 19,
        name: "Cutting Board Bamboo",
        description: "Eco-friendly bamboo cutting board. Food-safe and naturally antimicrobial. 35 x 25 cm.",
        price: 22.99,
        category: "Home & Kitchen",
        image: "https://images.unsplash.com/photo-1591618278900-073dbe9b1833?w=400&h=300&fit=crop",
        rating: 4.4,
        inStock: true,
        discount: 0
    },
    {
        id: 20,
        name: "Artificial Intelligence Basics",
        description: "Introduction to AI and machine learning concepts. For beginners with no prior knowledge needed.",
        price: 34.99,
        category: "Books",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop",
        rating: 4.6,
        inStock: true,
        discount: 10
    }
];

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { products };
}
