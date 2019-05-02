import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import './App.css';
import { FaEnvira } from 'react-icons/fa'




const NavBar = (props) => {
        // const { history, location, match } = props;
        // console.log('location', location)
        // console.log('match', match);
        
        return(
           
           <div style={{marginBottom: "100px"}}> 
            <nav className='theNav navbar fixed-top' >
                <div className='container'>
               
                    <Link to='/home' className='navbar-brand'> <FaEnvira/> Urbangarden app</Link>
                    
                <ul className='nav right'>
                { /* link to loads component without reloading/to link to the page */}
                    <li className='nav-item'><NavLink to='/home'>Home</NavLink></li>
                    <li className='nav-item'><NavLink to='/aboutpage'>About</NavLink></li>
                    <li className='nav-item'><NavLink to='/login'>Login</NavLink></li>
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
        </div>
          
        )
    }


export default withRouter (NavBar);
//its giving a component super powers, functions that give component other features/properties
/* 
{
<li>
<button to='/Login' type="button" className="btn btn-primary">Login</button> }
    <Link to='/Login' component={Login}>Login</Link>
</li>*/

//             <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
//   <a className="navbar-brand" href="#">Navbar</a>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
//     <span className="navbar-toggler-icon"></span>
//   </button>
//   <div className="collapse navbar-collapse" id="collapsibleNavbar">
//     <ul className="navbar-nav">
//       <li className="nav-item">
//         <a className="nav-link" href="#">Link</a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">Link</a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">Link</a>
//       </li>    
//     </ul>
//   </div>  
// </nav>