import PropTypes from 'prop-types';
import { FaRegHeart } from 'react-icons/fa';
import {
  List,
  Item,
  ContactName,
  ToggleFavourite,
  DeleteButton,
  DeleteIcon,
  ColoredHeart,
} from './ContactList.styled';
import { deleteContact, toggleFavorite } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';

export const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();
  return (
    <List>
      {contacts.map(({ id, name, number, favorite }) => {
        return (
          <Item key={id}>
            <ToggleFavourite
              type="button"
              onClick={() => dispatch(toggleFavorite(id))}
            >
              {favorite ? <ColoredHeart /> : <FaRegHeart />}
            </ToggleFavourite>

            <ContactName>
              {name}: {number}
            </ContactName>
            <DeleteButton
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              <DeleteIcon />
            </DeleteButton>
          </Item>
        );
      })}
    </List>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
