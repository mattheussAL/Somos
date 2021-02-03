import React from 'react';

import { 
  Image,
  Screen,
  Buttons,
  Revision,
  Question,
  Questions,
} from './styles';

import CloseIcon from '@material-ui/icons/Close';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import ImageQuestion from '../../../assets/oihaudak-1.png';

const ScreenProof: React.FC = () => {
  return (
    <Screen>
      <div className="number_page">1</div>

      <Revision>
        <p>Marcada para revisar mais tarde</p>
        <i><CloseIcon className="close"/></i>
      </Revision>

      <div className="book">
        <BookmarkBorderIcon />
      </div>

      <Image src={ImageQuestion} alt="image question"/>

      <Questions>
        <Question>
          <p>
            O infográfico aborda a importância do inglês para os negócios. 
            Nesse texto, as expressões but e yet only evidenciam
          </p>
        </Question>

        <ul>
          <li>
            <span>A</span>
            <input type="radio" />
            <p>
              Um impedimento às transações comerciais em contexto internacional.
            </p>
            <i><MoreHorizIcon /></i>
          </li>
          <li>
            <span>B</span>
            <input type="radio" />
            <p>
              O desinteresse dos funcionários nos cursos oferecidos pelas empresas.
            </p>
            <i><MoreHorizIcon /></i>
          </li>
          <li>
            <span>C</span>
            <input type="radio" />
            <p>
              A necessidade de inserção de funcionários nativos no mercado de trabalho globalizado.
            </p>
            <i><MoreHorizIcon /></i>
          </li>
          <li>
            <span>D</span>
            <input type="radio" />
            <p>
              Um contraste entre o ideal e o real sobre a comunicação em inglês no mundo empresarial.
            </p>
            <i><MoreHorizIcon /></i>
          </li>
        </ul>
      </Questions>
      
      <Buttons>
        <button className="previous button">
          <i><ArrowBackIosIcon /></i>
          <p>Anterior</p>
        </button>
        <button className="next button">
          <p>Próxima</p>
          <i><ArrowForwardIosIcon /></i>
        </button>
      </Buttons>
    </Screen>
  );
}

export default ScreenProof;