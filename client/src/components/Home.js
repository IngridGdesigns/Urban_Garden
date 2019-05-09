import React from 'react';
// import {Link } from 'react-router-dom';
import {FaRecycle } from 'react-icons/fa';
import Alert from 'react-bootstrap/Alert'


class Home extends React.Component {

    render(){
        return (
            <div>
                <Alert variant="success">
                <div className="row justify-content-center">
                    <div className="col-10 col-md-10 col-lg-8 col-xl-7">
                        <Alert.Heading className="display-3">Hey, nice to see you</Alert.Heading>
                        {/* <div className="display-4 text-success mt-3 mb-3">
                        Welcome
                        </div> */}
                        <p className="lead">
                        De tiempo somos. Somos sus pies y sus bocas. Los pies del tiempo 
                        caminan en nuestros pies. A la corta o a la larga, ya se sabe, los 
                        vientos del tiempo borrarán las huellas.
                        {/* way to learn <a href="https://reactjs.org/">React</a>  */}
                        </p>
                        <hr />
                        <div className="row">
                        <a href="/register" className="btn btn-outline-success mr-2">
                        Sign up
                        </a>
                        <a href="/login" className="btn btn-success">
                        Log In
                        </a>

                        </div>
                        
                    </div> 
                </div>
                {/* <Alert.Heading>Hey, nice to see you</Alert.Heading>
            <p>
                Aww yeah, you successfully cool message. Quisieramos estar soleandonos en la playita con
                un juguito de piña y un ceviche bien delicioso. 
            </p>

            <hr />
            <p className="mb-0">
                Whenever you need to, be sure to use margin utilities to keep things nice
                and tidy.
            </p> */}
                </Alert>

            <div className="jumbotron text-center">
                <h1 >jumbotron</h1>
                
                <p>Welcome to Urgan garden soo cool! Resize this responsive page to see the effect!</p> 
            </div>
                 <h1 className="color1">This is the cool Home Page!</h1>
                <button type="button" className="btn btn-primary">Login</button>
                <button type="button" className="btn btn-secondary">Sign up!</button>
                <h1 className="color2"><FaRecycle/>This is our home component!</h1>
                <h2 className="color3">wowww this is a blockquote</h2>

            </div>
        )
    }
}

export default Home;

/* - connect 
    login() {
        this.props.auth.login();
      }
      render() {
        const { isAuthenticated } = this.props.auth;
        return (
          <div className="container">
            {
              isAuthenticated() && (
                  <h4>
                    You are logged in! You can now view your{' '}
                    <Link to="profile">profile area</Link>
                    .
                  </h4>
                )
            }
            {
              !isAuthenticated() && (
                  <h4>
                    You are not logged in! Please{' '}
                    <a
                      style={{ cursor: 'pointer' }}
                      onClick={this.login.bind(this)}
                    >
                      Log In
                    </a>
                    {' '}to continue.
                  </h4>
                )
            }
          </div>
        );
      }


    state = {
        posts: [ ]
}

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(res => console.log(res.json))
    }*/