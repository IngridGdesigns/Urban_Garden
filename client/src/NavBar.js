import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Login from './components/Login'

const NavBar = (props) => {
        const { history, location, match } = props;
        console.log('location', location)
        console.log('match', match);
        
        return(
            <React.Fragment>
    
            <nav className='navbar navbar-dark bg-primary fixed-top'>
                <li className='navbar-brand'>
                    urbangarden app
                </li>
   
                <button onClick={() => history.push('/Login')} type='button' 
                className='btn btn-secondary'>Login now!!</button>
              
               <li>
                   <Link to='/UserProfile/:id'>
                   UserProfile id man
                   </Link>
                </li>
                
            </nav>
            </React.Fragment>
        )
    }


export default withRouter (NavBar);
/* 
{
<li>
<button to='/Login' type="button" class="btn btn-primary">Login</button> }
    <Link to='/Login' component={Login}>Login</Link>
</li>*/