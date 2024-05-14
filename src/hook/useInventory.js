// Task 1: Create a Custom Hook for Inventory Management

// Develop a custom hook named useInventory that manages the inventory state. This hook should provide functionalities to fetch all products, add a new product, and remove a product.

// Expected Outcome:

// A custom hook that allows managing the product inventory.

import { useState } from 'react';

const Inventory = [
  { id: 1, name: 'Pen', price: 2 },
  { id: 2, name: 'Pencil', price: 1},
  { id: 3, name: 'Notebook', price: 5 },
];

const useInventory = () => {
  const [products, setProducts] = useState(Inventory);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const removeProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
  };

  return { products, addProduct, removeProduct };
};

export default useInventory;