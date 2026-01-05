import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App Component', () => {
  it('renders the app title', () => {
    render(<App />);
    const heading = screen.getByText(/ShopEase Product Catalog/i);
    expect(heading).toBeInTheDocument();
  });

  it('filters products by Electronics category', () => {
    render(<App />);

    // Use getByRole to specifically target the BUTTON, not the category text
    const electronicsButton = screen.getByRole('button', { name: 'Electronics' });
    fireEvent.click(electronicsButton);

    // Check if Laptop (Electronics) is visible
    expect(screen.getByText('Laptop')).toBeInTheDocument();
    
    // Check if Coffee Maker (Home Appliances) is NOT visible
    expect(screen.queryByText('Coffee Maker')).not.toBeInTheDocument();
  });

  it('filters products by Home Appliances category', () => {
    render(<App />);

    const homeAppliancesButton = screen.getByRole('button', { name: 'Home Appliances' });
    fireEvent.click(homeAppliancesButton);

    // Check if Coffee Maker is visible
    expect(screen.getByText('Coffee Maker')).toBeInTheDocument();
    
    // Check if Laptop is NOT visible
    expect(screen.queryByText('Laptop')).not.toBeInTheDocument();
  });

  it('shows all products when All button is clicked', () => {
    render(<App />);

    // First filter to Electronics
    const electronicsButton = screen.getByRole('button', { name: 'Electronics' });
    fireEvent.click(electronicsButton);

    // Then click All
    const allButton = screen.getByRole('button', { name: 'All' });
    fireEvent.click(allButton);

    // All products should be visible
    expect(screen.getByText('Laptop')).toBeInTheDocument();
    expect(screen.getByText('Coffee Maker')).toBeInTheDocument();
    expect(screen.getByText('Headphones')).toBeInTheDocument();
  });

  it('filters products by search term', () => {
    render(<App />);

    const searchInput = screen.getByPlaceholderText(/search products/i);
    fireEvent.change(searchInput, { target: { value: 'laptop' } });

    // Only Laptop should be visible
    expect(screen.getByText('Laptop')).toBeInTheDocument();
    expect(screen.queryByText('Coffee Maker')).not.toBeInTheDocument();
  });

  it('adds product to cart', () => {
    render(<App />);

    // Find and click the first "Add to Cart" button
    const addToCartButtons = screen.getAllByText('Add to Cart');
    fireEvent.click(addToCartButtons[0]); // Add Laptop

    // Check if cart is no longer empty
    expect(screen.queryByText('Your cart is empty')).not.toBeInTheDocument();
  });
});