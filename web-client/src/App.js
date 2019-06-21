import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Menu from './components/includes/menu.component';
import Header from './components/includes/sidebar.component';

import Login from './components/login.component';
import Welcome from './components/welcome.component'; 
import StudentReg from './components/studentReg.component';


function App() {
  return (
    <Router>
      <Route path="/login" component={Login} />
        
        <div className="row">
          <div className="col-sm-12">
            <Header/>
            <Menu/>
          </div>
          <div className="col-xs-12">
           <div className="container-fluid">
              	<Route exact path="/" component={Welcome}/>
                <Route exact path="/register" component={StudentReg}/>  
           </div>
          </div>
        </div>
      </Router>
  );
}


export default App;
