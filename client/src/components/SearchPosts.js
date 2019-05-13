import React from 'react';
import { FaRegStar} from 'react-icons/fa';

class SearchPosts extends React.Component {
  constructor(props) {
    super(props);
       this.state = {
        user_items: props.user_items

       }
      console.log(props.user_items)
  }

//https://react.tips/reactjs-and-geocoding/
   //query items by zip or name
 
//    searchListingHandler = (e) => {
//     e.preventDefault()
//    this.setState({ search: this.state.search
//          ///check this.state.search and this.state.searchType
//    })
// }

//   onChangeSearch = (e) => {
//   this.setState({[e.target.name]: e.target.value})
// }

    render() {
        return(
          
        <div 
        className= "jumbotron text-center img-fluid" 
        style={{color: "seagreen", backgroundPosition: "center center", backgroundImage:"url('https://images.pexels.com/photos/1493378/pexels-photo-1493378.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"}}>
          <div>
            <h6 className="text"><FaRegStar/>Welcome to your SearchPosts page</h6>
          </div>
          <div className="row justify-content-center my-4">
            <div className="col-md-6">
              <form >
                <div className=" row form">
                  <input
                        id="searchPosts"
                        type="text"
                        className="form-control"
                        aria-label="Search Posts"
                        placeholder="find by name"
                        ref="search"
                        value={this.state.search}
                        onChange={this.props.onChangeSearch}
                      /> 

                          
                </div>
            
              </form>
          </div>
          <button 
            className='btn btn-primary'
            type="submit"
          
          >search</button>
        </div> 
    </div>
        )
    }
}

export default SearchPosts;

//https://codepen.io/iamtimsmith/pen/zJPzwN?editors=0010