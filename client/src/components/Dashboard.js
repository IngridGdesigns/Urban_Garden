import React from 'react';
import AddPosts from './AddPosts'
import UserBreadCrumb from './UserBreadCrumb'
import GrowCrop from './GrowCrop';


class Dashboard extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            user_items: [],
            
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
        <div className='container'>
            <div>
                <UserBreadCrumb/>
                
                <AddPosts addPost={this.addPost} auth={this.props.auth}/>
                <GrowCrop auth={this.props.auth}/>
            </div>
            
            {/* <Footer/> */}
        </div>
        )
    }
}

export default Dashboard;


           