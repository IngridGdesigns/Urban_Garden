import React, { Component } from 'react';
import { NavLink, Link} from 'react-router-dom'
import { FaEnvira } from 'react-icons/fa'
import { Navbar, Nav, } from 'react-bootstrap'
// import { AUTH_CONFIG } from './config';
import './App.css'

import Footer from './components/Footer'
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
    const { isAuthenticated } = this.props.auth;
    // console.log(AUTH_CONFIG);
    // console.log(process.env.REACT_APP_AUTH0_DOMAIN);

    return (
      <div>    { //when it's not authenticated show the navbar below
         !isAuthenticated() && (
          <div> 
          {/* start of Navbar */}
            <Navbar className='theNav navbar' expand="lg" role='navigation' aria-label='Main menu'>
              <Navbar className='theNav'>
                <Navbar.Brand><Link to='/' className='logo'> <FaEnvira/> Urbangarden app</Link></Navbar.Brand>
              </Navbar>
              <Navbar.Toggle aria-controls="theNav basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav text-right">
                <Nav className="ml-auto" style={{float: 'right'}}>
                  <ul className='nav right'>
                    <li className='btn btn-primary'onClick={this.login.bind(this, 'profile')}>Login</li>
                </ul>
              </Nav>
            </Navbar.Collapse>
            </Navbar>
          {/* end of Navbar */}

          {/* start jumbotron */}
          <div className='jumbotron text-center img-fluid' 
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
          </div>
          

          <div className='container'>
            <About/>
            </div>
            <Footer className='footer' style={{backgroundColor: 'yellow'}}/>
      </div>
      
         )
       }
      { //access to this stuff
        isAuthenticated() && (
          <div>
          
          <Navbar className='theNav navbar' expand="lg" role='navigation' aria-label='Main menu'>
            <Navbar className='theNav' style={{paddingTop: '20px'}}>
              <Navbar.Brand><Link to='/home' className='logo'> <FaEnvira/> Urbangarden</Link></Navbar.Brand>
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


      