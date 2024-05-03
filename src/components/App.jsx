import './App.module.css';
import ContactForm from './ContactForm/ContactForm.jsx';
import FilterContact from './FilterContact/FilterContact.jsx';
import ContactList from './ContactList/ContactList.jsx';
import { useState } from 'react';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const addContacts = contact => {
    if (contact.name.trim()) {
      const storedContacts = localStorage.getItem('contactList');
      let contactsArray = [];

      if (storedContacts) {
        contactsArray = JSON.parse(storedContacts).contacts;
      }

      if (
        contactsArray.some(
          element => element.name.toLowerCase() === contact.name.toLowerCase()
        )
      ) {
        return alert(`${contact.name} is already in contacts`);
      } else {
        const updatedContacts = [...contactsArray, contact];
        localStorage.setItem(
          'contactList',
          JSON.stringify({ contacts: updatedContacts })
        );
        console.log(2, 'adicion a localstorage');
        setContacts({ contacts: updatedContacts });
      }
    }
  };

  const filterChange = e => {
    setFilter(e.target.value);
  };

  const deleteContacts = contactName => {
    const storedContacts = localStorage.getItem('contactList');
    let contactsArray = [];

    if (storedContacts) {
      contactsArray = JSON.parse(storedContacts).contacts;
    }

    let deleteContactsArray = contactsArray.filter(
      element => element.name.toLowerCase() !== contactName.toLowerCase()
    );

    localStorage.setItem(
      'contactList',
      JSON.stringify({ contacts: deleteContactsArray })
    );
    console.log(3, 'eliminacion de localstorage');

    setContacts({ contacts: deleteContactsArray });
  };

  const handleLocalStorage = () => {
    const storedContacts = localStorage.getItem('contactList');
    if (storedContacts) {
      console.log(1, 'montaje del DOM obtenido de localstorage');
      return JSON.parse(storedContacts).contacts;
    }

    console.log(0, 'montaje del DOM obtenido de estado original');
    return contacts;
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContacts={addContacts} />
      <h2>Contacts</h2>
      <FilterContact filterChange={filterChange} />
      <ContactList
        contacts={handleLocalStorage()}
        filter={filter}
        deleteContacts={deleteContacts}
      />
    </div>
  );
};

export { App };
