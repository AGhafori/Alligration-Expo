import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Hem from './pages';
import BokatidPage from './pages/bokatid';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hem} exact />
        <Route path="/bokatid" component={BokatidPage} exact />
      </Switch>
      
    </Router>
  );
}

export default App;
