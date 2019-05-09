import React from 'react';
import { FaRegStar} from 'react-icons/fa';



class SearchPosts extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        queryText: '',
      }
  }
  // componentDidMount() {
  //   const headers = { 'Authorization': `Bearer ${this.props.auth.accessToken}`, 'Content-Type': 'application/json'}
  //   fetch('http://localhost:3005/user_items', {
  //       method: 'GET',
  //       headers: headers, 
  //   })
  //     .then(res => res.json())
  //     .then(user_items => this.setState({ user_items }, console.log({user_items}))
  //   ).catch(error => console.log('Error', error))
  // }

   //query items by zip or name
//    searchListingHandler = (query) => {
//     this.setState({
//         queryText: query
//     })
// }


  
    render() {
      // let order;
      // let findItems = this.state.user_items;


    //  const {user_items} = this.state
    //           user_items.filter(eachItem => {
    //      // take each of diff parameters that we want to search by 
    //     // and compare what we are searching for with the value of 
    //     // that element in our data
    //     return (
    //         eachItem['itemName']
    //         .toLowerCase()
    //         .includes(this.state.queryText.toLowerCase()) ||

    //         eachItem['zipCode']
    //         .toLowerCase()
    //         .includes(this.state.queryText.toLowerCase()) 

    //         // eachItem['userName']
    //         // .toLowerCase()
    //         // .includes(this.state.queryText.toLowerCase()) ||
          
    //     )
    // })
     
        return(
            
            <div style={{color: "purple"}}>
            <h6><FaRegStar/>Welcome to your SearchPosts page</h6>
            <div className="search-appointments row justify-content-center my-4">
            <div className="col-md-6">
              <div className="input-group">
                <input
                  id="SearchPosts"
                  type="text"
                  className="form-control"
                  aria-label="Search Posts"
                  onChange={ e => this.props.searchListingHandler(e.target.value)}
                
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
                    <button 
                    className={
                      "sort-by dropdown-item " + //if its equal to userName add class to active
                      (this.props.orderBy === 'itemName' ? 'active': '') 
                      } 
                      onClick={ e => this.props.changeOrder('itemName', this.props.orderDir)}
                      href="#"
                      >
                      Item Name
                    </button>

                    {/* Item Name */}
                    <button 
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
                    <button 
                    className={
                      "sort-by dropdown-item " + 
                      (this.props.orderBy === 'zipCode' ? 'active': '') 
                      } 
                      onClick={ e => this.props.changeOrder('zipcode', this.props.orderDir)}
                      href="#"
                      >
                      Zipcode
                    </button>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <h6>end of searchpost component</h6>
          <hr />
    </div>
        )
    }
}

export default SearchPosts;