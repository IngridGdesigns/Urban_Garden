import React from 'react';
import ListPosts from './ListPosts';
import SearchPosts from './SearchPosts';
import Profile from './Profile/Profile'



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
        // const posts = this.props.user_items
        // let searchItem = this.state.search.trim().toLowerCase
        // if(search.length > 0 ){
        //     posts = posts.filter(function(post){
        //         return post.item_name.toLowerCase().match(search);
        //     })
        // }

        return(
            
            <div className='container-fluid'>
            <Profile auth={this.props.auth}/>

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