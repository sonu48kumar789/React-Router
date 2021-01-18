import Header from './Components/Header';
import Contant from './Components/Content';
import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
function App() {
  return (
    <React.Fragment>
      <Router>
        <Route exact path="/"><Header/></Route>
        <Route path="/content"><Contant/></Route>
      </Router>
    </React.Fragment>
  );
}

export default App;
