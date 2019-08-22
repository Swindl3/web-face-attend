import React, { Component } from 'react';
import Axios from 'axios'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './component/containers/Home'
import About from './component/containers/About'
import User from './component/containers/user/ShowUser'
import NotFound from './component/containers/error/NotFound'
class App extends Component {

  returnRouter(){
    return (
      <Switch>
        <Route exact path="/" component={Home} /> { /*must this path for home component */ }
        <Route exact path="/about" component={About} />
        <Route exact path="/user" component={User} />
        <Route component={NotFound} />
      </Switch>
    )
  }

  render() {
    return (
      <BrowserRouter >
      
      {this.returnRouter()}

      </BrowserRouter>
    )
  }
}

export default App;
