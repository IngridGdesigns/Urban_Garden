import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

import Login from './components/Login'


const NavBar = (props) => {
        const { history, location, match } = props;
        console.log('location', location)
        console.log('match', match);
        
        return(
           
    
            <nav className='navbar navbar-dark bg-primary fixed-top'>
                <div className='container'>
                    <Link to='/home' className='navbar-brand'>Urbangarden app</Link>
                <ul className='right'>
                { /* link to loads component without reloading/to link to the page */}
                    <li><Link to='/home'>Home</Link></li>
                    <li><NavLink to='/aboutpage'>About</NavLink></li>
                    <li><NavLink to='/login'>Login</NavLink></li>
                </ul>
   
                {/* <button onClick={() => history.push('/Login')} type='button' 
                className='btn btn-secondary'>Login now!!</button> */}
              {/* Asi es, cuando el path de una ruta tiene dos puntos como :id, automaticamente se registra una ruta que permite una variable en esa parte, asi como tu dices. 
              Solamente que para que el Link funcione tiene que usar template strings asi: <Link to={`reports/${this.props.id}`} />﻿
                */}
               {/* <li>
                   <Link to='/UserProfile/:id'>
                   UserProfile id man
                   </Link>
                </li> */}
                </div>
            </nav>
        )
    }


export default withRouter (NavBar);
//its giving a component super powers, functions that give component other features/properties
/* 
{
<li>
<button to='/Login' type="button" class="btn btn-primary">Login</button> }
    <Link to='/Login' component={Login}>Login</Link>
</li>*/