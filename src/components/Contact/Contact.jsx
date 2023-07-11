import { useDispatch } from 'react-redux';
import { FaRegHeart } from 'react-icons/fa';
import {
  Item,
  ContactName,
  ToggleFavourite,
  DeleteButton,
  DeleteIcon,
  ColoredHeart,
} from './Contact.styled';
import { deleteContact, toggleFavorite } from '../../redux/operations';

export const Contact = ({ contact }) => {
  const { id, name, number, favorite } = contact;
  const dispatch = useDispatch();
  return (
    <Item>
      <ToggleFavourite
        type="button"
        onClick={() => dispatch(toggleFavorite(contact))}
      >
        {favorite ? <ColoredHeart /> : <FaRegHeart />}
      </ToggleFavourite>

      <ContactName>
        {name}: {number}
      </ContactName>
      <DeleteButton type="button" onClick={() => dispatch(deleteContact(id))}>
        <DeleteIcon />
      </DeleteButton>
    </Item>
  );
};
