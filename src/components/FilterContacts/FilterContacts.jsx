import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import {
  Label,
  Input,
  Wrapper,
} from 'components/FilterContacts/FilterContacts.styled';
export const FilterContacts = ({ value, onChange }) => {
  const filterId = nanoid();

  return (
    <Wrapper>
      <Label htmlFor={filterId}>
        <Input
          type="text"
          title="Write name to find contact quickly"
          value={value}
          onChange={onChange}
          id={filterId}
        ></Input>
      </Label>
    </Wrapper>
  );
};

FilterContacts.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
