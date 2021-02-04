import styled from 'styled-components';

export const Screen = styled.div`
  position: absolute;

  width: 1132px;
  height: 795px;

  top: 182px;
  left: 110px;
  margin-bottom: 120px;

  background: #FFFFFF;
  border-radius: 3px;

  transition: all .5s ease;

  @media (max-width: 1121px) { 
    width: 900px;
    left: 90px;
  }

  @media (max-width: 1000px) {
    width: 700px;
    left: 70px;
  }

  @media (max-width: 820px) {
    width: 600px;
    left: 60px;
  }

  @media (max-width: 690px) {
    width: 518px;
    left: 70px;
  }

  @media (max-width: 600px) {
    width: 417px;
    left: 70px;
  }

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
  left: 445px;

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

  @media (max-width: 1121px) {
    left: 325px;
  }

  @media (max-width: 1000px) {
    left: 200px;
  }
 
  @media (max-width: 690px) {
    margin-left: -78px;
  }

  @media (max-width: 600px){
    margin-left: -116px;
    width: 251px;
  }

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

  @media (max-width: 1121px) {
    left: 21%;
    width: 556px;
    height: 312px;
  }

  @media (max-width: 1000px) {
    top: 80px;
    left: 15.83%;
    width: 488px;
    height: 242px;
  }

  @media (max-width: 820px) {
    width: 419px;
    height: 232px;
  }

  @media (max-width: 690px) {
    width: 361px;
    height: 203px;
  }

  @media (max-width: 600px) {
    width: 288px;
    height: 184px;
  }
`;

export const Question = styled.div`
  position: absolute;

  top: 54.5%;
  right: 26.83%;
  bottom: 39.23%;
  left: 26.83%;

  @media (max-width: 1121px) {
    top: 53.5%;
    right: 26.83%;
    bottom: 0;
    left: 23.83%;
    width: 520px;
  }

  @media (max-width: 1000px) {
    top: 43.5%;
    left: 15.83%;
  }

  @media (max-width: 820px) {
    top: 41%;
    width: 383px;
  }

  @media (max-width: 690px) {
    top: 37%;
    left: 14%;
  }

  @media (max-width: 600px) {
    top: 34%;
    left: 9%;
  }

  p {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 18px;

    color: #000000;

    @media (max-width: 600px) {
      font-size: 13px;
    }
  }
`;

export const Questions = styled.div`
  ul {
    position: absolute;
    top: 60.5%;
    left: 26.83%;
    width: 600px;

    @media (max-width: 1100px) {
      top: 60.5%;
      left: 21.83%;
    }

    @media (max-width: 1000px) {
      top: 49.5%;
      left: 10.83%;
    }

    @media (max-width: 820px) {
      top: 47.5%;
      left: 9.83%;
      width: 496px;
    }

    @media (max-width: 690px) {
      top: 43.5%;
      width: 395px;
    }

    @media (max-width: 600px) {
      top: 40.5%;
      width: 313px;
    }

    li {
      list-style: none;

      display: flex;
      align-items: center;

      height: 22px;

      transform: scale(1);
      margin-bottom: 20px;
      transition: all 1s ease-out;

      span { margin-right: 8px }

      @media (max-width: 820px) { margin-bottom: 24px }
      @media (max-width: 690px) { margin-bottom: 28px }
      @media (max-width: 600px) { margin-bottom: 32px }

      /* active */

      &:hover {
        width: 555px;
        height: 54px;
        padding: 12px 10px;
        margin-left: 3.5px;

        border: none;
        border-radius: 2px;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);

        transform: scale(1.1);
        transition: all 1s ease-out;

        @media (max-width: 820px) { margin-bottom: 24px }
        @media (max-width: 690px) { margin-bottom: 28px }
        @media (max-width: 600px) { width: 30px;}

        p {
          padding: 22px;
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

        &:hover {
          margin-bottom: 14px;
        }

        @media (max-width: 600px) {
          font-size: 13px;
        }
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
