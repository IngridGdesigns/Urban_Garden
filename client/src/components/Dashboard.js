import React from 'react';
import AddPosts from './AddPosts'
import Footer from './Footer'

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


    render() {
        
        return(
        <div>
        <div className='container'>
                <Profile auth={this.props.auth}/>
         

                <AddPosts addPost={this.addPost} auth={this.props.auth}/>
            </div>
            <div>
            <Footer/>
            </div>
        </div>
        )
    }
}

export default Dashboard;


           