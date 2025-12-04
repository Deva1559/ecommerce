# Workflow & Sequence Diagrams

## System Architecture

### High-Level System Overview

```
┌─────────────┐
│   Browser   │
│  (Frontend) │
└──────┬──────┘
       │
       │ HTML/CSS/JavaScript
       │
       ├─── DOM Manipulation
       ├─── Event Listeners
       └─── Local Data (data.js)
```

## User Interaction Flow

### Main Application Flow

```
START
  │
  ├─→ Load Page (index.html)
  │   │
  │   ├─→ Load Tailwind CSS
  │   ├─→ Load data.js (products)
  │   ├─→ Load app.js (logic)
  │   └─→ Render Initial Product Grid
  │
  ├─→ User Actions Available:
  │   ├─→ Filter by Category
  │   ├─→ Sort by Price
  │   ├─→ Search Products
  │   ├─→ Reset Filters
  │   └─→ Add to Cart
  │
  └─→ END
```

## Filter Application Sequence

### Category Filter Sequence Diagram

```
User Interface          JavaScript Logic        DOM
    │                       │                    │
    │ Click Category        │                    │
    ├──────────────────────→│                    │
    │                       │ Get Filter Value   │
    │                       ├───────────┐        │
    │                       │           │        │
    │                       │ Apply     │        │
    │                       │ Filter    │        │
    │                       │           │        │
    │                       │←──────────┘        │
    │                       │ Update DOM         │
    │                       ├───────────────────→│
    │                       │                    │ Remove Hidden
    │                       │                    │ Show Matching
    │                       │                    │ Update Count
    │                       │                    │
    │←──────────────────────────────────────────┤
    │ Display Filtered     │                    │
    │ Products             │                    │
    │                      │                    │
```

### Step-by-Step Filter Process

```
1. User Click Event
   └─→ Capture category value

2. Validation
   └─→ Verify valid category

3. Filter Application
   ├─→ Get all products
   ├─→ Filter by category
   └─→ Return filtered array

4. Additional Filters Applied
   ├─→ Apply price range
   ├─→ Apply search term
   └─→ Return combined results

5. DOM Update
   ├─→ Clear product grid
   ├─→ Render filtered products
   ├─→ Update product count
   └─→ Update active filter states

6. User Sees Results
   └─→ New product grid displayed
```

## Search Functionality Flow

### Search Process Diagram

```
Search Input
    │
    ├─→ User Types Character
    │   │
    │   └─→ Debounce Timer Start (300ms)
    │
    ├─→ Wait for User to Stop Typing
    │
    ├─→ Trigger Search Logic
    │   ├─→ Get search term
    │   ├─→ Convert to lowercase
    │   ├─→ Trim whitespace
    │   │
    │   └─→ Search in Products
    │       ├─→ Match name
    │       ├─→ Match description
    │       └─→ Match category
    │
    ├─→ Combine with Active Filters
    │   ├─→ Apply category filter
    │   ├─→ Apply price range
    │   └─→ Apply search results
    │
    └─→ Update Display
        ├─→ Show matching products
        └─→ Display no results message (if applicable)
```

## Price Sorting Flow

### Sort Application Sequence

```
Sort Selection
    │
    ├─→ Get Current Filtered Products
    │
    ├─→ Determine Sort Order
    │   ├─→ "Price: Low to High"
    │   │   └─→ Sort ascending by price
    │   │
    │   ├─→ "Price: High to Low"
    │   │   └─→ Sort descending by price
    │   │
    │   └─→ "Reset"
    │       └─→ Return to original order
    │
    ├─→ Apply Sort Algorithm
    │   └─→ JavaScript Array.sort()
    │
    ├─→ Update DOM with Sorted Products
    │   ├─→ Clear grid
    │   ├─→ Render in new order
    │   └─→ Update UI indicators
    │
    └─→ Display Sorted Results
```

## Complete Event Flow

### Full Interaction Workflow

```
Page Load
    ↓
├── Initialize App
│   ├── Load products from data.js
│   ├── Store in memory
│   └── Render all products
│
User Interaction
    ↓
├── Category Filter
│   ├── Event listener captures click
│   ├── Filter products by category
│   ├── Combine with other active filters
│   └── Update DOM
│
├── Price Range
│   ├── Get min/max values
│   ├── Filter products
│   ├── Combine with category filter
│   └── Update DOM
│
├── Sort
│   ├── Apply sort to filtered results
│   ├── Maintain filter state
│   └── Update DOM order
│
├── Search
│   ├── Trigger on input
│   ├── Debounce for performance
│   ├── Match against products
│   └── Update DOM
│
└── Reset
    ├── Clear all filters
    ├── Clear search input
    ├── Reset sort dropdown
    ├── Reload all products
    └── Update DOM
```

## DOM Manipulation Flow

### Element Update Process

```
Filtered Products Array
        ↓
┌───────────────────────────────────────┐
│ For Each Product in Filtered Array    │
└───────────────────────────────────────┘
        ↓
┌───────────────────────────────────────┐
│ Create Product Card HTML               │
│ - Image                                │
│ - Name                                 │
│ - Description                          │
│ - Price                                │
│ - Rating                               │
│ - Stock Status                         │
│ - Add to Cart Button                   │
└───────────────────────────────────────┘
        ↓
┌───────────────────────────────────────┐
│ Append to Product Grid Container      │
└───────────────────────────────────────┘
        ↓
Display to User
```

## State Management

### Application State Diagram

```
App State
├── Products (Array)
│   ├── All Products
│   ├── Filtered Products
│   └── Displayed Products
│
├── Filters (Object)
│   ├── selectedCategory
│   ├── minPrice
│   ├── maxPrice
│   ├── searchTerm
│   └── sortOrder
│
└── UI State
    ├── activeButtons
    ├── sortDropdownValue
    ├── searchInputValue
    └── productCount
```

### State Update Flow

```
User Action
    ↓
Event Handler
    ↓
Update Filter State
    ↓
Recalculate Filtered Products
    ↓
Update DOM with New Products
    ↓
Update UI Indicators
    ↓
Complete
```

## Filter Combination Logic

### Multi-Filter Application

```
All Products
    ↓
Apply Category Filter
    ↓
Apply Price Range Filter
    ↓
Apply Search Filter
    ↓
Apply Sort
    ↓
Final Displayed Products
```

### Pseudo-code

```javascript
function getFilteredProducts() {
  let results = allProducts;
  
  // Category filter
  if (selectedCategory !== 'all') {
    results = results.filter(p => p.category === selectedCategory);
  }
  
  // Price range filter
  results = results.filter(p => 
    p.price >= minPrice && p.price <= maxPrice
  );
  
  // Search filter
  if (searchTerm) {
    results = results.filter(p =>
      p.name.includes(searchTerm) ||
      p.description.includes(searchTerm)
    );
  }
  
  // Sort filter
  if (sortOrder === 'asc') {
    results.sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'desc') {
    results.sort((a, b) => b.price - a.price);
  }
  
  return results;
}
```

## Error Handling Flow

```
User Action
    ↓
Validate Input
    ├─→ Valid
    │   └─→ Process
    │
    └─→ Invalid
        ├─→ Catch Error
        ├─→ Log Error
        ├─→ Show User Message
        └─→ Maintain Current State
```

## Performance Optimization Flow

```
User Input (Search/Filter)
    ↓
Debounce/Throttle
    ├─→ Wait for user to finish typing
    ├─→ Prevent excessive filtering
    └─→ Improve performance
    ↓
Filter Application
    ├─→ Use efficient algorithms
    ├─→ Minimize DOM manipulation
    └─→ Batch updates
    ↓
Render Results
    └─→ Display to user
```

## Version Control Workflow

### Git Workflow

```
Start Development
    ↓
Create Feature Branch
    git checkout -b feature/filtering
    ↓
Make Changes
    - Edit files
    - Test locally
    ↓
Stage Changes
    git add .
    ↓
Commit Changes
    git commit -m "Add filtering functionality"
    ↓
Push to Remote
    git push origin feature/filtering
    ↓
Create Pull Request
    ↓
Code Review
    ↓
Merge to Main
    git checkout main
    git merge feature/filtering
    ↓
Complete
```

---

**Version:** 1.0
**Date:** December 2, 2025
