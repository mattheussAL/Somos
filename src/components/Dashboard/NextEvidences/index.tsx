import React from 'react';
import db from '../../../data/db.json';
import styled from 'styled-components';

import {
  Evidences,
  EvidencesInProgress,
  TypeEvidence,
  Infos,
  Date,
} from '../styles';

import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ViewModuleIcon from '@material-ui/icons/ViewModule';

const ContentDashboardNext = styled.div`
  position: absolute;

  top: 59.5%;
  right: 26.83%;
  bottom: 47.62%;
  left: 2.83%;

  width: 963px;
  height: 263px;

  background: #FFFFFF;
  border-radius: 2px;

  overflow: hidden;

  transition: all 1s ease;

  @media (max-width: 1350px) { width: 835px }
  @media (max-width: 1170px) { width: 735px }
  @media (max-width: 1040px) { width: 570px }
  @media (max-width: 900px)  { top:   50.5% }
  @media (max-width: 630px)  { width: 95%   }
  @media (max-width: 500px) { 
    top: 46%;
    background: none
  }

  h2 {
    position: absolute;

    top: 9%;
    right: 82.33%;
    bottom: 75.25%;
    left: 2.75%;

    width: 90%;
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

  h3 {
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
  }
`;

const NextEvidencies: React.FC = () => {
  const next_exams = db.proofs[0].next_exams;

  return (
    <>
      <ContentDashboardNext>
        <h2>Próximas provas ({next_exams.length})</h2>
        <Evidences>
          {next_exams.map((item) => {
            return (
              <EvidencesInProgress key={item.id}>
                <TypeEvidence theme={item.type}>
                  <p>{item.name}</p>
                </TypeEvidence>

                <h3>{item.description}</h3>

                <Infos>
                  <ul>
                    <li>
                      <i><WatchLaterIcon /></i>
                      <p>{item.date}</p>
                    </li>
                    <li>
                      <i><ViewModuleIcon /></i>
                      <p>{item.data.itemsTotal} questões</p>
                    </li>
                  </ul>
                </Infos>

                <Date>De {item.createdAt} a {item.limitDate}</Date>
              </EvidencesInProgress>
            )
          })}
        </Evidences>
      </ContentDashboardNext>
    </>
  );
}

export default NextEvidencies;