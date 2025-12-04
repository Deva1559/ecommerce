# UI Structure & Design

## Overview
This document describes the user interface layout, components, and design patterns for the e-commerce product catalogue.

## Page Layout

### Desktop Layout (1200px+)

```
┌─────────────────────────────────────────────────────┐
│                    HEADER                            │
│  Logo | Search Box | Cart Icon | Account             │
├──────────────┬──────────────────────────────────────┤
│              │                                        │
│  SIDEBAR     │          MAIN CONTENT AREA             │
│              │                                        │
│  Filters:    │  ┌──────────┐  ┌──────────┐           │
│  • Category  │  │ Product  │  │ Product  │           │
│  • Price     │  │   Card   │  │   Card   │           │
│  • Sort      │  └──────────┘  └──────────┘           │
│              │                                        │
│              │  ┌──────────┐  ┌──────────┐           │
│              │  │ Product  │  │ Product  │           │
│              │  │   Card   │  │   Card   │           │
│              │  └──────────┘  └──────────┘           │
│              │                                        │
└──────────────┴──────────────────────────────────────┘
```

### Mobile Layout (320px - 768px)

```
┌────────────────────────────┐
│       HEADER               │
│ ☰ | Logo | 🔍 | 🛒        │
├────────────────────────────┤
│                            │
│  Filter Toggle Button      │
│  (Show/Hide Sidebar)       │
│                            │
│  ┌──────────────────────┐  │
│  │   Product Card       │  │
│  │                      │  │
│  └──────────────────────┘  │
│                            │
│  ┌──────────────────────┐  │
│  │   Product Card       │  │
│  │                      │  │
│  └──────────────────────┘  │
│                            │
└────────────────────────────┘
```

## Component Hierarchy

```
App
├── Header
│   ├── Logo
│   ├── Search Bar
│   └── Cart/Account
│
├── Main Container
│   ├── Sidebar (Filters)
│   │   ├── Category Filter
│   │   │   └── Category Buttons
│   │   ├── Price Range Filter
│   │   │   ├── Min Price Input
│   │   │   └── Max Price Input
│   │   ├── Sort Options
│   │   │   └── Sort Dropdown
│   │   └── Reset Button
│   │
│   └── Products Grid
│       ├── Product Card 1
│       │   ├── Image
│       │   ├── Title
│       │   ├── Description
│       │   ├── Price
│       │   ├── Rating
│       │   ├── Stock Status
│       │   └── Add to Cart Button
│       │
│       ├── Product Card 2
│       │   └── (Same structure)
│       │
│       └── Product Card N
│           └── (Same structure)
│
└── Footer
    ├── Links
    ├── Copyright
    └── Social Media
```

## UI Components

### 1. Header Component

**Purpose:** Main navigation and branding

**Elements:**
- Logo/Brand name
- Search bar with search button
- Shopping cart icon with item count
- User account menu

**Tailwind Classes:**
```html
<header class="bg-white shadow-md sticky top-0 z-50">
  <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
    <!-- Logo and Brand -->
    <!-- Search Bar -->
    <!-- Right Menu -->
  </div>
</header>
```

### 2. Filter Sidebar Component

**Purpose:** Category, price, and sort controls

**Sub-components:**
- Category Filter (Radio buttons or toggles)
- Price Range Filter (Slider or input fields)
- Sort Dropdown (Ascending/Descending)
- Reset Filters Button

**Tailwind Classes:**
```html
<aside class="w-64 bg-gray-50 p-6 space-y-6">
  <!-- Category Filter -->
  <!-- Price Filter -->
  <!-- Sort Dropdown -->
  <!-- Reset Button -->
</aside>
```

### 3. Product Card Component

**Purpose:** Display individual product information

**Elements:**
- Product image
- Product name (title)
- Brief description
- Price (with discount if applicable)
- Star rating
- Stock status badge
- "Add to Cart" button

**Dimensions:** 280px width (responsive)

**Tailwind Classes:**
```html
<div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
  <!-- Image Container -->
  <img class="w-full h-48 object-cover" src="..." alt="...">
  
  <!-- Content -->
  <div class="p-4 space-y-2">
    <h3 class="font-bold text-lg">Product Name</h3>
    <p class="text-gray-600 text-sm">Description</p>
    
    <!-- Price Section -->
    <div class="flex items-center justify-between">
      <span class="text-xl font-bold text-green-600">$79.99</span>
      <span class="text-sm text-red-500">-10%</span>
    </div>
    
    <!-- Rating -->
    <div class="flex items-center">
      <span class="text-yellow-400">★★★★★</span>
      <span class="text-gray-600 text-sm ml-2">(4.5)</span>
    </div>
    
    <!-- Stock Status -->
    <span class="text-sm text-green-600">In Stock</span>
    
    <!-- Button -->
    <button class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
      Add to Cart
    </button>
  </div>
</div>
```

### 4. Search Bar Component

**Purpose:** Real-time product search

**Features:**
- Debounced search input
- Placeholder text
- Clear button
- Search icon

**Tailwind Classes:**
```html
<div class="flex items-center bg-gray-100 rounded-lg px-4 py-2">
  <svg class="w-5 h-5 text-gray-400"><!-- Search Icon --></svg>
  <input type="text" placeholder="Search products..." 
    class="bg-transparent ml-2 outline-none flex-1">
  <button class="text-gray-400 hover:text-gray-600">✕</button>
</div>
```

### 5. Filter Section Component

**Purpose:** Display filter options

**Sub-sections:**
- Category buttons
- Price range slider/inputs
- Sort dropdown

**Interaction:**
- Click to select/deselect
- Multiple selections allowed for category
- Single selection for sort
- Real-time update of product grid

## Design System

### Color Palette

- **Primary:** Blue (#2563EB)
- **Success:** Green (#16A34A)
- **Warning:** Yellow (#EAB308)
- **Danger:** Red (#DC2626)
- **Neutral:** Gray (#6B7280)
- **Background:** White (#FFFFFF)
- **Light Background:** Light Gray (#F3F4F6)

### Typography

- **Headings:** Fonts sizes: 24px (h1), 20px (h2), 18px (h3)
- **Body Text:** 16px
- **Small Text:** 14px
- **Font Family:** System fonts / Tailwind defaults

### Spacing

- **XS:** 4px (0.25rem)
- **SM:** 8px (0.5rem)
- **MD:** 16px (1rem)
- **LG:** 24px (1.5rem)
- **XL:** 32px (2rem)
- **2XL:** 48px (3rem)

### Shadows

- **Light Shadow:** Small shadow for cards
- **Medium Shadow:** Hover states
- **Dark Shadow:** Modals and overlays

## Responsive Design

### Breakpoints

- **Mobile:** 320px - 640px (sm)
- **Tablet:** 641px - 1024px (md)
- **Desktop:** 1025px - 1280px (lg)
- **Large Desktop:** 1281px+ (xl)

### Responsive Grid

```
Mobile (1 column):
┌──────────┐
│ Product  │
├──────────┤
│ Product  │
└──────────┘

Tablet (2 columns):
┌──────────┬──────────┐
│ Product  │ Product  │
├──────────┼──────────┤
│ Product  │ Product  │
└──────────┴──────────┘

Desktop (4 columns):
┌────┬────┬────┬────┐
│ P  │ P  │ P  │ P  │
├────┼────┼────┼────┤
│ P  │ P  │ P  │ P  │
└────┴────┴────┴────┘
```

## Wireframes

### Header Wireframe
```
[Logo] [Search Box                    ] [Cart] [Account]
```

### Product Grid Wireframe
```
[Filter] | [Product] [Product] [Product] [Product]
         | [Product] [Product] [Product] [Product]
         | [Product] [Product] [Product] [Product]
```

### Product Card Wireframe
```
┌─────────────────┐
│   [Image]       │
├─────────────────┤
│ Product Name    │
│ Description     │
│ $XX.XX [-X%]    │
│ ★★★★☆ (4.5)    │
│ In Stock        │
│ [Add to Cart]   │
└─────────────────┘
```

## User Interactions

### Filter Application
1. User clicks category button
2. JavaScript filters products
3. Grid updates with filtered results
4. Active filter highlighted

### Price Sorting
1. User selects sort option
2. Products reorder
3. UI reflects new order

### Search
1. User types in search box
2. Real-time filtering occurs
3. Results update dynamically
4. No page refresh

## Accessibility

- **Semantic HTML** - Proper heading hierarchy
- **ARIA Labels** - For screen readers
- **Keyboard Navigation** - Tab through buttons
- **Color Contrast** - Minimum WCAG AA compliance
- **Alt Text** - For all product images

---

**Version:** 1.0
**Date:** December 2, 2025
