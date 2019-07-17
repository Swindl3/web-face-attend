import React, { Component } from 'react'

class AttendItem extends Component {
    constructor(props) {
        super(props)
        console.log("constructor | AttendItemProps", props.first_name)
    }

    showItem() {
        const api_url = "http://localhost:8888/"
        const { first_name, last_name, rfid_num, imgpath, timestamp } = this.props


        return (
            <tbody>
                <tr>
                    <td class="text-center"><img style={{ width: 80, height: 80 }} src={api_url + imgpath} alt="new" /></td>
                    <td class="text-center">{first_name + ' ' + last_name}</td>
                    <td class="text-center">{rfid_num}</td>
                    <td class="text-center">{timestamp}</td>

                </tr>

            </tbody>
        )
    }
    showHead() {
        return (
            <thead>
                <tr>
                    <th class="text-center">Image</th>
                    <th class="text-center">Name</th>
                    <th class="text-center">RFID</th>
                    <th class="text-center">TIME</th>

                </tr>
            </thead>
        )
    }
    render() {
        if (this.props.first_name !== '' || this.props.first_name != null || this.props.first_name !== undefined) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <table class="table table-striped table-bordered">
                                {this.showHead()}
                                {this.showItem()}
                            </table>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default AttendItem;