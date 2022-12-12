import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import {
  AllForm,
  Label,
  Input,
  AddBtn,
} from 'components/PhonebookForm/PhonebookForm.styled';

// початкові поля
const initialValues = {
  name: '',
  number: '',
};

// схема валідації:

const sсhema = Yup.object().shape({
  name: Yup.string().required('Name is required field.'),
  number: Yup.string().required('Number is required field.'),
});

export const PhonebookForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={sсhema}
    >
      <AllForm autoComplete="off">
        <Label htmlFor="name">
          Name
          <Input
            type="text"
            name="name"
            //pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            //title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            //required
          />
          <ErrorMessage name="name" component="div" />
        </Label>
        <Label htmlFor="number">
          Number
          <Input
            type="tel"
            name="number"
            //pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            //title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            //required
          />
          <ErrorMessage name="number" component="div" />
        </Label>
        <AddBtn type="submit" aria-label="add contact">
          Add contact
        </AddBtn>
      </AllForm>
    </Formik>
  );
};

PhonebookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
