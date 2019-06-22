import React, {Component} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


export default class StudentSubmissionComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            subject : '',
            assignmentName : '',
            startDate : '',
            dueDate : '',
            file : '',
            comment : '',
            mark : ''
        }
    }

    componentDidMount() {

            axios.get('http://localhost:4030/api/assignments/find/'+this.props.match.params.id )
                .then(res=>{
                    this.setState({
                        subject : res.data.subject,
                        assignmentName : res.data.assignmentName,
                        startDate : res.data.startDate,
                        dueDate : res.data.dueDate
                    })
                })
                .catch(err=>{
                    console.log(err);
                })
    }

    render() {
        return (
            <div className="container" style={{backgroundColor: "#FFF"}}>
                <br/><br/><br/>
                <form onSubmit={this.onFormSubmit}>
                    <h2>Create Assignment</h2>
                    <br/><br/>
                    <table className="table">
                        <thead>
                        <tr>

                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Subject</td>
                            <td>
                                {this.state.subject}
                            </td>
                        </tr>

                        <tr>
                            <td>Assignment Name </td>

                            <td>
                                {this.state.assignmentName}
                            </td>
                        </tr>

                        <tr>

                            <td> Start </td>

                            <td>
                                {this.state.startDate}
                            </td>
                        </tr>

                        <tr>
                            <td>Due Date </td>

                            <td>
                                {this.state.dueDate}
                            </td>
                        </tr>

                        </tbody>
                    </table>
                    <div className="form-group">
                        <input type="submit"
                               value="Add Assignment"
                               className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        );
    }
}