import ContactItem from '../ContactItem/ContactItem';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <ContactItem
            key={contact.id}
            value={contact}
            onDeleteContact={() => onDeleteContact(contact.id)}
          />
        );
      })}
    </ul>
  );
};
export default ContactList;
