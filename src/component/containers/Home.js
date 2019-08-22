import React, { Component } from 'react';
// import './App.css'
import Header from '../Header'
import Footer from '../Footer'
import Axios from 'axios'
import AttendItem from '../../component/attend/AttendItem'
import UserForm from '../../component/form/UserForm'
import { api_url } from "../../Api"
class Home extends Component {
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
            ? <AttendItem attends={this.state.attends} />
            : null
        }
        {/* <UserForm /> */}
        <Footer owner="Swindle" email="swindlemaxxx@gmail.com" />
      </div>
    );
  }
}

export default Home;
