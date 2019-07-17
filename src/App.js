import React, { Component } from 'react';
import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import AttendItem from './component/attend/AttendItem'
import Axios from 'axios'
import AttendList from './component/attend/AttendList';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {attends: [] }
  }

  componentDidMount() {
    Axios.get("http://localhost:8888/in/getall")
      .then(res => {
        // console.log(res.data.body)
        this.list = res.data.body
        this.setState({attends:this.list})
        console.log("stateApp", this.state.attends)
      })
  }
  render() {
    return (
      <div>
        <Header />
        <AttendList attends={this.state.attends} />
        <AttendItem />
        <Footer owner="Swindle" email="swindlemaxxx@gmail.com" />
      </div>
    );
  }
}

export default App;
