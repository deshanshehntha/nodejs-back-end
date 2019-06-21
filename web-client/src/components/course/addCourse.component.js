import React, {Component} from 'react';
import axios from 'axios';

export default class addCourse extends Component {
    constructor(props) {
        super(props);
        this.onChangeCourseName = this.onChangeCourseName.bind(this);
        this.onChangeCourseCode = this.onChangeCourseCode.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            course_name: '',
            course_code: ''
        }
    }

    onChangeCourseName(e) {
        this.setState({
            course_name: e.target.value
        });
    }

    onChangeCourseCode(e) {
        this.setState({
            course_code: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const courseObj = {
            course_name: this.state.course_name,
            course_code: this.state.course_code,
        };
        axios.post('http://localhost:4030/api/courses/addCourse', courseObj)
            .then(res => {

                if (res.data.isAdd) {
                    this.props.history.push({

                        pathname: '/courseDetails',
                    });
                }
            });
    }

    render() {
        return (
            <div>
                <form className="container" onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <div className="col-md-6">
                            <label>Course Name</label>
                            <input type="text" className="form-control"
                                   value={this.course_name}
                                   onChange={this.onChangeCourseName}/>

                        </div>
                        <div className="col-md-6">
                            <label>Course Code</label>
                            <input type="text" className="form-control"
                                   value={this.course_code}
                                   onChange={this.onChangeCourseCode}/>
                        </div>
                        <br/>
                        <div className="col-md-6">
                            <button type="submit" className="btn btn-primary">Add</button>
                        </div>

                    </div>
                </form>

            </div>

        )
    }
}
