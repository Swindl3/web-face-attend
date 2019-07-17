import React, { Component } from 'react'
import AttendItem from './AttendItem'
class AttendList extends Component {
    constructor(props){
        super(props)
        console.log("constructorLIST",props);
        
    }
    showAttend() {
        let { attends } = this.props
        return attends && attends.length > 0
          ? attends.map((attend, key) => {
            return <AttendItem
              key={key}
              first_name={attend.first_name}
              last_name={attend.last_name}
              rfid_num={attend.rfid_num}
              imgpath={attend.imgpath}
              timestamp={attend.timestamp}
            />
          })
          : null
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