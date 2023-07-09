import React from 'react';
import { Link } from 'react-router-dom';
import {
  StyledHeader,
  Navigation,
  NavigationLink,
  Logo,
  LogoText,
  LogoWrap,
} from './Header.styled';
import logo from './phone-book-logo.png';

function Header() {
  return (
    <StyledHeader>
      <Link to="/">
        <LogoWrap>
          <Logo src={logo} alt="Phonebook" />
          <LogoText>Phonebook</LogoText>
        </LogoWrap>
      </Link>
      <Navigation>
        <NavigationLink to="/">View contacts</NavigationLink>
        <NavigationLink to="/add">Add contact</NavigationLink>
      </Navigation>
    </StyledHeader>
  );
}
export default Header;
