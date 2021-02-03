import React from 'react';
// 
import { Nav, ContentNav, MenuIconNav, Title } from './styles';

const Navbar: React.FC = () => {
  return (
    <>
      <Nav>
        <ContentNav>
          <MenuIconNav />
          <Title>SOMOS</Title>
        </ContentNav>
      </Nav>
    </>
  );
}

export default Navbar;