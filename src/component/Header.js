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
    componentDidMount(){
        this.timerID =  setInterval(() => {
            this.tictok()
        }, this.interval);
    }
    componentDidUpdate(){
        
    }
    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    tictok() {
        this.setState({ date: new Date() });
    }
    render() {
        return (
            <div>
                <h1>{this.state.date.toLocaleTimeString()}</h1>
            </div>
        )
    }
}
export default Header;