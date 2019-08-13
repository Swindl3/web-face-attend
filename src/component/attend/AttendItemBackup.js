import React, { Component } from 'react'
import { img_url } from "../../Api"
class AttendItem extends Component {
    constructor(props) {
        super(props)
        console.log("constructor | AttendItemProps", props.first_name)
    }

    showItem() {
        const { first_name, last_name, rfid_num, imgpath, timestamp } = this.props



        return (
            <tbody>
                <tr>
                    <td class="text-center" style={{ maxWidth: 100, minWidth: 100 }}><img style={{ width: 80, height: 80 }} src={img_url + imgpath} alt="new" /></td>
                    <td class="text-center title font3" style={{ minWidth: 200 }}>{first_name + ' ' + last_name}</td>
                    <td class="text-center font2" style={{ width: 170 }}>{rfid_num}</td>
                    <td class="text-center font2" style={{ minWidth: 200 }}>{timestamp}</td>

                </tr>

            </tbody>
        )
    }
    showHead() {
        return (
            <thead className="table table-hover">
                <tr>
                    <th class="text-center font1">Image</th>
                    <th class="text-center font1">Name</th>
                    <th class="text-center font1">RFID</th>
                    <th class="text-center font1">TIME</th>

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