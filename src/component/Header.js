import React, { Component } from 'react'

// const Header = () => {
//     return <h1>This is Header</h1>
// }
class Header extends Component {
    constructor(props) {
        super(props)
        this.state = { date: new Date() }
        this.interval = 1000


    }
    componentDidMount() {
        this.timerID = setInterval(() => {
            this.tictok()
        }, this.interval);
    }
    componentDidUpdate() {

    }
    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tictok() {
        this.setState({ date: new Date() });
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 title text-left">
                        <h1 className="text-info"> <img style={{height:150,width:100}}src="/images/logo/logo.png" alt="   "/>  Face Attendance System (ระบบประทับเวลาด้วยใบหน้า)</h1>
                    </div>
                    <div className="col-md-2 title text-right">
                        <h5 className="text-muted mt-4">{this.state.date.toLocaleTimeString()}</h5>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header;