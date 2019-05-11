import React from 'react';
import { FaRegStar} from 'react-icons/fa';

class SearchPosts extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        find: '',
        searchType: 'zipcode'
      
      }
  }
  componentDidMount() {
    const headers = { 'Authorization': `Bearer ${this.props.auth.accessToken}`}
    
    fetch(`http://localhost:3005/user_items/find/:zipcode`, {
        method: 'GET',
        headers: headers, 
    })
      .then(res => res.json())
      .then(user_items => this.setState({ user_items }, console.log({user_items}))
    ).catch(error => console.log('Error', error))
  }
//https://react.tips/reactjs-and-geocoding/
   //query items by zip or name
   searchListingHandler = (e) => {
     e.preventDefault()
    this.setState({ find: [...this.state.searchType]
          ///check this.state.search and this.state.searchType
    })
}




updateSearch(e){
  this.setState({search: e.target.value, e})
}


    render() {
        return(
          
            <div className = "jumbotron text-center img-fluid" style={{color: "seagreen", backgroundPosition: "center center", backgroundImage:"url('https://images.pexels.com/photos/1493378/pexels-photo-1493378.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"}}>
            <div>
            <h6 className="text"><FaRegStar/>Welcome to your SearchPosts page</h6>
            </div>
            <div className="row justify-content-center my-4">
            <div className="col-md-6">
              <div className="input-group">
                <input
                  //id="searchPosts"
                  type="text"
                  className="form-control"
                  aria-label="Search Posts"
                  value={this.state.search}
                  onChange={this.searchListingHandler}
                
                />
                <div className="input-group-append">
                  <button
                    type="button"
                    className="btn btn-success dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Sort by: <span className="caret" />
                  </button>

                  {/* Item Name */}
                  <div className="sort-menu dropdown-menu dropdown-menu-right">
                    <button className='dropdown-item'
                    // className={
                    //   "sort-by dropdown-item " + //if its equal to userName add class to active
                    //   (this.props.orderBy === 'itemName' ? 'active': '') 
                    //   } 
                      onClick={this.searchListingHandler}
                      href="#"
                      >
                      Item Name
                    </button>

                    {/* Item Name */}
                    <button className='dropdown-item'
                    // className={
                    //   "sort-by dropdown-item " + 
                    //   (this.props.orderBy === 'aptDate' ? 'active': '') 
                    //   } 
                    //   onClick={ e => this.props.changeOrder('aptDate', this.props.orderDir)}
                    //   href="#"
                      >
                     fill blanks
                    </button>

                    {/* Zipcode */}
                    <button className='dropdown-item'
                    // className={
                    //   "sort-by dropdown-item " + 
                    //   (this.props.orderBy === 'zipCode' ? 'active': '') 
                    //   } 
                      onClick={(e) => this.updateSearch(e)}
                      
                      >
                      Zipcode
                    </button>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <h6>end of searchpost component</h6>
         
    </div>
        )
    }
}

export default SearchPosts;

//https://codepen.io/iamtimsmith/pen/zJPzwN?editors=0010