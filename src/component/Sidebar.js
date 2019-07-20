import React, { Component } from 'react'
import '../css/Sidebar.css'
class Sidebar extends Component {

    render() {
        return (
            <div class="sidenav">
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
            </div>

        )
    }
}

export default Sidebar;