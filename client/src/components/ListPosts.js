import React, {Component} from 'react';
import SearchPosts from './SearchPosts';


class ListPosts extends Component {
    constructor(props){
        super(props);

        this.state = {
            user_items: [],
            
        }
    }

    // componentWillMount() {
    //     const { getAccessToken } = this.props.auth;
    //     const headers = { 'Authorization': 'Bearer ${getAccessToken()}'}
    //     const url = 'http://localhost:3005/user_items';
    // }

    // componentDidMount() {
    //     fetch('/user_items')
    //         .then(res => res.json())
    //         .then(user_items => this.setState({user_items}, console.log(user_items, 'User items showing??'))
    //     )       
    // }

    componentDidMount() {
        const headers = { 'Authorization': `Bearer ${this.props.auth.accessToken}`}
        fetch('http://localhost:3005/user_items', {
            method: 'GET',
            headers: headers, 
        })
          .then(res => res.json())
          .then(user_items => this.setState({ user_items }, console.log({user_items}))
        ).catch(error => console.log('Error', error))
      }


    render(){
        const {user_items} = this.state

        return(
            <div>
                <SearchPosts/>
                <div className="row">
                <h1>Browse a list of the Posts page, wow so cool</h1>
                
                </div>
               
                <hr/> 

                <div className="row">
                <div className="col-sm-6 col-md-4">
                {user_items.map(item => 
                    <div className="thumbnail" key={item.item_id}> 
                    {/* //list-group-item  */}
                    <h2>Offered by: {item.username}</h2>
                    <img 
                    className="mr-1 rounded-circle img-fluid"
                    style={{height: 240, width: 240, radius: 20 }}
                    src="https://www.bbcgoodfood.com/sites/default/files/guide/guide-image/2018/09/avocados-title.jpg" 
                    alt="avocado placeholder"
                    />
                    
                    <div className="caption" >
                        <h3> {item.item_name}</h3>
                        <p>{item.description}, {item.zipcode}..</p>
                        <p>
                            <a href="/barter" className="btn btn-success" role="button">Barter</a> 
                            {/* <a href="#" className="btn btn-default" role="button">Button</a> */}
                        </p>
                    </div>
                    <hr/>
                </div>
                )}
                
                </div>
                
                </div>
            </div>
        )
    }
}

export default ListPosts;