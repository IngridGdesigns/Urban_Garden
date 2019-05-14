import React from 'react';
import AddPosts from './AddPosts'
// import Footer from './Footer'

import Profile from './Profile/Profile';

// photos of foood for future use - https://www.pexels.com/search/fruit%20icon/
//http://www.varunaweb.com


class Dashboard extends React.Component {
    
    constructor(props){
        super(props);

        this.state = {
            user_items: [],
            profile: {}
        }
    }

    componentDidMount() {
        const headers = { 'Authorization': `Bearer ${this.props.auth.accessToken}`}
        // const id = this.props.match.params.item_id //get by id

        fetch(`http://localhost:3005/user_items`, {
            method: 'GET',
            headers: headers, 
        })
         .then(res => res.json())
        .then(user_items => this.setState({ user_items })
        ).catch(err => (err))
    }


    render() {
        
        return(
        <div>
        <div className='container-fluid'>
                <Profile auth={this.props.auth}/>
         

                <AddPosts addPost={this.addPost} auth={this.props.auth}/>
            </div>
            
            {/* <Footer/> */}
            
        </div>
        )
    }
}

export default Dashboard;


           