import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const AddContactLink = styled(Link)`
  text-decoration: none;
  font-style: inherit;
  color: inherit;
  font-size: 18px;
  font-weight: 900;
  &:hover,
  &:focus {
    color: #1f7ba0;
  }
`;

export function NoContactsMessage() {
  return (
    <p>
      There are no contacts, use{' '}
      <AddContactLink to="/add">Add contact</AddContactLink> form
    </p>
  );
}
