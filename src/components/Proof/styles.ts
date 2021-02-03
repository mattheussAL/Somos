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

  i { 
    font-size: 20px;
    margin-left: 12px;
  }

  cursor: pointer;

  transition: all .2s ease-in;

  &:hover {
    color: #FFFFFF;
    background: #FA558F;
    border: none;
    box-shadow: 0 0 2.5px #FA558F99;
  }
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

