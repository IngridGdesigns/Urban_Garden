import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css'
import NavBar from './NavBar';

import LandingPage from './components/LandingPage'
import AboutPage from './components/AboutPage'
import Home from './components/Home'
import LoginForm from './components/LoginForm'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
       
        <NavBar/>
      
        <div className="container">
      
        <Switch> 
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/home' component={Home} />
            <Route path='/aboutpage' component={AboutPage}/>
            <Route path='/login' component={LoginForm} />
          {/* <Route path='/UserProfile/:user_id' component={} /> */}
        </Switch>
        </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
