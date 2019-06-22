import React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
 
export default class Menu extends Component {

    render() {
        if(sessionStorage.getItem('isloged')){
            if(sessionStorage.getItem('role')==='Admin'){
                return(
                    <nav className="navbar navbar-expand-lg navbar-dark" style={{background:'#283593'}}>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
    
                        <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                            <Link className="nav-link py-0" to="/settings">Settings<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link py-0" to="/courses">Courses</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link py-0 " to ="/instructores">Instructors</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link py-0 " to="/students">Students</Link>
                            </li>
                        </ul>
                        </div>
                    </nav>
                );
            }
            
        }

        if(sessionStorage.getItem('role')==='Student'){

            return(
                <nav className="navbar navbar-expand-lg navbar-dark" style={{background:'#283593'}}>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
    
                        <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <a className="nav-link py-0" href="newStudentCourses">New Courses</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link py-0" href="currentStudentCourses">Current Courses</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link py-0" href="studentAssignmentList">Assignments</a>
                            </li>


                        </ul>
                        </div>
                    </nav>
            );
        }

        if(sessionStorage.getItem('role')==='Instructor'){

            return(
                <nav className="navbar navbar-expand-lg navbar-dark" style={{background:'#283593'}}>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                        <a className="nav-link py-0" href="#">Profile<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">

                        <a className="nav-link py-0" href="courseList">New Courses</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link py-0" href="currentCourseList">Current Courses</a>

                            <Link to="/addassignment">Add Assignment</Link>

                        </li>
                        <li className="nav-item">
                            <Link to="/showinsassignments/">Modify Assignment</Link>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link py-0 dropdown-toggle" href="http://example.com" id="dropdown08" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">My Courses</a>
                        <div className="dropdown-menu" aria-labelledby="dropdown08">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                        </li>
                    </ul>
                    </div>
                </nav>
            );
        }
        else{
            return(
                <div>
                </div>
            );
        }
    }

}