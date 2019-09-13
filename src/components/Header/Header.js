import React from 'react';
import { StyledHeader } from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <span className='header-title'>Ordained Groceries</span>
      {/* <img src="/assets/logo.png" className="header-logo" alt="logo" /> */}
    </StyledHeader>
  );
};

export default Header;
