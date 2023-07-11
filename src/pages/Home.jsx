import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import { NoContactsMessage } from '../components/ContactList/NoContactsMessage';
import { getContacts, getFilter } from '../redux/selectors';
import { fetchContacts } from '../redux/operations';

function Home() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  let filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section>
      <Filter />
      {filteredContacts.length > 0 ? (
        <ContactList contacts={filteredContacts} />
      ) : (
        <NoContactsMessage />
      )}
    </section>
  );
}

export default Home;

// const contacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56', favorite: true },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12', favorite: true },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79', favorite: false },
//   { id: 'id-4', name: 'Annie Copel', number: '227-91-26', favorite: false },
// ];
