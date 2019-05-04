import React, { Component } from 'react';
//import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { NavLink, Link} from 'react-router-dom'
import { FaEnvira } from 'react-icons/fa'
import { Navbar, Button } from 'react-bootstrap'
// import history from './history'


// import NavBar from './NavBar';
// import UserBreadCrumb from './components/UserBreadCrumb'

// import LandingPage from './components/LandingPage'
// import AboutPage from './components/AboutPage'
// import Home from './components/Home'
// import LoginForm from './components/LoginForm'

// import TestPage from './components/TestPage'

// import BrowseItems from './components/BrowseItems';
// import Dashboard from './components/Dashboard';
// import Registration from './components/Registration';




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
<div style={{marginBottom: 120}}>
  <h1>hello this is working now</h1>
  



  
  <Navbar className='theNav navbar fixed-top fluid'>
          <header>
          <Link to='/home' className='navbar-brand' onClick={this.goTo.bind(this, '/home')}><FaEnvira/> Urbangarden app</Link>
            {/* <Button
              // style="primary"
              className="btn-margin btn-primary"
              onClick={this.goTo.bind(this, 'home')}
            >
              Home
            </Button> */}
            {
              !isAuthenticated() && (
                  <Button
                    id="qsLoginBtn"
                    // style="primary"
                    className="btn-margin btn-primary"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>
                )
            }
            {
              isAuthenticated() && (
              <div>
                <div style={{marginBottom: "100px"}}> 
                <nav className='theNav navbar fixed-top'>
                  <div className='container'>
                    <Link to='/home' className='navbar-brand'> <FaEnvira/> Urbangarden app</Link>   
                    <ul className='nav right'>
                      <li className='nav-item'><NavLink to='/home'>Home</NavLink></li>
                      <li className='nav-item'><NavLink 
                      onClick={this.goTo.bind(this, 'profile')} 
                      to='/profile'>Profile</NavLink></li>
                      <li className='nav-item'><NavLink to='/dashboard'>Dashboard</NavLink></li>
                      <li className='nav-item'><NavLink to='/browseitems'>Browse</NavLink></li>
                      <li className='btn btn-primary' id="qsLogoutBtn" onClick={this.logout.bind(this)}>Logout</li>
                    </ul>
                </div>
               </nav>
            </div>
            
                {/* <ul className='nav right'>
                <li><Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.goTo.bind(this, 'profile')}
                  >
                    Profile
                  </Button></li> */}
                 {/* <li><a onClick={this.goTo.bind(this, 'home')}>Home</a></li> */}
                {/* <li className='nav-item'><Link to='/dashboard'>Dashboard</Link></li> */}
                {/* </ul> */}
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
          </header>
        </Navbar>
        <div className="container">
          {this.props.children}
        </div>


</div>






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
    );
  }
}

export default App;


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