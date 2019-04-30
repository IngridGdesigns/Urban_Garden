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

    render() {
        return(
            <div>
                    <h2>Welcome UNIQUE USER BLAH BLAH - Dashboard</h2>
                    <img
                            className="mr-3 rounded-circle img-fluid" //img fluid to make image responsive
                            style={{height: 180, width: 180, radius: 160 }}
                            src="http://www.varunaweb.com/wp-content/uploads/multiple-fruit-tree-stark-double-delicious-apple-apple-trees-stark-multi-fruit-tree.jpg"
                            //"http://mrg.bz/QejgXC" //https://morguefile.com/photos/morguefile/4/fruit/pop
                            alt="Avatar "/>
            
            <AddPosts/>
            </div>
        )
    }
}

export default Dashboard;


           