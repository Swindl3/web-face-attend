import React, { Component } from 'react';
import Axios from 'axios'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './component/containers/Home'
class App extends Component {

  renderRouter(){
    return (
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    )
  }

  render() {
    return (
      <BrowserRouter >
      
      {this.renderRouter()}

      </BrowserRouter>
    )
  }
}

export default App;
