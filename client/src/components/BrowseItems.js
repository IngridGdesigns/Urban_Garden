import React from 'react';
import ListPosts from './ListPosts';
// import AddPosts from './AddPosts';



class BrowseItems extends React.Component {
    
    // constructor(props){
    //     super(props);

    //     this.state = {
    //         user_items: [], 
    //     }
    // }
    


    render() {
        return(
            <div>
               
            <h1>BrowseItems</h1>
            <h2>Welcome to your BrowseItems</h2>
            
            <ListPosts auth={this.props.auth}/>
            
            </div>
        )
    }
}

export default BrowseItems;