// Task 2: Implement the Product List Component

// Create a ProductList component that uses the useInventory hook to display the list of products and a button to remove each product.

// Expected Outcome:

// A list of products displayed on the screen, each with a button to remove the product from the inventory


//Task 2: Implement the Product List Component
//a button to remove each product.
import React from 'react';
import useInventory from '../hook/useInventory'; 

const ProductList = () => {
  
  const { products, removeProduct } = useInventory(); 

  
  const handleRemoveProduct = (productId) => {
    removeProduct(productId);
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => handleRemoveProduct(product.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;