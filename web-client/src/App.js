import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Menu from './components/includes/menu.component'
import Welcome from './components/welcome.component' 
import Login from './components/login.component';

function App() {
  return (
    <Router>
      <Route path="/login" component={Login} />
      <div className="App">
        <Menu/>
        <Route exact path="/" component={Welcome}/>
      </div>
    </Router>
  );
}


export default App;
