import styled from 'styled-components';

export const ContentResult = styled.div`
  position: absolute;
  
  left: 74.83%;
  right: 2.83%;
  top: 19.5%;
  bottom: 12.25%;

  width: 268px;
  height: 529.8px;

  background: #FFFFFF;
  border-radius: 2px;

  transition: all 3s ease;

  overflow: hidden;

  @media (max-width: 1350px) { left: 73% }
  @media (max-width: 1200px) { left: 73% }
  @media (max-width: 1100px) { left: 67% }
  @media (max-width: 900px ) { 
    left: 2.8%;
    top: 82%;
    width: 487.2px;
    display: flex;
  }

  @media (max-width: 500px) { 
    top: 75.8%;
    width: 95%;
    background: none;
  }

  @media (max-height: 800px) { 
    height: 539.5px;
  }

  h2 {
    position: absolute;

    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 22px;

    width: 136px;
    height: 22px;

    top: 4%;
    right: 13%;
    bottom: 75.25%;
    left: 5%;

    color: #595959;
    transition: all 1s ease;

    @media (max-width: 630px) { width: 50% }
    @media (max-width: 500px) { 
      font-size: 18px;
      left: .5%;
    }
  }

  a {
    position: absolute;

    font-size: 12px;
    
    top: 4%;
    right: 13%;
    bottom: 92.25%;
    left: 70%;

    line-height: 22px;

    width: 200px;

    color: #FA558F;


    @media (max-width: 900px ) { 
      visibility: hidden;
    }

  }
`;

export const CantainerResults = styled.div`
  position: absolute;
  top: 8%;
  bottom: 0;
  width: 100%;

  @media (max-width: 500px) {
    display: flex;
    width: 56%;
    background: transparent;
  }
`;

export const CardsResult = styled.div`
  position: relative;

  top: 0;
  right: 7.75%;
  bottom: 60.88%;
  left: 6.75%;

  width: 83%;
  height: 23%;
  margin-top: 18px;

  background: #FFF;
  box-shadow: 0px 0px 5px rgb(0 0 0 / 15%);
  border-radius: 2px;

  @media (max-width: 500px){
    position: relative;
    top: -2%;
    right: 76.67%;
    bottom: 53.25%;
    left: 1%;
    width: 222px;
    min-width: 100%;
    height: 104px;
    margin-right: 26px;
  }

  h3 {
    position: absolute;
    font-size: 17px;
    top: 25%;
    left: 4%;
    width: 52%;

    @media (max-width: 900px) {
      width: 41%;
    }
  }

  .realization {
    position: absolute;

    top: 66.62%;
    right: 13.17%;
    bottom: 63.75%;
    left: 4%;

    width: 50%;

    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;

    color: #757575;
  }

  span {
    position: absolute;

    top: 82%;
    right: 14%;
    left: 4%;
    bottom: 61.62%;

    font-style: normal;
    font-weight: 300;
    font-size: 10px;
    line-height: 12px;

    color: #757575;
  }
`;

export const Calc = styled.div`
  position: absolute;
  left: 115px;
  bottom: 116px;

  @media (max-width: 500px) {
    left: 123px;
    bottom: 107px;
  }
`;

export const Percent = styled.div`
  position: absolute;

  svg {
    position: relative;
    width: 111px;
    height: 114px;

  .bg {
    fill: none;
    stroke-width: 5px;
  }
  
  [class^="meter-"] {
    fill: none;
    stroke-width: 5px;
    stroke-linecap: round;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
  }

  .meter-1 {
    stroke-dasharray: 360;
    stroke-dashoffset: 159;
    stroke: #166941;
    animation: progress 1s ease-out;
  }

  @keyframes progress {
      from { stroke-dashoffset: 360 }
      to { stroke-dashoffset: 159 }
  }

  }

  circle {
    stroke-width: 10;
    stroke: #000;
    transform: translate(5px,5px);
    stroke-dasharray: 440;
    stroke-dashoffset: 440;
    stroke-linecap: round;
  }

  .info {
    position: absolute;

    top: 41.5%;
    right: 7%;
    bottom: 66.75%;
    left: 50%;

    width: 100%;

    font-style: normal;
    font-size: 14px;
    line-height: 14px;

    color: #C4C4C4;

    .questoes {
      position: absolute;
      width: 100%;
      font-weight: bold;
      top: -1px;
      left: -25px;
      font-size: 22px;
      color: #166941;
    }

    span {
      position: absolute;

      font-size: 14px;
      font-weight: bold;

      top: 20px;
      left: -10px;

      color: #000000;
    }    
  }
`;
