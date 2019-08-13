import React, { Component } from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

class ExportToExcel extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="btn btn-success mt-3"
                    table="table-to-xls"
                    filename="filtredData.xls"
                    sheet="tablexls"
                    buttonText="Export To XLS" />
                <table hidden="true " id="table-to-xls">
                    <thead>
                        <tr>
                            <th>AttenId</th>
                            <th>UserId</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>RFID</th>
                            <th>Timestamp</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.attends.map(attend => {
                                return (
                                    <tr key={attend.attend_id}>
                                        <td>{attend.attend_id}</td>
                                        <td>{attend.user_id}</td>
                                        <td>{attend.first_name}</td>
                                        <td>{attend.last_name}</td>
                                        <td>{attend.rfid_num}</td>
                                        <td>{attend.timestamp}</td>

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>
        );
    }
}

export default ExportToExcel