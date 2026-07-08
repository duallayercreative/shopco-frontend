import React, { createContext, useContext, useState, useEffect } from 'react';

const ShopContext = createContext();

export function useShop() {
  return useContext(ShopContext);
}

export function ShopProvider({ children }) {
  // Try to load cart from localStorage, default to empty array
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem('shopco_cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error('Failed to load cart:', error);
      return [];
    }
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('shopco_cart', JSON.stringify(cart));
    } catch (error) {
      console.error('Failed to save cart:', error);
    }
  }, [cart]);

  // Add item to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      // Check if item already exists with same size and color
      const existingItemIndex = prevCart.findIndex(
        (item) => item.id === product.id && item.size === product.size && item.color === product.color
      );

      if (existingItemIndex >= 0) {
        // Increment quantity
        const newCart = [...prevCart];
        newCart[existingItemIndex].quantity += product.quantity;
        return newCart;
      } else {
        // Add new item
        return [...prevCart, product];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (id, size, color) => {
    setCart((prevCart) => prevCart.filter(
      (item) => !(item.id === id && item.size === size && item.color === color)
    ));
  };

  // Update item quantity
  const updateQuantity = (id, size, color, newQuantity) => {
    if (newQuantity < 1) return;
    setCart((prevCart) => {
      const newCart = [...prevCart];
      const itemIndex = newCart.findIndex(
        (item) => item.id === id && item.size === size && item.color === color
      );
      if (itemIndex >= 0) {
        newCart[itemIndex].quantity = newQuantity;
      }
      return newCart;
    });
  };

  // Calculate totals
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    getCartCount,
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
}
