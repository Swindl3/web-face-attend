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
                    <div className="col-md-1">
                        <img className="mr-10 img-center" style={{ height: 120, width: 70}} src="/images/logo/logo.png" alt="   " />
                    </div>
                    <div className="col-md-9 title text-left">
                        <h4 className="text-info mt-5 ml-4 font4">   Face Attendance System (ระบบประทับเวลาด้วยใบหน้า)</h4>
                    </div>
                    <div className="col-md-2 title text-right">
                        <h5 className="text-muted mt-4 font5">{this.state.date.toLocaleTimeString()}</h5>
                    </div>

                </div>
                <hr />

            </div>
        )
    }
}
export default Header;