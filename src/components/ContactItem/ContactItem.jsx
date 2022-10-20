import PropTypes from 'prop-types';
import { ListItem, ItemButton } from './ContactItem.styled';

const ContactItem = ({ value, onDeleteContact }) => {
  return (
    <>
      <ListItem id={value.id}>
        {value.name}: {value.number}
        <ItemButton onClick={() => onDeleteContact(value.id)}>
          Delete
        </ItemButton>
      </ListItem>
    </>
  );
};
export default ContactItem;

ContactItem.propTypes = {
  value: PropTypes.object,
};
