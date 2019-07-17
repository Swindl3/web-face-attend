import React, { Component } from 'react'
import AttendItem from './AttendItem'
class AttendList extends Component {
    constructor(props){
        super(props)
        console.log("constructorLIST",props);
        
    }
    showAttend(){
        return  this.props.attends && this.props.attends.length > 0 && this.props.attends.length !== undefined  && this.props.attends.map(attend => (
            <AttendItem
                key={attend.attend_id}
                first_name={attend.first_name}
                last_name={attend.last_name}
                rfid_num={attend.rfid_num}
                imgpath={attend.imgpath}
                timestamp={attend.timestamp}
            />
         
        ))
        
    }
    render() {
        return (
            <div className="row">
                {this.showAttend()}
            </div>
        )
    }
}

export default AttendList;