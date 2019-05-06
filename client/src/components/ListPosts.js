import React, {Component} from 'react'
import SearchPosts from './SearchPosts'
import { Link } from 'react-router-dom'
import { FaComment, FaRegStar} from 'react-icons/fa';


class ListPosts extends Component {
    constructor(props){
        super(props);

        this.state = {
            user_items: null,
            
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
            <div className='container'>
                <SearchPosts/>
                <div className='row'>
                    <h1>Browse a the ListPosts page, wow so cool</h1>
                </div>
                

                <hr/> 

                <div className='container'>
                <div className='row'> 
                {this.state.user_items === null && <p>Loading posts...</p>}
                {/* col-sm-6 col-md-4 */}
                {this.state.user_items && user_items.map(listed => 
                    <div className='thumbnail w-45'style={{paddingRight: '15px'}} key={listed.item_id}> 
                    {/* //list-group-item  */}
                    {/* <h2>Offered by: {item.username}</h2> */}
                
                    <div className='card text-white bg-success mb-3'>
                        <div className='card text-success bg-green mb-3'> 
                        <div className='card-header font-weight-bold'>{listed.item_name} 
                            <FaRegStar className='color4' style={{'fontSize': '20px'}}/>
                            <Link to={`/listing/${listed.item_id}`}>this is a link</Link>
                        </div>

                        <div className='card-body'>
                        <img 
                            className='mr-1 rounded-circle img-fluid'
                            style={{height: 240, width: 240, radius: 20 }}
                            src='https://www.bbcgoodfood.com/sites/default/files/guide/guide-image/2018/09/avocados-title.jpg' 
                            alt='avocado placeholder'
                        />
                        <h5 className='card-title'>Offered by: {listed.username}</h5>
                        {/* <p className='card-text'> {listed.description}
                        Read more stuff about the post
                            {/* <a href='/barter'>Link</a> 
                            <a href='#' className='btn btn-default' role='button'>Button</a> 
                </p> */}
                        <h6 className="card-text">Read more stuff about the post</h6>
                        </div>
                            <div className="card-footer">
                                <a href='/'
                                    className="btn btn-success" 
                                    role="button"><FaComment/>Barter
                                </a> 
                        </div>
                    </div>
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
//https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables