import { List } from './ContactList.styled';
import { Contact } from '../Contact/Contact';

export const ContactList = ({ contacts }) => {
  return (
    <List>
      {contacts.map(contact => {
        return <Contact contact={contact} key={contact.id} />;
      })}
    </List>
  );
};
