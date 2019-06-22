import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Menu from './components/includes/menu.component';
import Header from './components/includes/sidebar.component';
import Login from './components/login.component';
import Welcome from './components/welcome.component';
import AddCourse from './components/course/addCourse.component';
import CourseList from './components/course/courseList.component'
import StudentRegister from './components/studentRegister.component';
import Add_Assignment_Component from './components/assignments/addassignment.component';
import Show_Assignments_Component from './components/assignments/showassignments.component';
import Edit_Assignment_Component from './components/assignments/editassignment.component'


function App() {
  return (
    <Router>
        <Route path="/login" component={Login} />
        <Route path="/register" component={StudentRegister}/>  
            <Header/>
            <Menu/>
        <Route exact path="/" component={Welcome}/>
        <Route path="/addCourse" component={AddCourse}/>
        <Route path="/courseList" component={CourseList}/>
        <Route path="/addassignment" component={Add_Assignment_Component} />
        <Route path="/showinsassignments/" component={Show_Assignments_Component} />
        <Route path="/editinsassignments/" component={Edit_Assignment_Component} />
      </Router>
  );
}


export default App;
