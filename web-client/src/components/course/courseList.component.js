import React,{Component} from 'react';
import axios from 'axios';
import CourseRow from './courseRow.component';

export default class CourseList extends Component{
    constructor(props) {
        super(props);
        this.state = { courses: [] };
    }
    componentDidMount() {
        axios.get('http://localhost:4030/api/courses/courseDetails')
            .then(response => {
                this.setState({ trains: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    componentDidUpdate() {
        axios.get('http://localhost:4030/api/courses/courseDetails')
            .then(response => {
                this.setState({trains: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    courseRow() {
        return this.state.courses.map(function (object, i) {
            return <CourseRow obj={object} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <h3 align="center">Course List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
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