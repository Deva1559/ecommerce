# E-Commerce Product Catalogue

A modern e-commerce product catalogue with category-wise filtering, price sorting, and search functionality built with vanilla JavaScript, DOM manipulation, and Tailwind CSS.

## Project Overview

This project demonstrates full-stack SDLC practices including:
- Product data modelling and database design
- UI/UX structure and wireframing
- Workflow and sequence diagrams
- Frontend implementation with vanilla JavaScript
- Responsive design with Tailwind CSS
- Version control with Git

## Features

✅ **Category-wise Filtering** - Filter products by category
✅ **Price Sorting** - Sort products by price (Low to High / High to Low)
✅ **Search Functionality** - Real-time search across product names and descriptions
✅ **Dynamic DOM Manipulation** - Show/hide products based on filters without page reload
✅ **Responsive Design** - Mobile-friendly interface with Tailwind CSS
✅ **SDLC Documentation** - Comprehensive planning and design documentation

## Project Structure

```
.
├── README.md                 # Project documentation
├── .gitignore               # Git ignore rules
├── index.html               # Main HTML file
├── docs/                    # SDLC Documentation
│   ├── DATA_MODELLING.md    # Product data structure and schema
│   ├── UI_STRUCTURE.md      # UI/UX design and layout
│   ├── WORKFLOW_DIAGRAMS.md # Sequence and flow diagrams
│   └── TESTING_PLAN.md      # Test cases and strategy
├── src/                     # Source code
│   ├── app.js              # Main application logic
│   └── data.js             # Product data
└── assets/                  # Images and static files
    └── css/
        └── styles.css      # Custom CSS (optional)
```

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3 & Tailwind CSS** - Styling and responsive design
- **Vanilla JavaScript (ES6+)** - DOM manipulation and business logic
- **Git** - Version control

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Git installed on your system
- Code editor (VS Code recommended)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd ecommerce-catalogue
```

2. Open `index.html` in your browser:
   - Double-click the file, or
   - Use Live Server extension in VS Code

### Usage

1. **Filter by Category** - Click on category buttons to filter products
2. **Sort by Price** - Select sort option from dropdown
3. **Search Products** - Type in search box to filter by name/description
4. **Clear Filters** - Click "Reset Filters" to show all products

## SDLC Documentation

Detailed documentation is available in the `docs/` folder:

- **[Data Modelling](docs/DATA_MODELLING.md)** - Product schema, relationships, and data structure
- **[UI Structure](docs/UI_STRUCTURE.md)** - Layout design, components, and wireframes
- **[Workflow Diagrams](docs/WORKFLOW_DIAGRAMS.md)** - System architecture and user flows
- **[Testing Plan](docs/TESTING_PLAN.md)** - Test cases and validation strategy

## Development Workflow

1. **Plan** - Review documentation and requirements
2. **Design** - Study UI/UX structure and diagrams
3. **Develop** - Implement features using provided code
4. **Test** - Follow testing plan and validate functionality
5. **Deploy** - Push to GitHub repository

## Contributing

When contributing to this project:
1. Create a feature branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -m "Add your feature"`
3. Push to branch: `git push origin feature/your-feature`
4. Create a Pull Request

## Testing

Run the following test cases:
- Verify filter functionality
- Test price sorting (ascending/descending)
- Validate search functionality
- Check responsive design on mobile devices
- Test edge cases (empty results, special characters)

See [TESTING_PLAN.md](docs/TESTING_PLAN.md) for detailed test cases.

## License

This project is open source and available under the MIT License.

## Author

Created for educational purposes - E-Commerce Application Development

---

**Last Updated:** December 2, 2025
