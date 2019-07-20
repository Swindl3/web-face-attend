import React, { Component } from 'react';
import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import Axios from 'axios'
import AttendList from './component/attend/AttendList';
import {api_url} from "./Api"
class App extends Component {
  constructor(props) {
    super(props)
    this.state = { attends: [] }
  }

  componentDidMount() {
    Axios.get(api_url)
      .then(res => {
        // console.log(res.data.body)
        this.list = res.data.body
        this.setState({ attends: this.list })
        console.log("stateApp", this.state.attends)
      })
  }
  render() {
    return (
      <div>
        <Header />
        {
          this.state.attends.length > 0
            ? <AttendList attends={this.state.attends} />
            : null
        }
       

        <Footer owner="Swindle" email="swindlemaxxx@gmail.com" />
      </div>
    );
  }
}

export default App;
