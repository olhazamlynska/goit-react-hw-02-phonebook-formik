import PropTypes from 'prop-types';
import {
  ContactsItem,
  ContactsName,
  DeleteBtn,
} from 'components/Contact/Contact.styled';

export const Contact = ({ id, name, number, onDelete }) => {
  return (
    <ContactsItem>
      <ContactsName>{name}:</ContactsName>
      <span>{number}</span>
      <DeleteBtn onClick={() => onDelete(id)} aria-label="delete">
        Delete
      </DeleteBtn>
    </ContactsItem>
  );
};

Contact.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
