# ShopEase Product Catalog

A modern, responsive e-commerce product catalog built with React and Vite. Features dynamic filtering, search functionality, and a shopping cart system.

##  Features

- **Product Filtering**: Filter products by category (Electronics, Home Appliances)
- **Search Functionality**: Real-time search to find products by name
- **Shopping Cart**: Add, remove, and manage product quantities
- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Modern UI**: Clean, professional interface with smooth animations

## Technologies Used

- **React** - Component-based UI library
- **Vite** - Fast build tool and dev server
- **JavaScript (ES6+)** - Modern JavaScript features
- **CSS3** - Flexbox, Grid, and responsive design
- **Vitest** - Unit testing framework
- **React Testing Library** - Component testing utilities

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup Instructions

1. **Clone the repository**
```bash
   git clone https://github.com/shobinn24/shop-ease-catalog.git
   cd shop-ease-catalog
```

2. **Install dependencies**
```bash
   npm install
```

3. **Start the development server**
```bash
   npm run dev
```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## Running Tests

Run the test suite:
```bash
npm test
```

Run tests once (no watch mode):
```bash
npm test run
```

## Project Structure
```
shop-ease-catalog/
├── src/
│   ├── App.jsx           # Main application component
│   ├── ProductCard.jsx   # Individual product card component
│   ├── Cart.jsx          # Shopping cart component
│   ├── App.css           # Application styles
│   ├── main.jsx          # React entry point
│   └── App.test.jsx      # Test suite
├── public/               # Static assets
├── index.html            # HTML entry point
├── vite.config.js        # Vite configuration
└── package.json          # Project dependencies
```

## Key Learning Concepts

This project demonstrates:
- **React Hooks**: `useState` for state management
- **Props**: Passing data between components
- **Event Handling**: User interactions (clicks, text input)
- **Array Methods**: `.filter()`, `.map()`, `.reduce()`, `.find()`
- **Conditional Rendering**: Showing/hiding UI elements
- **Component Composition**: Building reusable components
- **Responsive Design**: Mobile-first CSS approach

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm test` - Run tests in watch mode

## Future Enhancements

- [ ] Add product detail pages
- [ ] Implement localStorage for cart persistence
- [ ] Add sorting functionality (price, name)
- [ ] Integrate with a real API
- [ ] Add user authentication
- [ ] Implement checkout process

## Author

**Your Name**
- GitHub: [@shobinn24](https://github.com/shobinn24)
- LinkedIn: [Your LinkedIn](https://www.linkedin.com/in/shobinn-clark-27722a85/)

## 🙏 Acknowledgments

Built as part of the Flatiron School Full-Stack Software Engineering Program.

---

⭐ If you found this project helpful, please consider giving it a star!