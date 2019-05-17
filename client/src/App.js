import React, { Component } from 'react';
import { NavLink, Link} from 'react-router-dom'
import { FaEnvira } from 'react-icons/fa'
import { Button, Jumbotron, Navbar, Nav, } from 'react-bootstrap'
import './App.css'

import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      jumbotronTitle: 'Welcome!'
    }
  }

  goTo(route) {
    this.props.history.replace(`${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  componentDidMount() {
    const { renewSession } = this.props.auth;
    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }

  render() {
    const { isAuthenticated} = this.props.auth;

    return (
      <div>    { //when it's not authenticated show the navbar below
         !isAuthenticated() && (
          <div style={{marginBottom: '99px'}} > 
          <nav className='theNav navbar fixed-top' >
              <div className='container'>
             
                  <NavLink to='/' className='navbar-brand'> <FaEnvira/> Urbangarden</NavLink>
                  
              <ul className='nav right'>
              
                  <Button id="qsLoginBtn" 
                  className='btn btn-primary' 
                  onClick={this.login.bind(this, 'profile')}>Login</Button>
              </ul>
              </div>
          </nav>
          
          <Jumbotron className='jumbotron text-center img-fluid' 
          style={{height: '50vh', marginTop: '50px', backgroundPosition: 'center center',
          backgroundImage:"url('https://images.pexels.com/photos/1493378/pexels-photo-1493378.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"}}
          title={this.state.jumbotronTitle}>

                  

          <div className='row'>
            <div className='col-md-6 text-left' style={{backgroundColor: 'whitesmoke', backgroundBlendMode: 'screen'}}>
              <div style={{padding: '10%'}}>
                <div className='color1'>
                <h2>Let's start Bartering!</h2>
                  <p>If your ready to share your garden with the world go
                  ahead and click below to register.
                  </p>
                <button id='qsLoginBtn'
                  className='btn btn-warning' 
                  onClick={this.login.bind(this, 'profile')}>
                  Sign up!
                </button>
                </div>
            </div>
          </div>
            <div className='col-md-6'>
            </div>
          </div>
          </Jumbotron>
          
          <div className='container'>
          <About/>
         
          </div>
          <Footer className='footer' style={{backgroundColor: 'yellow'}}/>
          
      </div>
      
         )
       }
      { //access to this stuff
        isAuthenticated() && (
           <div className='container-fluid' > 
          <Navbar className='theNav navbar' expand="lg" role='navigation' aria-label='Main menu'>
            <Navbar className='theNav' style={{paddingTop: '20px'}}>
              <Navbar.Brand><Link to='/barter' className='logo'> <FaEnvira/> Urbangarden app</Link></Navbar.Brand>
           </Navbar>
            <Navbar.Toggle aria-controls="theNav basic-navbar-nav" />
           <Navbar.Collapse id="basic-navbar-nav text-right">
             <Nav className="ml-auto" style={{float: 'right'}}>
               <ul className='nav right'>
                  <li className='nav-item'><NavLink to='/home'>home</NavLink></li>
                  <li className='nav-item'><NavLink to='/barter'>barter</NavLink></li>
                   <li className='nav-item'><NavLink to='/dashboard'>dashboard</NavLink></li>
                  <li className='nav-item'><NavLink to='/growstuff'>growstuff</NavLink></li>
                  <li className='nav-item'><NavLink to='/profile'>profile</NavLink></li>
                  <li className='btn btn-primary'onClick={this.logout.bind(this)}>Logout</li>
              </ul>
            </Nav>
          </Navbar.Collapse>
         </Navbar>
      </div>
      
        )
      } 
      

<div className="container">
          {this.props.children}
        
        </div> 
   
        </div>

    );
  }
}

export default App;


      