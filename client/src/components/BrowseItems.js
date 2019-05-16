import React from 'react'
import ListPosts from './ListPosts'
import SearchPosts from './SearchPosts'
import UserBreadCrumb from './UserBreadCrumb'

class BrowseItems extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user_items: [],
            search: '',
        }
  }
  
    componentDidMount() {
        const headers = { 'Authorization': `Bearer ${this.props.auth.accessToken}`}
        fetch('http://localhost:3005/user_items', {
            method: 'GET',
            headers: headers, 
        })
          .then(res => res.json())
          .then(user_items => this.setState({ user_items })
        ).catch(err => (err))
    }


      onChangeSearch = (e) => {
        //const zipNums = /^[0-9\b]+$/;
        this.setState({search: e.target.value})
      }

    


    render() {

        return(
            <div className='container-fluid'>
                <UserBreadCrumb/>

                {/* Search Bar */}
                <SearchPosts 
                    auth={this.props.auth}
                    onChange={(e) => this.onChangeSearch(e)}
                    />

                <hr/>
            
                {/* lists the posts from user_items table */}
                <ListPosts 
                    auth={this.props.auth}
                    user_items={this.state.user_items}
                    search={this.state.search}
                    />
            </div>
        )
    }
}

export default BrowseItems;