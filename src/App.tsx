import React from 'react';
import { BrowserRouter as Routes, Switch, Route } from 'react-router-dom';

import DashboardPage from './Pages/DashboardPage';
import ProofPage from './Pages/ProofPage';

function App() {
  return (
    <>
      <Routes>
        <Switch>
          <Route path="/" exact component={DashboardPage}></Route>
          <Route path="/proof" component={ProofPage}></Route>
        </Switch>
      </Routes>
    </>
  );
}

export default App;
