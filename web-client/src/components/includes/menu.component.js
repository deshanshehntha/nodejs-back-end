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
                            <a className="nav-link py-0" href="#">Settings<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link py-0" href="#">Instructors</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link py-0 " href="#">Courses</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link py-0 " href="#">Students</a>
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
                            <li className="nav-item active">
                            <a className="nav-link py-0" href="#">Profile<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link py-0" href="#">Courses</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link py-0 disabled" href="#">Assigmentes</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link py-0 disabled" href="#">Exams</a>
                            </li>
                            <li className="nav-item dropdown">
                            <a className="nav-link py-0 dropdown-toggle" href="" id="dropdown08" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">My Courses</a>
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
                        <a className="nav-link py-0" href="#">Courses</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link py-0 disabled" href="#">Students</a>
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