import React, { useState } from 'react';
import ProductCard from './ProductCard';
import Cart from './Cart';
import './App.css';

const products = [
  { id: 1, title: 'Laptop', category: 'Electronics', price: 999, image: 'laptop.jpg' },
  { id: 2, title: 'Coffee Maker', category: 'Home Appliances', price: 49, image: 'coffee-maker.jpg' },
  { id: 3, title: 'Headphones', category: 'Electronics', price: 199, image: 'headphones.jpg' },
  { id: 4, title: 'Smartphone', category: 'Electronics', price: 799, image: 'smartphone.jpg' },
  { id: 5, title: 'Blender', category: 'Home Appliances', price: 89, image: 'blender.jpg' },
];

function App() {
  const [filter, setFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);

  // Filter by category and search term
  const filteredProducts = products.filter((product) => {
    const matchesCategory = filter ? product.category === filter : true;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Add product to cart
  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  // Update quantity
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
    } else {
      setCart(cart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  return (
    <div className="app-container">
      <header>
        <h1>🛍️ ShopEase Product Catalog</h1>
        <p className="subtitle">Find the perfect products for your needs</p>
      </header>

      <div className="controls">
        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="🔍 Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Filter Buttons */}
        <div className="filter-buttons">
          <button 
            className={filter === '' ? 'active' : ''}
            onClick={() => setFilter('')}
          >
            All
          </button>
          <button 
            className={filter === 'Electronics' ? 'active' : ''}
            onClick={() => setFilter('Electronics')}
          >
            Electronics
          </button>
          <button 
            className={filter === 'Home Appliances' ? 'active' : ''}
            onClick={() => setFilter('Home Appliances')}
          >
            Home Appliances
          </button>
        </div>
      </div>

      <div className="main-content">
        {/* Product List */}
        <div className="product-section">
          <h2>Products ({filteredProducts.length})</h2>
          {filteredProducts.length === 0 ? (
            <p className="no-results">No products found. Try a different search or filter.</p>
          ) : (
            <div className="product-list">
              {filteredProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  addToCart={addToCart}
                />
              ))}
            </div>
          )}
        </div>

        {/* Cart */}
        <Cart 
          cart={cart} 
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
        />
      </div>
    </div>
  );
}

export default App;