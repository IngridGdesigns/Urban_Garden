import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'


import NavBar from './NavBar';
import UserBreadCrumb from './components/UserBreadCrumb'

import LandingPage from './components/LandingPage'
import AboutPage from './components/AboutPage'
import Home from './components/Home'
import LoginForm from './components/LoginForm'

import TestPage from './components/TestPage'

import BrowseItems from './components/BrowseItems';
import Dashboard from './components/Dashboard';
import Registration from './components/Registration';




class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
        {/* NavBar component */}
          <NavBar/>
          <UserBreadCrumb />
            <div className="container">
              <Switch> 
                  <Route exact path='/landing' component={LandingPage} />
                  <Route exact path='/home' component={Home} />
                  <Route path='/aboutpage' component={AboutPage}/>
                  <Route path='/login' component={LoginForm} />
              {/* User signed in Routes only below */}
                  <Route path='/browse' component={BrowseItems} />
                  <Route path='/dashboard' component={Dashboard} />
                  <Route path='/register' component={Registration} />




                  <Route path='/test'  component={TestPage} />
                {/* <Route path='/UserProfile/:user_id' component={} /> */}
              </Switch>
             
        </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
