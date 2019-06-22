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
            mark : '',
            remaining : ''
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

                    const data = new FormData();

                    data.append("deadLineDate",res.data.dueDate );

                    axios.post('http://localhost:8080/courseweb/api/assignment/time',data )
                        .then(response=>{
                            this.setState({
                                remaining : response.data
                            })
                        })
                })
                .catch(err=>{
                    console.log(err);
                })
    }

    componentDidUpdate() {

    }

    render() {
        return (
            <div className="container" style={{backgroundColor: "#FFF"}}>
                <br/><br/><br/>
                <form onSubmit={this.onFormSubmit}>
                    <h2>Submit Assignment</h2>
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

                        <tr>
                            <td> Time remaining </td>
                        </tr>
                        <tr>
                            {this.state.remaining}
                        </tr>
                        <tr>
                            <td> Submit File </td>

                            <td>
                                <input type = "file" />
                            </td>
                        </tr>

                        <tr>
                            <td> Comment </td>

                            <td>
                                <input type = "text"
                                       required/>
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