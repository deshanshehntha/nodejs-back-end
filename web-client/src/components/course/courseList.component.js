import React, {Component} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

const CourseRow = props => (
    <tr>
        <td>
            {props.obj._id}
        </td>
        <td>
            {props.obj.course_name}
        </td>
        <td>
            {props.obj.course_code}
        </td>
        <td>

            <Link to={"/edit/" + props.obj._id} className="btn btn-primary">Accepet</Link>
        </td>

    </tr>


);


export default class CourseList extends Component {
    constructor(props) {
        super(props);
        this.state = {courses: []};
    }

    componentDidMount() {
//sessionStorage.getItem('id')
        console.log(sessionStorage.getItem('id'));
        axios.get('http://localhost:4030/api/courses/instructor/new/' +sessionStorage.getItem('id'))
            .then(response => {
                console.log(response);
                console.log("jjjj");
                this.setState({courses: response.data.courses});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    // componentDidUpdate() {
    //     axios.get('http://localhost:4030/api/courses/instructor/new/' + sessionStorage.getItem('id'))
    //         .then(response => {
    //             this.setState({course: response.data});
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         })
    // }


    courseRow() {
        return this.state.courses.map(function (object, i) {
            return <CourseRow obj={object} key={i}/>;
        });
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
                    {this.courseRow()}
                    </tbody>
                </table>
            </div>
        );
    }
}