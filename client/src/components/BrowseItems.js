import React from 'react';
import ListPosts from './ListPosts';




class BrowseItems extends React.Component {
    
    

    render() {

        return(
            <div className='container-fluid'>
           
            <div className='row'>
                <h1>Unique user browse item component</h1>
               
            </div>
            

            <hr/> 
            
            
            <ListPosts auth={this.props.auth}/>
            
            </div>
        )
    }
}

export default BrowseItems;