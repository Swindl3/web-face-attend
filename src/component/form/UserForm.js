import React, { Component } from 'react'

class UserForm extends Component {
    render() {
        return (
            <div className="container-fluid m-5 ">
                <h1 className="text-success  text-center"> Add User </h1>
                <br />
                <span className="text-center">Firstname :  </span>
                <input className="form-control w-25" />
                
            </div>
        )
    }
}

export default UserForm