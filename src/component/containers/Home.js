import React, { Component } from 'react';
// import './App.css'
import Header from '../Header'
import Footer from '../Footer'
import AttendItem from '../../component/attend/AttendItem'
import UserForm from '../../component/form/UserForm'
import { connect } from 'react-redux'
import { AttendFetch } from '../../actions/CombineActions'
class Home extends Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    this.props.AttendFetch();
  }
  render() {
    console.log("propsStore",this.props)
    return (
      <div>
        <Header />
        {
          this.props.attends.length > 0
            ? <AttendItem attends={this.props.attends} />
            : null
        }
        {/* <UserForm /> */}
        <Footer owner="Swindle" email="swindlemaxxx@gmail.com" />
      </div>
    );
  }
}
function mapStateToProps({attends}){
  // console.log(state)
  // return {attends:state.attends}
  return {attends}
}

export default connect(mapStateToProps , {AttendFetch})(Home);
