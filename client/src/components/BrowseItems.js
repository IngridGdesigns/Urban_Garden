import React from 'react';
import ListPosts from './ListPosts';
import SearchPosts from './SearchPosts';

class BrowseItems extends React.Component {
    
    
    render() {

        return(
            <div className='container-fluid'>
               <SearchPosts auth={this.props.auth}/>
                <hr/> 
                <ListPosts auth={this.props.auth}/>
            </div>
        )
    }
}

export default BrowseItems;