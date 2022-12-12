import PropTypes from 'prop-types';
import { ContactsListSTyle } from 'components/ContactsList/ContactsList.styled';

import { Contact } from 'components/Contact/Contact';

export const ContactsList = ({ contacts, onDelete }) => {
  return (
    <>
      <ContactsListSTyle>
        {contacts.map(({ id, name, number }) => {
          return (
            <Contact
              key={id}
              id={id}
              name={name}
              number={number}
              onDelete={onDelete}
            />
          );
        })}
      </ContactsListSTyle>
    </>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
