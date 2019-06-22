import React from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'


class Edit_Assignment_Component extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            file: null,
            country: '',
            subject:''

        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.fileUpload = this.fileUpload.bind(this);
        this.onSubjectChange = this.onSubjectChange.bind(this);

        this.countryData = [
            {value: 'SE1010', name: 'SE1010'},
            {value: 'SE1020', name: 'SE2020'}
        ];


    }

    onFormSubmit(e) {
        e.preventDefault(); // Stop form submit
        this.fileUpload(this.state.file).then((response) => {
            console.log(response.data);
        })
    }

    onChange(e) {
        this.setState({file: e.target.files[0]})
    }

    onChangeFile(e) {
        this.setState({
            file: e.target.value
        })
    }

    onSubjectChange(e) {
        this.setState({
            subject : e.target.value
        })
    }

    fileUpload(file) {
        const url = 'http://localhost:8081/getfile';
        const formData = new FormData();
        formData.append('file', file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        return axios.post(url, formData, config)
    }

    render() {
        return (
            <div className="container">
                <br/><br/><br/>
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
                    <tr>
                        <td>Subject</td>
                        <td>
                            <select name="country" value={this.state.subject} onChange={(e)=> this.onSubjectChange(e)}>
                                {this.countryData.map((e, key) => {
                                    return <option key={key} value={e.value}>{e.name}</option>;
                                })}
                            </select>
                        </td>
                    </tr>
                    <tr className="success">
                        <td>Assignment Name</td>
                        <td><input type="text"/> </td>
                        {/*<td>john@example.com</td>*/}
                    </tr>
                    <tr className="danger">
                        <td>Description</td>
                        <td><input type="text"/> </td>
                        {/*<td>mary@example.com</td>*/}
                    </tr>
                    <tr className="info">
                        <td>Upload Assignment here</td>
                        <td><div>
                            <label>Select File</label>
                            <br/><br/>
                            <input type="file" name="file" onChange={(e) => this.onChangeFile(e)} value={this.state.file}/>
                        </div></td>
                        {/*<td>july@example.com</td>*/}
                    </tr>
                    <tr className="warning">
                        <td>Due Date</td>
                        <td><input type="datetime-local"/> </td>
                        {/*<td>bo@example.com</td>*/}
                    </tr>
                    <tr className="active">
                        <td>Start Date</td>
                        <td><input type="datetime-local"/> </td>
                        {/*<td>act@example.com</td>*/}
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}


export default Edit_Assignment_Component;