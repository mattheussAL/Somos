import React from 'react';
import db from '../../../data/db.json';
// import { Event } from '../../../types';
import { Link } from 'react-router-dom';

import { 
  Date,
  Next,
  Infos,
  Progress,
  Evidences,
  TypeEvidence, 
  CurrentProgress,
  ContentDashboard,
  EvidencesInProgress,
  
} from '../styles';

import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const InProgress: React.FC = () => {
  const exam = db.proofs[0].exam;

  return (
    <>
      <ContentDashboard>
        <h2>Provas em Progresso ({exam.length})</h2>
        <Evidences>
          {exam.map((item) => {
            return (
              <EvidencesInProgress key={item.id}>
                <TypeEvidence theme={item.type}>
                  <p>{item.name}</p>
                </TypeEvidence>

                <Link to="https://somos.mattheussal.vercel.app/proof">
                  <h2>{item.description}</h2>
                </Link>

                <Progress>
                  <CurrentProgress />
                </Progress>

                <Infos>
                  <ul>
                    <li>
                      <i><WatchLaterIcon /></i>
                      <p>{item.date}</p>
                    </li>
                    <li>
                      <i><ViewModuleIcon /></i>
                      <p>{item.data.answeredItems}/{item.data.itemsTotal} questões</p>
                    </li>
                  </ul>
                </Infos>

                <Date>De {item.createdAt} a {item.limitDate}</Date>
              </EvidencesInProgress>
            )
          })}
        </Evidences>
      
        <Next>
          <ArrowForwardIosIcon />
        </Next>
      </ContentDashboard>
    </>
  );
}

export default InProgress;