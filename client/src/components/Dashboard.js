import React from 'react';
import ListPosts from './ListPosts';




class DashBoard extends React.Component {
    
    constructor(props){
        super(props);

        this.state = {
            user_items: [],
            
        }

    }


    render() {
        return(
            <div>
            <h1>Dashboard</h1>
            <h2>Welcome to your Dashboard</h2>
           <ListPosts />
            </div>
        )
    }
}

export default DashBoard;