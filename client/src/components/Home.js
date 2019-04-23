import React from 'react';

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
                 <h1>About Page!</h1>
                <button type="button" class="btn btn-primary">Login</button>
                <button type="button" class="btn btn-secondary">Sign up!</button>
                <h1>This is our home component!</h1>
            </div>
        )
    }
}

export default Home;