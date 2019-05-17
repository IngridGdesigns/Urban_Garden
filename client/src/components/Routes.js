import React from 'react';
import { Route, Router, Redirect } from 'react-router-dom';
import App from '../App';

import LandingPage from './LandingPage'

import Home from './Home';
import About from './About'
import Dashboard from './Dashboard';
import BrowseItems from './BrowseItems';
import Profile from '../components/Profile/Profile';
import Listing from '../components/Listing';
import SubmitBarter from '../components/SubmitBarter'
import SearchPosts from './SearchPosts';
import Footer from './Footer'




import Callback from './Callback/Callback';
import Auth from '../Auth/Auth';
import history from '../history';
import AboutPage from './AboutPage';


import GrowStuff from './GrowStuff';

// export const auth = new Auth();
const auth = new Auth(); //old 

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
    <Router history={history}>
    <div>
      <Route path='/' render={(props) => <App auth={auth} {...props} />} />
      <Route path='/about' render={(props) => <AboutPage auth={auth} {...props} />} />

      <Route path='/landingpage' render={(props) => <LandingPage auth={auth} {...props} />} />
      <Route path='/submitbarter' render={(props) => <SubmitBarter auth={auth} {...props} />}/>
      <Route exact path='/home' render={(props) => <Home {...props} />} />
      
      <Route path='/dashboard' render={(props) => <Dashboard auth={auth} {...props} />} />
      <Route path='/barter' render={(props) => <BrowseItems auth={auth} {...props} />} />
      <Route exact path='/listing/:item_id' render={(props) => <Listing auth={auth} {...props}/>} />
      <Route path='/searchposts' render={(props) => <SearchPosts auth={auth} {...props} />} />
      <Route path='/about' render={(props) => <About auth={auth} {...props}/>} />

      <Route path='/growstuff' render={(props) => <GrowStuff auth={auth} {...props} />} />
      <Route path='/footer' render={(props) => <Footer auth={auth} {...props} />} />
      
    
      <Route path='/profile' render={(props) => (
        !auth.isAuthenticated() ? (
          <Redirect to='/home'/>
        ) : (
          <Profile auth={auth} {...props} /> // original code 
        )
      )} />
      <Route path='/callback' render={(props) => {
        handleAuthentication(props);
        return <Callback {...props} /> 
      }}/>        
    </div>
  </Router>
  );
}
