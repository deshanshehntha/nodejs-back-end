import React, {Component} from 'react';
import axios from 'axios';

const Instructor = props => (

    <div className='form-group'>
        <label>{props.fname} {props.lname}
            <input type='checkbox' name={props.id} className='form-check' onChange={props.onChange}/>
        </label>
    </div>
);

export default class addCourse extends Component {
    constructor(props) {
        super(props);
        this.onChangeCourseName = this.onChangeCourseName.bind(this);
        this.onChangeCourseCode = this.onChangeCourseCode.bind(this);

        this.onChangeCheckInstructor = this.onChangeCheckInstructor.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            course_name: '',
            course_code: '',
            checkBoxes: [],
            instructors: [],
            students: [],
            msg: 'Please Check  entire Details again!! '
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

    onChangeCheckInstructor(e) {
        console.log(e.target.name);

        if (e.target.checked) {
            const array = this.state.checkBoxes;
            array.push(e.target.name);
            this.setState({
                checkBoxes: array
            })
        } else {
            const array = this.state.checkBoxes;
            const index = array.indexOf(e.target.name);
            console.log(index);
            array.splice(index, 1);
            console.log(array);
            this.setState({
                checkBoxes: array
            })
        }
    }

    // this method invoked after rendering signup component
    componentDidMount() {
        document.title = "Add Course";


        axios.get('http://localhost:4030/api/users/instructors').then(response => {
            console.log(response.data.instructors);
            this.setState({
                instructors: response.data.instructors
            });
        }).catch(err => {
            console.log(err)
        })
    }


    onSubmit(e) {
        e.preventDefault();


        const newIns = [];

        this.state.checkBoxes.forEach(element => {
            const newObj = {
                instructor: element,
                status: 'not-accepted'
            };
            newIns.push(newObj);
        });
        const courseObj = {
            course_name: this.state.course_name,
            course_code: this.state.course_code,
            instructors: newIns,
            students: []
        };
        axios.post('http://localhost:4030/api/courses/addCourse', courseObj)
            .then(result => {

                console.log(result);

                this.setState({
                    course_name: '',
                    course_code: '',
                    checkBoxes: [],
                    instructors: [],
                    students: [],
                    msg: 'Please Check  entire Details again!! '
                });


                this.props.history.push("/");

            }).catch(error => {
            console.log(error);
            this.setState({
                msg: ' There are some Errors'
            });

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


                        <div className='form-group'>
                            {
                                this.state.instructors.map((currentInstructor, i) => (
                                        <Instructor id={currentInstructor._id} key={i} fname={currentInstructor.fname} lname={currentInstructor.lname}
                                                    onChange={this.onChangeCheckInstructor}/>
                                    )
                                )
                            }
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
