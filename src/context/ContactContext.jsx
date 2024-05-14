// Task 1: Set Up the Contact Context

// Create a context to manage the state of contacts in your application. This context will hold both the list of contacts and the currently selected contact.

// Expected Outcome:

// A context that provides the list of contacts and the selected contact to the entire app.

import React, { createContext, useState } from 'react';

const ContactContext = createContext();

export const useContacts = () => React.useContext(ContactContext);

const Contacts = [
  { id: 1, name: 'Ray', email: 'ray@gmail.com'},
  { id: 2, name: 'John', email: 'john@gmail.com'},
  { id: 3, name: 'Panda', email: 'Pandabear123@example.com'},
];


export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState(Contacts);
  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <ContactContext.Provider value={{ contacts, selectedContact, setContacts, setSelectedContact }}>
      {children}
    </ContactContext.Provider>
  );
};

export default ContactContext;

