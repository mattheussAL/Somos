import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;

  top: 68px;
  height: 68px; 
  width: 100vw;

  background: #FFFFFF;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  transition: all .4s ease-in-out;

  &.active {
    top: 0px;
    height: 82px;
    background: rgba(255,255,255, .98);
  }
`;

export const ContentNav = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 100%;

  h1 {
    position: relative;

    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 28px;

    top: 1px;
    left: 35px;
    width: 200px;
    height: 28px;

    color: #757575;

    @media (max-width: 879px) {
      width: 260px;
    }

    @media (max-width: 790px) {
      width: 260px;
      top: -15px;
    }
  }

  .infos {
    width: 520px;
    height: 68px;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    p {
      font-size: 14px;
      color: #CCC;

      display: flex;
      align-items: center;
      cursor: pointer;

      &:hover {
        color: #141414;
      }

      svg {
        fill: #FA558F;
        margin-right: 2px;
      }
    }
  }
`;

export const Send = styled.button`
  position: relative;

  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  
  top: 2.88%;
  bottom: 86.96%;
  padding: 2px 32px;

  color: #FA558F;
  background: #FFFFFF;
  border: 1px solid #FA558F;
  border-radius: 2px;

  display: flex;
  align-items: center;

  @media (max-width: 550px) {
    padding: 0;
    background: none;
    border: none;
    margin-right: -48px
  }

  p {
    @media (max-width: 550px) { visibility: hidden }
  }

  i { 
    font-size: 20px;
    margin-left: 12px;

    @media (max-width: 550px) { margin-left: -37px }

    svg {
      @media (max-width: 550px) { font-size: 2.3rem }
    }
  }

  cursor: pointer;

  transition: all .2s ease-in;

  &:hover {
    color: #FFFFFF;
    background: #FA558F;
    border: none;
    box-shadow: 0 0 2.5px #FA558F99;

    @media (max-width: 550px) {
      background: none;
      box-shadow: none;
    }
  }

  @media (max-width: 1121px) {
    margin-right: 20px;
  }

  @media (max-width: 940px) {
    width: 141px;
    height: 45px;
  }

  @media (max-width: 820px) {
    margin-right: 50px;
  }

  /* @media (max-width: 600px) {
    border: none;
  } */

  


`;

export const Progress = styled.div`
  position: fixed;

  top: 19.6%;

  width: 100vw;
  height: 4px;

  background: #C4C4C4;
  border-radius: 2px;

  transition: all .4s ease-in-out;
  z-index: 10;

  &.active {
    position: fixed;
    top: 11.8%;
  }
`;

export const CurrentProgress = styled.div`
  width: 60vw;
  height: 4px;

  background: #FA558F;
  border-radius: 2px;

  animation: progress 2s ease;
  transition: all 1s ease;

  cursor: pointer;

  @keyframes progress {
    0%   { width: 0  };
    50%  { width: 40vw };
    100% { width: 60vw };
  }

  
`;

