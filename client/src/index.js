//import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styleCss/App.css'
import './styleCss/Pagestyles.css'
//import App from './App'
import * as serviceWorker from './serviceWorker'
import 'jquery/dist/jquery.js';
import 'popper.js/dist/umd/popper.js'; //need components of it
import 'bootstrap/dist/js/bootstrap.js';
import { makeMainRoutes } from './components/Routes';

const Routes = makeMainRoutes();
//instead of <App/>, add routes
const root = createRoot(document.getElementById('root'))

root.render(Routes);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
