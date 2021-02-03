import styled from 'styled-components';

export const Screen = styled.div`
  position: absolute;

  width: 1132px;
  height: 795px;

  top: 182px;
  left: calc(50% - 1132px/2);
  margin-bottom: 120px;

  background: #FFFFFF;
  border-radius: 3px;

  .book {
    position: absolute;

    top: 2%;
    right: 2%;

    cursor: pointer;
    
    svg {
      fill: #FA558F;
      width: 1em;
      height: 1em;
      display: inline-block;
      font-size: 2rem;
      flex-shrink: 0;
      user-select: none;
    }
  }

  .number_page {
    position: absolute;

    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;

    top: 2%;
    left: 6%;

    color: #757575;
  }

`;

export const Revision = styled.button`
  position: absolute;

  top: 16px;
  left: 457px;

  width: 285px;
  height: 44px;

  border: none;
  border-radius: 3px;
  background: #FA558F;
  box-shadow: 0 4px 4px #FA558F99;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  i {
    .close {
      fill: #FFFFFF;
      width: 1em;
      height: 1em;
      display: inline-block;
      margin-top: 1.8px;
      margin-left: 17px;
      font-size: 1.4rem;
      transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      flex-shrink: 0;
      user-select: none;
    }
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;

    color: #FFFFFF;
  }
`;

export const Image = styled.img`
  position: absolute;

  top: 95px;
  left: 26.83%;

  width: 556px;
  height: 320px;

  transform: scale(1);
`;

export const Question = styled.div`
  position: absolute;

  top: 54.5%;
  right: 26.83%;
  bottom: 39.23%;
  left: 26.83%;

  p {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 18px;

    color: #000000;
  }
`;

export const Questions = styled.div`
  ul {
    position: absolute;
    top: 60.5%;
    left: 26.83%;
    width: 600px;

    li {
      list-style: none;

      display: flex;
      align-items: center;

      span { margin-right: 8px }
      transform: scale(1);
      margin-bottom: 20px;
      transition: all .5s ease;

      /* active */

      &.active {
        width: 555px;
        height: 54px;
        padding: 12px 10px;
        margin-left: 3.5px;

        border: none;
        border-radius: 2px;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);

        &:hover {
          transform: scale(1.1);
        }
      }

      p {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 18px;

        width: 464px;
        height: 18px;
        margin-left: 12px;        

        color: #000000;
      }

      i {
        margin-left: 27px;

        color: #FA558F;

        cursor: pointer;

        transform: scale(1);
        transition: transform 1s ease;

        &:hover{
          transform: scale(1.2);
        }
      }
    }
  }
`;

export const Buttons = styled.div`
  position: absolute;

  top: 90.51%;
  right: 50.83%;
  bottom: 6.32%;
  left: 52%;

  display: flex;
  justify-content: center;
  align-items: center;

  .button {
    padding: 2px 22px;
    margin-right: 16px;
    font-size: 16px;

    border-radius: 2px;

    display: flex;
    align-items: center;
    justify-content: space-around;

    cursor: pointer;

    transition: all .3s ease;

    i {
      svg {
        font-size: 1.5rem;

        width: .7em;
        height: .9em;
        margin-top: 4px;

        fill: currentColor;

        display: inline-block;

        transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        flex-shrink: 0;

        user-select: none;
      }
    }
  }

  .previous {
    color: #FA558F;
    background: #FFFFFF;
    border: 1px solid #FA558F;

    &:hover{
      color: #FFFFFF;
      background: #FA558F;
      border: 1px solid #FA558F;
      box-shadow: 3px 4px 2px #C9C9C9;
    }
  }

  .next {
    color: #FFFFFF;
    background: #FA558F;
    border: 1px solid #FFFFFF;

    &:hover{
      color: #FA558F;
      background: #FFFFFF;
      border: 1px solid #FA558F;
      box-shadow: -3px 4px 2px #C9C9C9;
    }
  }
`;
