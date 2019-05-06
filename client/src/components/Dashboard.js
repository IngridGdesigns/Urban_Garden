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

    // componentWillMount() {
    //     this.setState({ profile: {} });
    //     const { userProfile, getProfile } = this.props.auth;
    //     if (!userProfile) {
    //       getProfile((err, profile) => {
    //         this.setState({ profile });
    //       });
    //     } else {
    //       this.setState({ profile: userProfile });
    //     }
    //   }

    render() {
   
        return(
        <div>
            <h2>Welcome unique user - Dashboard</h2>
            <h2>cant add yet...</h2>
            <img
                className="mr-3 rounded-circle img-fluid" //img fluid to make image responsive
                style={{height: 180, width: 180, radius: 160 }}
                src="http://www.varunaweb.com/wp-content/uploads/multiple-fruit-tree-stark-double-delicious-apple-apple-trees-stark-multi-fruit-tree.jpg"
                //"http://mrg.bz/QejgXC" //https://morguefile.com/photos/morguefile/4/fruit/pop
                alt="Avatar "/>

            <AddPosts auth={this.props.auth}/>
            
        </div>
        )
    }
}

export default Dashboard;


           