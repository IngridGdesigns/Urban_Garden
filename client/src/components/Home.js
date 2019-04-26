import React from 'react';
import {FaRecycle } from 'react-icons/fa';
import Alert from 'react-bootstrap/Alert'


class Home extends React.Component {
    state = {
        posts: [ ]
}

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(res => console.log(res.json))
    }
    render(){
        return (
            <div>
                <Alert variant="success">
                <Alert.Heading>Hey, nice to see you</Alert.Heading>
            <p>
                Aww yeah, you successfully cool message. Quisieramos estar soleandonos en la playita con
                un juguito de piña y un ceviche bien delicioso. 
            </p>
            <hr />
            <p className="mb-0">
                Whenever you need to, be sure to use margin utilities to keep things nice
                and tidy.
            </p>
            </Alert>

            <div className="jumbotron text-center">
                <h1>jumbotron</h1>
                <p>Welcome to Urgan garden soo cool! Resize this responsive page to see the effect!</p> 
            </div>
                 <h1 className="color1">This is the cool Home Page!</h1>
                <button type="button" className="btn btn-primary">Login</button>
                <button type="button" className="btn btn-secondary">Sign up!</button>
                <h1 className="color2">This is our home component!</h1>
                <h2 className="color3">wowww this is a blockquote</h2>
           
                
            </div>
        )
    }
}

export default Home;