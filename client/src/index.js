import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import * as serviceWorker from './serviceWorker'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import AboutPage from './components/AboutPage'
import DashBoard from './components/Dashboard'
import Login from './components/Login'
import UserProfileId from './components/UserProfileId'

ReactDOM.render(
    <BrowserRouter>
        <React.Fragment>
            <Route path='/' component={App} />
            <Route path='/Login' component={Login} />
            <Route path='/AboutPage' component={AboutPage}/>
            <Route path='/Dashboard' component={DashBoard}/>
            <Route path='/UserProfile/:id' component={UserProfileId}/>
        </React.Fragment>
    </BrowserRouter>,
    document.getElementById('root')
    
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
