# Product Data Modelling

## Overview
This document outlines the data structure, schema design, and relationships for the e-commerce product catalogue system.

## Data Model

### Product Entity

```
Product {
  id: Number (unique identifier)
  name: String (product name)
  description: String (detailed description)
  price: Number (product price in USD)
  category: String (product category)
  image: String (image URL or path)
  rating: Number (0-5 star rating)
  inStock: Boolean (availability status)
  discount: Number (discount percentage, optional)
}
```

### Example Product

```javascript
{
  id: 1,
  name: "Wireless Headphones",
  description: "High-quality sound with noise cancellation",
  price: 79.99,
  category: "Electronics",
  image: "assets/images/headphones.jpg",
  rating: 4.5,
  inStock: true,
  discount: 10
}
```

## Categories

The system supports the following product categories:

1. **Electronics** - Gadgets, headphones, accessories
2. **Fashion** - Clothing, shoes, accessories
3. **Home & Kitchen** - Household items, appliances
4. **Sports & Outdoors** - Sports equipment, outdoor gear
5. **Books** - Physical and digital books

## Data Relationships

### Hierarchical Structure

```
Store
├── Products Collection
│   ├── Product 1
│   │   ├── Electronics
│   │   └── Price: $79.99
│   ├── Product 2
│   │   ├── Fashion
│   │   └── Price: $49.99
│   └── Product N
│
├── Categories Collection
│   ├── Electronics
│   ├── Fashion
│   ├── Home & Kitchen
│   ├── Sports & Outdoors
│   └── Books
│
└── Filters Collection
    ├── Category Filter
    ├── Price Range Filter
    └── Search Filter
```

## Database Schema (If using backend)

### Products Table

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | INT | PRIMARY KEY, AUTO_INCREMENT | Unique product identifier |
| name | VARCHAR(255) | NOT NULL | Product name |
| description | TEXT | NULL | Detailed description |
| price | DECIMAL(10,2) | NOT NULL | Price in USD |
| category | VARCHAR(100) | NOT NULL, FOREIGN KEY | Category reference |
| image | VARCHAR(500) | NULL | Image URL |
| rating | DECIMAL(2,1) | DEFAULT 0 | Rating 0-5 |
| in_stock | BOOLEAN | DEFAULT true | Stock availability |
| discount | DECIMAL(5,2) | DEFAULT 0 | Discount percentage |
| created_at | TIMESTAMP | DEFAULT NOW() | Creation date |
| updated_at | TIMESTAMP | DEFAULT NOW() | Last update date |

### Categories Table

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | INT | PRIMARY KEY, AUTO_INCREMENT | Unique category ID |
| name | VARCHAR(100) | NOT NULL, UNIQUE | Category name |
| description | TEXT | NULL | Category description |
| icon | VARCHAR(500) | NULL | Category icon |
| created_at | TIMESTAMP | DEFAULT NOW() | Creation date |

## Data Validation Rules

### Product Validation

1. **Name**
   - Required field
   - Min length: 3 characters
   - Max length: 255 characters

2. **Price**
   - Required field
   - Must be > 0
   - Format: decimal with max 2 decimal places

3. **Category**
   - Required field
   - Must be valid category from predefined list
   - Case-insensitive matching

4. **Description**
   - Optional field
   - Max length: 1000 characters

5. **Image**
   - Optional field
   - Must be valid URL or file path

6. **Rating**
   - Optional field
   - Must be between 0 and 5
   - Decimal with max 1 decimal place

7. **Discount**
   - Optional field
   - Must be between 0 and 100
   - Represents percentage

## Data Flow

```
Input (User Action)
    ↓
Validation Layer
    ↓
Filter/Sort Logic
    ↓
DOM Manipulation
    ↓
Display to User
```

## Example Dataset

### Sample Products

```javascript
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "Premium sound quality with noise cancellation and 30-hour battery",
    price: 79.99,
    category: "Electronics",
    image: "assets/images/headphones.jpg",
    rating: 4.5,
    inStock: true,
    discount: 10
  },
  {
    id: 2,
    name: "Cotton T-Shirt",
    description: "Comfortable 100% cotton t-shirt available in multiple colors",
    price: 19.99,
    category: "Fashion",
    image: "assets/images/tshirt.jpg",
    rating: 4.2,
    inStock: true,
    discount: 0
  },
  {
    id: 3,
    name: "Coffee Maker",
    description: "Programmable coffee maker with thermal carafe",
    price: 49.99,
    category: "Home & Kitchen",
    image: "assets/images/coffee.jpg",
    rating: 4.8,
    inStock: true,
    discount: 15
  },
  {
    id: 4,
    name: "Running Shoes",
    description: "Lightweight athletic shoes for running and training",
    price: 89.99,
    category: "Sports & Outdoors",
    image: "assets/images/shoes.jpg",
    rating: 4.6,
    inStock: false,
    discount: 5
  },
  {
    id: 5,
    name: "JavaScript Guide",
    description: "Comprehensive guide to modern JavaScript programming",
    price: 29.99,
    category: "Books",
    image: "assets/images/book.jpg",
    rating: 4.9,
    inStock: true,
    discount: 20
  }
];
```

## Performance Considerations

1. **Indexing** - Index on category and price for faster filtering
2. **Pagination** - Implement for large datasets (1000+ products)
3. **Caching** - Cache frequently accessed data
4. **Search Optimization** - Use efficient string matching algorithms

## Scalability

For future scaling:
- Migrate to NoSQL database for flexibility
- Implement API endpoints for data retrieval
- Add data aggregation and analytics
- Implement real-time inventory management

---

**Version:** 1.0
**Date:** December 2, 2025
