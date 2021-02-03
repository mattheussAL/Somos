import styled from 'styled-components';

export const Student = styled.h1`
    position: absolute;

    font-size: 24px;
    line-height: 22px;

    top: 14.25%;
    right: 81.25%;
    bottom: 83%;
    left: 2.83%;

    color: #595959;

    transition: all .2s ease;
    cursor: pointer;

    &:hover {
      color: #FA558F;
      opacity: .8;
    }

    @media (max-width: 960px) { 
      width: 50% 
    }
`;

export const ContentDashboard = styled.div`
  position: absolute;

  top: 19.5%;
  right: 26.83%;
  bottom: 47.62%;
  left: 2.83%;

  width: 964px;
  height: 263px;

  background: #FFFFFF;
  border-radius: 2px;

  overflow: hidden;

  transition: all 1s ease;
  
  @media (max-width: 1350px) { width: 835px }
  @media (max-width: 1170px) { width: 735px }
  @media (max-width: 1040px) { width: 570px }

  @media (max-width: 630px) { width: 95% }
  @media (max-width: 500px) { 
    top: 16.5%;
    background: none
  }

  h2 {
    position: absolute;

    top: 9%;
    right: 82.33%;
    bottom: 75.25%;
    left: 2.75%;

    width: 20%;
    height: 22px;

    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    
    line-height: 22px;

    color: #595959;

    transition: all 1s ease;

    @media (max-width: 630px) { width: 50% }
    @media (max-width: 500px) { 
      font-size: 18px;
      left: .5%;
    }
    @media (max-width: 430px) { width: 60% }
    @media (max-width: 350px) { width: 70% }

  }
`;

export const Next = styled.div`
  position: absolute;

  right: 0;

  width: 120px;
  height: 100%;

  color: #CCCCCC;
  border-radius: 0 2px 2px 0;
  background: transparent;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: all .3s ease-in-out;

  &:hover {
    background: rgba(0, 0, 0, .2);
    color: #FFFFFF;
  }

  @media (max-width: 500px) {
    top: 54.82px;
    
    width: 65px;
    height: 63%;
  }
`;

export const Evidences = styled.div`
  position: absolute;

  bottom: 0;
  min-width: 100%;
  height: 80%;

  display: flex;
`;

export const EvidencesInProgress = styled.div`
  position: relative;

  top: 10%;
  right: 76.67%;
  bottom: 53.25%;
  left: 2.76%;

  width: 222px;
  height: 150px;
  margin-right: 26px;

  border-radius: 2px;
  background: #FFFFFF;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);

  transform: scale(1);
  transition: all .5s ease;

  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 500px) {
    left: 1.4%;
    transform: scale(1.1);
    overflow: hidden;
    margin-right: 50px;
    top: 4.5%;
  }

  h2 {
    position: absolute;

    top: 27.12%;
    right: 79.92%;
    bottom: 65.62%;
    left: 3.8%;

    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 18px;

    width: 174px;
    height: 18px;

    color: #000000;

    cursor: pointer;

    transition: all 1s ease;

    &:hover {
      opacity: .9;
    }
  }

`;

export const TypeEvidence = styled.div`
  position: absolute;

  top: 6.88%;
  right: 85.53%;
  bottom: 69.12%;
  left: 3.8%;

  width: ${({ theme }) => theme === 'SIMULATED' ? '106.63px' : '118px'};
  height: 16px;

  background: ${({ theme }) => theme === 'SIMULATED' ? '#FF9153' : '#5653FF'};
  border-radius: 2px;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 1s ease;

  p {    
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 22px;

    color: #FFFFFF;
  }  

`;

export const Progress = styled.div`
  position: absolute;

  top: 61.14%;
  left: 4.8%;
  right: 14.12%;
  bottom: 67.22%;

  width: 196px;
  height: 3px;

  background: #C4C4C4;
  border-radius: 2px;
`;

export const CurrentProgress = styled.div`
  width: 98px;
  height: 3px;

  background: #FA558F;
  border-radius: 2px;

  animation: progress 2s ease;
  transition: all 1s ease;

  cursor: pointer;

  @keyframes progress {
    0%   { width: 0px  };
    50%  { width: 48px };
    100% { width: 98px };
  }
`;

export const Infos = styled.div`
  ul {
    position: absolute;

    list-style: none;

    top: 68%;
    right: 78.42%;
    bottom: 58.62%;
    left: 4%;

    width: 100%;
    height: 14px;

    display: flex;
    align-items: center;

    li {
      font-size: 12px;
      font-style: normal;
      font-weight: normal;
      line-height: 14px;

      margin-right: 20px;
      color: #757575;

      display: flex;
      align-items: center;

      i {
        margin-right: 3.2px;
        svg { width: 14px }
      }
    }
  }

`;

export const Date = styled.div`
  position: absolute;

  font-size: 10px;
  font-weight: 300;
  line-height: 12px;
  font-style: normal;

  top: 85%;
  right: 82.83%;
  bottom: 55.12%;
  left: 5.58%;

  width: 139px;
  height: 12px;

  color: #757575;

  cursor: pointer;
  transform: all 1s ease-in;

  &:hover {
    opacity: .8;
  }
`;
