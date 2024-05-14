import React from 'react';
import ContactList from './components/ContactList';
import ContactDetails from './components/ContactDetails';
import { ContactProvider } from './context/ContactContext';
import ProductList from './components/ProductList'; // Import the ProductList component

const App = () => {
  return (
    <div>
      <ContactProvider>
        <div>
          <ContactList />
          <ContactDetails />
        </div>
      </ContactProvider>
      <div>
        <ProductList />
      </div>
    </div>
  );
};

export default App;