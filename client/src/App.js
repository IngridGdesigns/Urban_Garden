import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NavBar from './NavBar';

import AboutPage from './components/AboutPage'
import Home from './components/Home'
import Login from './components/Login'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <NavBar/>
          <Switch> 
            <Route exact path='/' component={Home} />
            <Route path='/aboutpage' component={AboutPage}/>
            <Route path='/login' component={Login} />
          {/* <Route path='/UserProfile/:user_id' component={} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
