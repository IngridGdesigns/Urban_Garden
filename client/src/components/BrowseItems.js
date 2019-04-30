import React from 'react';
import ListPosts from './ListPosts';



class BrowseItems extends React.Component {
    
    constructor(props){
        super(props);

        this.state = {
            user_items: [], 
        }
    }

    render() {
        return(
            <div>
               
            <h1>BrowseItems</h1>
            <h2>Welcome to your BrowseItems</h2>
            
            <ListPosts />
            
            </div>
        )
    }
}

export default BrowseItems;