import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        const contactExists = state.find(
          ({ name }) => name === action.payload.name
        );
        if (contactExists) {
          return Notiflix.Notify.failure(
            `${action.payload.name} is already in contacts.`,
            100
          );
        }
        state.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
            favorite: false,
          },
        };
      },
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
    toggleFavorite(state, action) {
      for (const contact of state) {
        if (contact.id === action.payload) {
          contact.favorite = !contact.favorite;
        }
      }
    },
  },
});

export const { addContact, deleteContact, toggleFavorite } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
