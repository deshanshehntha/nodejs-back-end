import React from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'


class Edit_Assignment_Component extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            file: '',
            country: '',
            subject: '',
            assignmentName: '',
            description: '',
            dueDate: '',
            startDate: ''

        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChangeFile = this.onChangeFile.bind(this);
        this.onSubjectChange = this.onSubjectChange.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDueDate = this.onChangeDueDate.bind(this);
        this.onChangeStartDate = this.onChangeStartDate.bind(this);
        this.onChangeAssignmentName = this.onChangeAssignmentName.bind(this);
        this.countryData = [
            {value: 'SE1010', name: 'SE1010'},
            {value: 'SE1020', name: 'SE2020'}
        ];


    }
    componentDidMount() {
        console.log(this.props.match.params.id);
        axios.get('http://localhost:4030/api/assignments/find/'+this.props.match.params.id)
            .then(response => {
                console.log(response.data[0].subject);
                this.setState({
                    subject: response.data[0].subject,
                    file: response.data[0].file,
                    country: response.data[0].country,
                    assignmentName: response.data[0].assignmentName,
                    description: response.data[0].description,
                    dueDate: response.data[0].dueDate,
                    startDate: response.data[0].startDate,

                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    onFormSubmit(e) {
        e.preventDefault(); // Stop form submit
        const data = new FormData();
        console.log(this.state.file);
        data.append("file", this.state.file);
        data.append("subject", this.state.subject);
        data.append("assignmentName", this.state.assignmentName);
        data.append("description", this.state.description);
        data.append("dueDate", this.state.dueDate);
        data.append("startDate", this.state.startDate);

        const url = 'http://localhost:8081/courseweb/api/newassignment/update';
        axios.put(url, data).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        });

        this.state = {
            file: '',
            country: '',
            subject: '',
            assignmentName: '',
            description: '',
            dueDate: '',
            startDate: ''

        };
    }
    onChangeFile(e) {
        this.setState({
            file: e.target.files[0]
        })
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    onChangeDueDate(e) {
        this.setState({
            dueDate: e.target.value
        })
    }

    onSubjectChange(e) {
        this.setState({
            subject: e.target.value
        })
    }

    onChangeStartDate(e) {
        this.setState({
            startDate: e.target.value
        })
    }

    onChangeAssignmentName(e) {
        this.setState({
            assignmentName: e.target.value
        })

    }

    render() {
        return (
            <div className="container" style={{backgroundColor: "#FFF"}}>
                <br/><br/><br/>
                <form onSubmit={this.onFormSubmit}>
                    <h2>Edit Assignment</h2>
                    <br/><br/>
                    <table className="table">
                        <thead>
                        <tr>
                            {/*<th></th>*/}
                            {/*<th></th>*/}
                            {/*<th></th>*/}
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="success">
                            <td>Assignment Name</td>
                            <td><input type="text"
                                       value={this.state.assignmentName}
                                       onChange={(e) => this.onChangeAssignmentName(e)}
                            /></td>
                            {/*<td>john@example.com</td>*/}
                        </tr>
                        <tr className="danger">
                            <td>Description</td>
                            <td><input type="text"
                                       value={this.state.description}
                                       onChange={(e) => this.onChangeDescription(e)}/></td>
                            {/*<td>mary@example.com</td>*/}
                        </tr>
                        <tr className="warning">
                            <td>Due Date</td>
                            <td><input type="datetime-local"
                                       value={this.state.dueDate}
                                       onChange={(e) => this.onChangeDueDate(e)}/></td>
                            {/*<td>bo@example.com</td>*/}
                        </tr>
                        <tr className="active">
                            <td>Start Date</td>
                            <td><input type="datetime-local"
                                       value={this.state.startDate}
                                       onChange={(e) => this.onChangeStartDate(e)}/></td>
                            {/*<td>act@example.com</td>*/}
                        </tr>
                        </tbody>
                    </table>
                    <div className="form-group">
                        <input type="submit"
                               value="Edit Assignment"
                               className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}


export default Edit_Assignment_Component;