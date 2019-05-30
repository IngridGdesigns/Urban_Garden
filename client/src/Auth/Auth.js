import history from '../history';
import auth0 from 'auth0-js';
import axios from 'axios';

import { AUTH_CONFIG } from './auth0-variables';
//require('dotenv').config({ path: '/Users/tpl3/Desktop/Urban_Garden/.env'})

export default class Auth {
  accessToken;
  idToken;
  expiresAt;
  userProfile;

  auth0 = new auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientId,
    redirectUri: AUTH_CONFIG.callbackUrl,
    audience: AUTH_CONFIG.apiUrl, //audience added
    responseType: 'token id_token',
    scope: 'openid profile email write:user_items post:usersdata read:usersdata read:messages user_metadata app_metadata' //scopes for users
  });

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getIdToken = this.getIdToken.bind(this);
    this.renewSession = this.renewSession.bind(this);
    this.getProfile = this.getProfile.bind(this);
    this.postingToDB = this.postingToDB.bind(this);
  }

  login() {
    this.auth0.authorize();
  }



  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {

      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        
        this.postingToDB();
      } else if (err) {
        history.replace('/'); //history.replace('/');
        console.log(err);
        debugger;
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  // getAccessToken() { //original code
  //   return this.accessToken;
  // }

  getAccessToken() { 
    const accessToken = localStorage.getItem('access token');
    if(!accessToken) {
    return new Error('No access token found');
    } 
    return accessToken;
  }

  getIdToken() {
    return this.idToken;
    //console.log(this.idToken)
  }

  setSession(authResult) {
    // Set isLoggedIn flag in localStorage
    localStorage.setItem('isLoggedIn', 'true');

    // Set the time that the access token will expire at
    let expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
    this.accessToken = authResult.accessToken;
    this.idToken = authResult.idToken;
    this.expiresAt = expiresAt;
    localStorage.setItem('access token', authResult.accessToken)
    // navigate to the home route
   history.replace('/home');//testing with linkedin video
  }

  renewSession() {
    this.auth0.checkSession({}, (err, authResult) => {
       if (authResult && authResult.accessToken && authResult.idToken) {
         this.setSession(authResult);
       } else if (err) {
         this.logout();
         console.log(err);
         alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
       }
    });
  }

  getProfile(cb) { //original code //https://curtistimson.co.uk/post/nodejs/auth0-access-user-details-email-nodejs/
    //let accessToken = this.getaccessToken()
    this.auth0.client.userInfo(this.accessToken, (err, profile) => {
      if (profile) {
        this.userProfile = profile;
      }
      cb(err, profile);
    });
  }

  postingToDB () { 
    //let profile = this.getProfile
    this.getProfile((err, profile) => {
      if(err) {
        console.log(err)
        return 
      }
      const headers = { 'Authorization': `Bearer ${this.getAccessToken()}`}
      axios({
        method: 'POST',
        headers,
        url: 'http://localhost:3005/usersdata',
        data: profile
      })
      .then(res => {
        console.log(`the res is ${res}`)
      })
      .catch(err => {
        console.log('post error', err);
      });
    }) 
  }

  //get profile @2
  // getProfile2(){
  //   if(localStorage.getItem('isLoggedIn')){
  //       return this.userProfile;
  //   } else {
  //     return ('something, !')
  //   }
  // }

  logout() {
    // Remove tokens and expiry time
    this.accessToken = null;
    this.idToken = null;
    this.expiresAt = 0;

     // Remove user profile
     this.userProfile = null;
     console.log('Logged Out')

    // Remove isLoggedIn flag from localStorage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem( 'access token' );

    this.auth0.logout({
      returnTo: window.location.origin
    });

    // navigate to the home route 
    history.replace('/');/////////////
  }

  //can be used to authenticate people
  isAuthenticated() {
    // Check whether the current time is past the// access token's expiry time
    let expiresAt = this.expiresAt;
    return new Date().getTime() < expiresAt;
  }
}

