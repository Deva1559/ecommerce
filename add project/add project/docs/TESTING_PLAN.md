# Testing Plan & Test Cases

## Overview
This document outlines the testing strategy, test cases, and validation procedures for the e-commerce product catalogue.

## Testing Scope

### In Scope
- Product filtering by category
- Price sorting (ascending/descending)
- Search functionality
- UI responsiveness
- DOM manipulation
- Filter combinations
- Edge cases and error handling

### Out of Scope
- Backend API testing
- Database testing
- Authentication/Authorization
- Payment processing

## Testing Levels

### 1. Unit Testing

#### Product Filter Function
```
Test Case 1.1: Filter by Electronics Category
Input: category = "Electronics", products = [5 products]
Expected Output: 2 Electronics products shown
Pass Criteria: Only Electronics products displayed

Test Case 1.2: Filter by Fashion Category
Input: category = "Fashion", products = [5 products]
Expected Output: 1 Fashion product shown
Pass Criteria: Only Fashion products displayed

Test Case 1.3: Filter with Invalid Category
Input: category = "InvalidCategory"
Expected Output: All products shown (no filter applied)
Pass Criteria: System handles gracefully without error
```

#### Price Range Filter Function
```
Test Case 1.4: Filter by Price Range $20-$50
Input: minPrice = 20, maxPrice = 50
Expected Output: Products within range shown
Pass Criteria: Only products $20-$50 displayed

Test Case 1.5: Filter with Extreme Price Range
Input: minPrice = 0, maxPrice = 10000
Expected Output: All products shown
Pass Criteria: No products filtered out

Test Case 1.6: Filter with Invalid Price Range
Input: minPrice = 100, maxPrice = 20
Expected Output: No products shown or error handling
Pass Criteria: System handles gracefully
```

#### Search Function
```
Test Case 1.7: Search for Existing Product
Input: searchTerm = "Wireless"
Expected Output: Matching products shown
Pass Criteria: "Wireless Headphones" displayed

Test Case 1.8: Search with Partial Match
Input: searchTerm = "head"
Expected Output: Matching products shown
Pass Criteria: "Wireless Headphones" displayed (case-insensitive)

Test Case 1.9: Search with No Results
Input: searchTerm = "XYZ12345"
Expected Output: Empty grid with "No results" message
Pass Criteria: User receives feedback

Test Case 1.10: Search with Special Characters
Input: searchTerm = "@#$%"
Expected Output: No results or handled gracefully
Pass Criteria: No JavaScript errors
```

#### Sort Function
```
Test Case 1.11: Sort by Price - Low to High
Input: sortOrder = "asc"
Expected Output: Products sorted by price ascending
Pass Criteria: $19.99 before $79.99 before $89.99

Test Case 1.12: Sort by Price - High to Low
Input: sortOrder = "desc"
Expected Output: Products sorted by price descending
Pass Criteria: $89.99 before $79.99 before $19.99

Test Case 1.13: Sort with No Filter Applied
Input: sortOrder = "asc", no filters active
Expected Output: All products sorted by price
Pass Criteria: Correct order maintained
```

### 2. Integration Testing

#### Filter Combinations
```
Test Case 2.1: Category + Price Range
Input: category = "Electronics", minPrice = 50, maxPrice = 100
Expected Output: Electronics products within price range
Pass Criteria: Only matching products displayed

Test Case 2.2: Search + Category
Input: searchTerm = "Shirt", category = "Fashion"
Expected Output: Fashion products matching search term
Pass Criteria: "Cotton T-Shirt" displayed

Test Case 2.3: All Filters Combined
Input: category = "Electronics", minPrice = 50, maxPrice = 100, 
       searchTerm = "Wireless", sortOrder = "asc"
Expected Output: Filtered, sorted results
Pass Criteria: All conditions applied correctly

Test Case 2.4: Reset Filters
Input: Click "Reset Filters" button
Expected Output: All filters cleared, all products shown
Pass Criteria: Grid returns to initial state
```

#### DOM Manipulation
```
Test Case 2.5: Product Card Rendering
Input: Product object
Expected Output: Card with all elements displayed
Pass Criteria: Image, title, price, rating, button visible

Test Case 2.6: Dynamic Grid Update
Input: Apply filter
Expected Output: Grid updated without page refresh
Pass Criteria: Smooth transition, no page reload

Test Case 2.7: Product Count Update
Input: Apply multiple filters
Expected Output: Product count updated
Pass Criteria: Count reflects displayed products
```

### 3. System Testing

#### Functional Requirements
```
Test Case 3.1: Category Filter Available
Expected: All 5 categories available as filter options
Pass Criteria: Electronics, Fashion, Home & Kitchen, Sports, Books

Test Case 3.2: Price Sorting Available
Expected: Sort options: Low to High, High to Low, Reset
Pass Criteria: All options functional and labeled correctly

Test Case 3.3: Search Bar Functional
Expected: Type in search box filters products
Pass Criteria: Real-time filtering works

Test Case 3.4: Add to Cart Button
Expected: Button clickable on each product
Pass Criteria: No JavaScript errors
```

#### Non-Functional Requirements
```
Test Case 3.5: Page Load Time
Expected: Page loads in < 2 seconds
Pass Criteria: Performance acceptable

Test Case 3.6: Filter Response Time
Expected: Filters apply instantly (< 100ms)
Pass Criteria: No lag or delay

Test Case 3.7: Search Responsiveness
Expected: Search updates instantly
Pass Criteria: No UI freezing

Test Case 3.8: Mobile Responsiveness
Expected: Works on screens 320px+ wide
Pass Criteria: No layout breaks, accessible
```

### 4. User Acceptance Testing (UAT)

#### Workflow Tests
```
Test Case 4.1: Complete Shopping Workflow
Steps:
1. Browse all products
2. Filter by Electronics category
3. Sort by price low to high
4. Search for "Wireless"
5. Add product to cart
Expected: All steps complete without errors
Pass Criteria: Workflow successful

Test Case 4.2: Comparison Shopping
Steps:
1. Filter by Electronics
2. Sort by price high to low
3. Compare multiple products
Expected: Easy to compare products
Pass Criteria: User can effectively compare

Test Case 4.3: Narrow Down Search
Steps:
1. Search "T-Shirt"
2. Filter by Fashion
3. Sort by price
Expected: Successfully narrows to specific product
Pass Criteria: Desired product found quickly
```

#### User Interface Tests
```
Test Case 4.4: Intuitive Navigation
Expected: User can filter without instructions
Pass Criteria: UI controls clearly labeled

Test Case 4.5: Visual Feedback
Expected: Selected filters visually indicated
Pass Criteria: Active state clearly shown

Test Case 4.6: Error Messages
Expected: Clear error messages for invalid input
Pass Criteria: Users understand what went wrong
```

### 5. Usability Testing

```
Test Case 5.1: First-time User
Expected: User can navigate without training
Pass Criteria: Intuitive interface

Test Case 5.2: Filter Discoverability
Expected: Users find filter options easily
Pass Criteria: No confusion about location

Test Case 5.3: Search Expectations
Expected: Search works as users expect
Pass Criteria: Behaves like common search interfaces

Test Case 5.4: Mobile User Experience
Expected: All features accessible on mobile
Pass Criteria: Thumbs can easily tap buttons
```

## Regression Test Cases

### After Each Change
```
Test Case R.1: All Filters Still Work
Expected: No functionality broken
Pass Criteria: Category, price, search all functional

Test Case R.2: UI Still Responsive
Expected: No visual regression
Pass Criteria: Layout intact on all devices

Test Case R.3: Product Data Intact
Expected: All products display correctly
Pass Criteria: No data corruption or loss

Test Case R.4: No Console Errors
Expected: No JavaScript errors in console
Pass Criteria: Browser console clean
```

## Edge Cases & Error Handling

### Edge Case Testing
```
Test Case E.1: Empty Product List
Input: No products in data.js
Expected: Graceful display of empty state
Pass Criteria: User sees "No products available" message

Test Case E.2: Very Large Product List
Input: 1000+ products
Expected: Page still performs well
Pass Criteria: Filtering still responsive

Test Case E.3: Duplicate Product Names
Input: Multiple products with same name
Expected: All displayed correctly
Pass Criteria: No deduplication errors

Test Case E.4: Missing Product Images
Input: Product with no image URL
Expected: Placeholder or default image shown
Pass Criteria: Card displays without errors

Test Case E.5: Very Long Product Names
Input: Product name > 100 characters
Expected: Text wraps or truncates gracefully
Pass Criteria: Layout not broken

Test Case E.6: Special Characters in Search
Input: searchTerm = "Café", "naïve", etc.
Expected: Search handles accented characters
Pass Criteria: Results found correctly

Test Case E.7: Rapid Filter Changes
Input: User clicks filters very quickly
Expected: No duplicate renders or errors
Pass Criteria: Debouncing works correctly

Test Case E.8: Browser Back Button
Input: User navigates back after filtering
Expected: Previous state maintained or all products shown
Pass Criteria: No broken state
```

## Performance Test Cases

```
Test Case P.1: Filter Performance (100 products)
Expected: Filter applies in < 50ms
Pass Criteria: Instant user experience

Test Case P.2: Search Performance
Input: Search through 1000 products
Expected: Search completes in < 100ms
Pass Criteria: Responsive interface

Test Case P.3: Memory Usage
Expected: No memory leaks after repeated filtering
Pass Criteria: Consistent performance

Test Case P.4: DOM Update Performance
Expected: Rerendering 50+ cards smoothly
Pass Criteria: 60 FPS animation if applicable
```

## Browser Compatibility

```
Test Case B.1: Chrome/Edge Latest
Expected: All features work
Pass Criteria: No visual or functional issues

Test Case B.2: Firefox Latest
Expected: All features work
Pass Criteria: No visual or functional issues

Test Case B.3: Safari Latest
Expected: All features work
Pass Criteria: No visual or functional issues

Test Case B.4: Mobile Browsers
Expected: All features work on mobile
Pass Criteria: Touch interactions work
```

## Accessibility Testing

```
Test Case A.1: Keyboard Navigation
Expected: All controls accessible via keyboard
Pass Criteria: Tab through all interactive elements

Test Case A.2: Screen Reader Compatibility
Expected: Page readable by screen readers
Pass Criteria: ARIA labels present and correct

Test Case A.3: Color Contrast
Expected: Text readable for color-blind users
Pass Criteria: WCAG AA compliance

Test Case A.4: Mobile Accessibility
Expected: Touch targets large enough
Pass Criteria: Minimum 44px touch targets
```

## Test Execution Checklist

### Pre-Testing
- [ ] Code deployed/built
- [ ] Test data loaded
- [ ] Browser cache cleared
- [ ] All devices/browsers available
- [ ] Test cases reviewed

### During Testing
- [ ] Execute all test cases
- [ ] Document results
- [ ] Screenshot failures
- [ ] Note environment details
- [ ] Log any issues

### Post-Testing
- [ ] Summarize results
- [ ] Create bug report for failures
- [ ] Assign priorities
- [ ] Plan fixes
- [ ] Schedule retesting

## Bug Report Template

```
Bug ID: [AUTO-GENERATED]
Title: [Brief description]
Severity: [Critical/High/Medium/Low]
Priority: [P0/P1/P2/P3]

Description:
[Detailed description of the bug]

Steps to Reproduce:
1. [Step 1]
2. [Step 2]
3. [Step 3]

Expected Result:
[What should happen]

Actual Result:
[What actually happened]

Environment:
- Browser: [Chrome/Firefox/Safari]
- OS: [Windows/Mac/Linux]
- Device: [Desktop/Mobile/Tablet]
- Screen Resolution: [e.g., 1920x1080]

Attachments:
- Screenshot
- Video (if applicable)
- Console errors
```

## Test Metrics

### Measurement Goals
- **Test Coverage:** Aim for > 90%
- **Pass Rate:** Target 100%
- **Bug Density:** < 1 bug per 100 LOC
- **Response Time:** < 100ms for all filters
- **Browser Coverage:** 4+ major browsers

---

**Version:** 1.0
**Date:** December 2, 2025
