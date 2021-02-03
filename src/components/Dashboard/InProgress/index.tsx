import React from 'react';
import db from '../../../data/db.json';
// import { Event } from '../../../types';

import { 
  Date,
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

                <h2>{item.description}</h2>

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
      </ContentDashboard>
    </>
  );
}

export default InProgress;