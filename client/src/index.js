import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styleCss/App.css'
import './styleCss/Pagestyles.css'



import App from './App'
import * as serviceWorker from './serviceWorker'


import 'jquery/dist/jquery.js';
import 'popper.js/dist/umd/popper.js'; //need components of it
import 'bootstrap/dist/js/bootstrap.js';


ReactDOM.render(<App/>,
 
    document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
