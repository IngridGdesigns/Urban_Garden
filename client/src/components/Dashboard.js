import React from 'react';
import AddPosts from './AddPosts'

// photos of foood for future use - https://www.pexels.com/search/fruit%20icon/
//http://www.varunaweb.com


class Dashboard extends React.Component {
    
    constructor(props){
        super(props);

        this.state = {
            user_items: []
        }
    }

    // componentDidMount() {
    //     const headers = { 'Authorization': `Bearer ${this.props.auth.accessToken}`}
    //     fetch('http://localhost:3005/user_items', {
    //         method: 'GET',
    //         headers: headers, 
    //     })
    //       .then(res => res.json())
    //       .then(user_items => this.setState({ user_items })
    //     ).catch(err => res.send(err + 'you have rror'))
    // }
    
    //Add Post
    // addPost = (user_items) => {
    //     console.log(user_items + 'earth to database, is it adding to DB??')
    // }


    render() {
        
        return(
        <div className='container'>
            <h2>Welcome unique user - Dashboard</h2>
            
            <img
                className="mr-3 rounded-circle img-fluid" //img fluid to make image responsive
                style={{height: 180, width: 180, radius: 160 }}
               
                src="http://www.varunaweb.com/wp-content/uploads/multiple-fruit-tree-stark-double-delicious-apple-apple-trees-stark-multi-fruit-tree.jpg"
                //"http://mrg.bz/QejgXC" //https://morguefile.com/photos/morguefile/4/fruit/pop
                alt="Avatar "/>

            <AddPosts addPost={this.addPost} auth={this.props.auth}/>
            
        </div>
        )
    }
}

export default Dashboard;


           