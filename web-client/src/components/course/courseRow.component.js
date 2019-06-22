import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class CourseRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }

    render() {
        return (

            <tr>
                <td>
                    {this.props.obj._id}
                </td>
                <td>
                    {this.props.obj.course_name}
                </td>
                <td>
                    {this.props.obj.course_code}
                </td>
                <td>

                    <Link to={"/edit/" + this.props.courseObj._id} className="btn btn-primary">Accepet</Link>
                </td>
                }
            </tr>

        );
    }
}

export default CourseRow;