import React from 'react';
import db from '../../../data/db.json';

import {
  ContentResult,
  CantainerResults,
  CardsResult,
  Calc,
  Percent
} from './styles';

import { TypeEvidence } from '../styles';

const Results: React.FC = () => {
  const results = db.students[0].event;

  return (
    <ContentResult>
      <div className="test">
        <div>
          <h2>Seus resultados ({results.length})</h2>
          <a href="/">Ver todos</a>
        </div>

        <CantainerResults>
          {results.map(item => {
            return (
              <CardsResult>
                <TypeEvidence theme={item.type}>
                  <p>{item.name}</p>
                </TypeEvidence>

                <h3>{item.description}</h3>
                <p className="realization">Realizada em {item.date} min</p>
                <span>Entregue em {item.dalivery_date} </span>

                <Calc>
                  <Percent>
                    <div>
                      <svg>
                        <circle className="bg" cx="57" cy="57" r="20" />
                        <circle className="meter-1" cx="57" cy="57" r="40" />
                      </svg>

                      <div className="info">
                        <p>
                          <span className="questoes">{item.data.answeredItems}</span>
                        /
                        {item.data.itemsTotal}
                        </p>
                        <span></span>
                      </div>
                    </div>
                  </Percent>
                </Calc>
              </CardsResult>
            )
          })}

        </CantainerResults>
      </div>

    </ContentResult>
  );
}

export default Results;