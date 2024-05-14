// Task 3: Show Selected Contact Details

// Create a component that consumes the Contact Context to display details of the selected contact.

// Expected Outcome:

// When a user clicks on a contact in the list, the app displays the selected contact's details.

import React from 'react';
import { useContacts } from '../context/ContactContext';

const ContactDetails = () => {
  const { selectedContact } = useContacts();

  return (
    <div>
      <h2>Contact Details</h2>
      {selectedContact ? (
        <div>
          <p>Name: {selectedContact.name}</p>
          <p>Email: {selectedContact.email}</p>
        </div>
      ) : (
        <p>No contact selected</p>
      )}
    </div>
  );
};

export default ContactDetails;