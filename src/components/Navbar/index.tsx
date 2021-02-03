import React from 'react';
import { Link } from 'react-router-dom';

import { Nav, ContentNav, MenuIconNav, Title } from './styles';

const Navbar: React.FC = () => {
  return (
    <>
      <Nav>
        <ContentNav>
          <MenuIconNav />

          <Link to="/" style={{textDecoration: 'none'}}>
            <Title>SOMOS</Title>
          </Link>
        </ContentNav>
      </Nav>
    </>
  );
}

export default Navbar;