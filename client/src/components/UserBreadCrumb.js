import React from 'react';
import { NavLink } from 'react-router-dom';
import {FaEnvira} from 'react-icons/fa'


class UserBreadCrumb extends React.Component {
    render() {
        return(
            <div >
               
               <div>
                <nav className='nav' aria-label='breadcrumb'>
                <div className='container' >
                <NavLink to='/home' className='navbar-brand' style={{color: "purple"}}> <FaEnvira/> </NavLink>
               
               <ul className='breadcrumb nav right'>
                   <li className='breadcrumb-item'><NavLink to='/dashboard' > User dashboard link</NavLink></li>
                    <li className='breadcrumb-item'><NavLink to='/browse' >User browse items link</NavLink></li>
               </ul>
                    </div>
                </nav>
                <hr />
                </div>
            </div>
        )
    }
}

export default UserBreadCrumb ;

                    


