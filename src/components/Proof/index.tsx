import React, { useState } from 'react';

import ScreenProof from './ScreenProof';
import { 
  Nav,
  Send,
  Progress,
  ContentNav,
  CurrentProgress,
} from './styles';

import SendIcon from '@material-ui/icons/Send';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';


const Proof: React.FC = () => {
  const [ navbar, setNavbar ] = useState(false);

  const changeNavbar = () => {
    if(window.scrollY >= 5) setNavbar(true)
    else setNavbar(false)
  };

  window.addEventListener('scroll', changeNavbar);

  return ( 
  <>
    <Nav className={navbar ? 'active' : ''}>
      <ContentNav>
        <h1>Linguagens e Códigos</h1>

        <div className="infos">
          <p><i><VisibilityOffIcon /></i><span>00:30:45</span></p>
          <p><i><ViewModuleIcon /></i><span>Questões</span></p>
        </div>

        <Send>
          Entregar prova <i><SendIcon /></i>
        </Send>
      </ContentNav>
    </Nav>

    <Progress className={navbar ? 'active' : ''}>
      <CurrentProgress />
    </Progress>

    <ScreenProof /> 
  </>
  );
}

export default Proof;