import { useState } from 'react';
import Section from './components/Section';
import ContactsInputForm from './components/ContactsInputForm';
import Filter from './components/Filter';
import Contacts from './components/Contacts';
import Notification from './components/Notification';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const handleSubmitForm = contact => {
    setContacts(prevState => [contact, ...prevState]);
    setFilter('');
  };

  const handleFilter = value => setFilter(value.trim());

  const handleVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const handleDeleteContact = id =>
    setContacts(prevState => prevState.filter(contact => contact.id !== id));

  return (
    <>
      <Section title="Phonebook">
        <ContactsInputForm
          contacts={contacts}
          onSubmitForm={handleSubmitForm}
        />
      </Section>
      <Section title="Contacts">
        {contacts.length > 0 ? (
          <>
            <Filter
              text="Find contacts by name"
              filter={filter}
              onInputFindChange={handleFilter}
            />
            <Contacts
              contacts={handleVisibleContacts()}
              onDelete={handleDeleteContact}
            />
          </>
        ) : (
          <Notification message="No contacts" />
        )}
      </Section>
    </>
  );
};

export default App;
