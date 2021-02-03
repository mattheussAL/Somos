import styled, { css } from 'styled-components';

import MenuIcon from '@material-ui/icons/Menu';

const iconCSS = css`
  width: 50%;
  height: 50%;

  margin: auto 1%;

  cursor: pointer;
`;

export const Nav = styled.nav`
  position: sticky;

  top: 0;
  height: 68px; 

  color: #FFFFFF;
  background: #FA558F;
  box-shadow: 0px 1px 1px #941A45;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentNav = styled.div`
  display: flex;
  align-items: center;

  width: 100vw;
  
  transition: all .2s ease-in-out;

  @media (min-width: 1500px) { margin-top: 1.4rem }
`;

export const MenuIconNav = styled(MenuIcon)`${iconCSS}`;

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 400;
  font-style: normal;

  margin: 6px;

  line-height: 24px;

  @media (max-width: 800px) {
    font-size: 1.2rem;
    line-height: 18px;
  }
`;

