import React, {Component} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

const Course = props => (
    <tr>
        <td>{props.id}</td>
        <td>{props.code}</td>
        <td>{props.name}</td>
        <td><input type="button" value="Accept" className="btn btn-primary" onClick={props.onClick} id={props.id} /></td>
        {/* <td>
            <Link to={"/books/" + props._id}>Book</Link>
        </td>
        <td>
            <Link to={"/books/" + props._id}>Book</Link>
        </td> */}
    </tr>
);


export default class CourseList extends Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
        this.state = {courses: []};
    }

    componentDidMount() {

        console.log(sessionStorage.getItem('id'));
        axios.get('http://localhost:4030/api/courses/instructor/new/' + sessionStorage.getItem('id'))
            .then(response => {

                console.log(response.data.courses);
                this.setState({courses: response.data.courses});
                console.log(this.state.courses);
            })
            .catch(function (error) {
                console.log(error);
            })
    }




    onClick(e) {

        var course='';
        this.state.courses.forEach(element => {

            if(element._id===e.target.id){
                console.log('ifone');
                console.log(element._id);
                console.log(e.target.id);

                element.instructors.forEach(element2 => {

                    if(element2.instructor===sessionStorage.getItem('id')){

                        console.log('iftwo');
                        console.log(element2.instructor);
                        console.log(sessionStorage.getItem('id'));


                        element2.status='accepted';
                        course=element;
                        console.log(this.state.courses);
                        console.log(element);
                    }
                });
            }



        });


        axios.post('http://localhost:4030/api/courses/instructor/accept/' + e.target.id + '/' + sessionStorage.getItem('id'),course)
            .then(response => {
                console.log(response);
                //this.setState({ courses: response.data.courses });
            })
            .catch(function (error) {
                console.log(error);
            });

        window.location.reload();



    }

    render() {
        return (
            <div className="container">
                <br/>
                <h3 align="center">Course List</h3>
                <br/>
                <table className="table table-bordered " style={{marginTop: 20}}>
                    <thead>
                    <tr>
                        <th>Course ID</th>
                        <th>Course Name</th>
                        <th>Course Code</th>
                        <th colSpan="2">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.courses.map((currentCourse, i) => (
                            <Course onClick={this.onClick} id={currentCourse._id} key={i} code={currentCourse.course_code} name={currentCourse.course_name} />
                        ))
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}