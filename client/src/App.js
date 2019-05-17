import React, { Component } from 'react';
import { NavLink, Link} from 'react-router-dom'
import { FaEnvira } from 'react-icons/fa'
import { Button, Jumbotron } from 'react-bootstrap'
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
              
              {/* <li className='nav-item'><NavLink to='/home'>Home</NavLink></li> */}
              
              {/* <li className='nav-item'><NavLink to='/#top'>About us</NavLink></li> */}
                  {/* <li><a onClick={this.goTo.bind(this, 'home')}>home</a></li> */}
                  
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
          <div style={{marginBottom: '60px'}}> 
            <nav className='theNav navbar fixed-top' >
              <div className='container'>
                <Link to='/barter' className='navbar-brand'> <FaEnvira/> Urbangarden app</Link>
                  
              <ul className='nav right'>
                  <li className='nav-item'><NavLink to='/home'>home</NavLink></li>
                  <li className='nav-item'><NavLink to='/barter'>barter</NavLink></li>
                  <li className='nav-item'><NavLink to='/dashboard'>dashboard</NavLink></li>
                  <li className='nav-item'><NavLink to='/growstuff'>growstuff</NavLink></li>
                  <li className='nav-item'><NavLink to='/profile'>profile</NavLink></li>
                  <li className='btn btn-primary'onClick={this.logout.bind(this)}>Logout</li>
              </ul>
              </div>
          </nav>
          
      </div>
      
        )
      } 
      {/* {
        isAuthenticated() && (
            <Button
              id="qsLogoutBtn"
              bsStyle="primary"
              className="btn-margin"
              onClick={this.logout.bind(this)}
            >
              Log Out
            </Button>
          )
      } */}

<div className="container">
          {this.props.children}
        
        </div> 
   
        </div>

    );
  }
}

export default App;


      // what i had before linkedin and auth0
      // <BrowserRouter>
      //   <div className='App'>
      //   {/* NavBar component */}
      //     <NavBar/>
      //     <UserBreadCrumb />
      //       <div className="container">
      //         <Switch> 
      //             <Route exact path='/landing' component={LandingPage} />
      //             <Route exact path='/home' component={Home} />
      //             <Route path='/aboutpage' component={AboutPage}/>
      //             <Route path='/login' component={LoginForm} />
      //         {/* User signed in Routes only below */}
      //             <Route path='/browse' component={BrowseItems} />
      //             <Route path='/dashboard' component={Dashboard} />
      //             <Route path='/register' component={Registration} />
      //             <Route path='/test'  component={TestPage} />
      //           {/* <Route path='/UserProfile/:user_id' component={} /> */}
      //         </Switch>
             
      //   </div>
      //   </div>
      // </BrowserRouter>





//from AuthO
/* <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Auth0 - React</a>
            </Navbar.Brand>
            <Button
              bsStyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'home')}
            >
              Home
            </Button>
            {
              !isAuthenticated() && (
                  <Button
                    id="qsLoginBtn"
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.goTo.bind(this, 'profile')}
                  >
                    Profile
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    id="qsLogoutBtn"
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                )
            }
          </Navbar.Header>
        </Navbar>
        <div className="container">
          {this.props.children}
        </div> */



      //linkedin Video stuff
  //      { //when it's not authenticated show the navbar below
  //    !isAuthenticated() && (
  //     <div style={{marginBottom: "100px"}}> 
  //     <nav className='theNav navbar fixed-top' >
  //         <div className='container'>
         
  //             <NavLink to='/home' className='navbar-brand'> <FaEnvira/> Urbangarden app</NavLink>
              
  //         <ul className='nav right'>
  //             <li><a onClick={this.goTo.bind(this, 'home')}>Home</a></li>
  //             <li className='nav-item'><NavLink to='/register'></NavLink></li>
  //             <li id="qsLoginBtn" 
  //             className='btn btn-primary' 
  //             onClick={this.login.bind(this, 'profile')}>Login to Profile</li>
  //         </ul>
  //         </div>
  //     </nav>
  //     <Jumbotron title={this.state.jumbotronTitle}></Jumbotron>
  // </div>
  
  //    )
  //  }
  // { //access to this stuff
  //   isAuthenticated() && (
  //     <div style={{marginBottom: "100px"}}> 
  //       <nav className='theNav navbar fixed-top' >
  //         <div className='container'>
  //           <Link to='/home' className='navbar-brand'> <FaEnvira/> Urbangarden app</Link>
              
  //         <ul className='nav right'>
  //             <li className='nav-item'><NavLink to='/home'>Home</NavLink></li>
  //             <li className='nav-item'><NavLink to='/dashboard'>dashboard</NavLink></li>
  //             <li className='nav-item'><NavLink to='/browse'>browse</NavLink></li>
  //             <li className='btn btn-primary'onClick={this.logout.bind(this)}>Logout</li>
  //         </ul>
  //         </div>
  //     </nav>
  //     
  // </div>
  //<Jumbotron title={this.state.jumbotronTitle}></Jumbotron>
  //   )
  // } {
  //   isAuthenticated() && (
  //       <Button
  //         id="qsLogoutBtn"
  //         bsStyle="primary"
  //         className="btn-margin"
  //         onClick={this.logout.bind(this)}
  //       >
  //         Log Out
  //       </Button>
  //     )
  // }