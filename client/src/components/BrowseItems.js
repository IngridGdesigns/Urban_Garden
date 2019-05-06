import React from 'react';
import ListPosts from './ListPosts';
// import AddPosts from './AddPosts';



class BrowseItems extends React.Component {
    

    render() {
        return(
            <div>
               
         
            <h2>Welcome to your BrowseItems</h2>
            
            <ListPosts auth={this.props.auth}/>
            
            </div>
        )
    }
}

export default BrowseItems;