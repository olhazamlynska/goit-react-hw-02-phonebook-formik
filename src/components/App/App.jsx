import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';

import { Section } from 'components/Section/Section';
import { PhonebookForm } from 'components/PhonebookForm/PhonebookForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { FilterContacts } from 'components/FilterContacts/FilterContacts';
import { Box } from 'components/Box/Box';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = values => {
    const { name, number } = values;
    const { contacts } = this.state;
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    const isAddedName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    const isAddedNunber = contacts.some(contact => contact.number === number);

    if (isAddedName) {
      Notify.failure(`We have already had contact with name ${name}`);
      return;
    } else if (isAddedNunber) {
      Notify.failure(`We have already had contact with number ${number}`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  onChangeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  findVisibleContacts = () => {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter, contacts } = this.state;

    const visibleContacts = this.findVisibleContacts();

    return (
      <Box as={'main'}>
        <Section title="Phonebook">
          <PhonebookForm onSubmit={this.addContact} />
        </Section>

        <Section title="Contacts">
          {contacts.length > 1 && (
            <FilterContacts value={filter} onChange={this.onChangeFilter} />
          )}
          {contacts.length > 0 ? (
            <ContactsList
              contacts={visibleContacts}
              onDelete={this.deleteContact}
            />
          ) : (
            <p>You have empty phonebook.</p>
          )}
        </Section>
      </Box>
    );
  }
}
