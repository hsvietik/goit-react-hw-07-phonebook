import React from 'react';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import { NoContactsMessage } from '../components/ContactList/NoContactsMessage';
import { useSelector } from 'react-redux';

function Home() {
  // const contacts = [
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56', favorite: true },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12', favorite: true },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79', favorite: false },
  //   { id: 'id-4', name: 'Annie Copel', number: '227-91-26', favorite: false },
  // ];
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  let filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );
  let sortedContacts = filteredContacts.reverse();

  return (
    <section>
      <Filter />
      {sortedContacts.length > 0 ? (
        <ContactList contacts={sortedContacts} />
      ) : (
        <NoContactsMessage />
      )}
    </section>
  );
}

export default Home;
