// Task 2: Display the List of Contacts

// Create a component that consumes the Contact Context to display a list of contacts. Each contact should be clickable, setting the selected contact in the context.

// Expected Outcome:

// A list of contacts displayed on the screen, where clicking a contact updates the selected contact in the context.
import React from 'react';
import { useContacts } from '../context/ContactContext';

const ContactList = () => {
  const { contacts, setSelectedContact } = useContacts();

  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id} onClick={() => setSelectedContact(contact)}>
            {contact.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;