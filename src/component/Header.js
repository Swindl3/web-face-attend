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
                    <div className="col-md-8 title text-left">
                        <h2 className="text-info"> <img className="mr-5" style={{ height: 120, width: 80 }} src="/images/logo/logo.png" alt="   " />  Face Attendance System (ระบบประทับเวลาด้วยใบหน้า)aaaa</h2>
                    </div>
                    <div className="col-md-4 title text-right">
                        <h5 className="text-muted mt-4">{this.state.date.toLocaleTimeString()}</h5>
                    </div>

                </div>
                <hr />

            </div>
        )
    }
}
export default Header;