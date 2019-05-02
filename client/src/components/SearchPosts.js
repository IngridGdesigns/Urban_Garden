import React from 'react';



class SearchPosts extends React.Component {
    render() {
        return(
            
            <div style={{color: "purple"}}>
               
            <h4>Profile</h4>
            <h6>Welcome to your SearchPosts page</h6>
            

            <hr />

            <div className="search-appointments row justify-content-center my-4">
            <div className="col-md-6">
              <div className="input-group">
                <input
                  id="SearchPosts"
                  type="text"
                  className="form-control"
                  aria-label="Search Posts"
                //   onChange={ e => this.props.searchApts(e.target.value)}
                  //Search Apts will receive the value of the input
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

                  {/* Pet Name */}
                  <div className="sort-menu dropdown-menu dropdown-menu-right">
                    <button 
                    // className={
                    //   "sort-by dropdown-item " + //if its equal to petName add class to active
                    //   (this.props.orderBy === 'petName' ? 'active': '') 
                    //   } 
                    //   onClick={ e => this.props.changeOrder('petName', this.props.orderDir)}
                    //   href="#"
                      >
                      User Name
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
                      Item Name
                    </button>

                    {/* Zipcode */}
                    <button 
                    // className={
                    //   "sort-by dropdown-item " + 
                    //   (this.props.orderBy === 'ownerName' ? 'active': '') 
                    //   } 
                    //   onClick={ e => this.props.changeOrder('ownerName', this.props.orderDir)}
                    //   href="#"
                      >
                      zipcode
                    </button>
                    </div>
                </div>
              </div>
            </div>
          </div>
           
            </div>
        )
    }
}

export default SearchPosts;