import React from 'react';
import { FaRegStar} from 'react-icons/fa';

class SearchPosts extends React.Component {
  constructor(props) {
    super(props);
       this.state = {
        user_items: props.user_items,
        search: ''
       }
      console.log(props.user_items)
  }


    onChangeSearch = (e) => {
      this.setState({search: e.target.value})
      this.props.onChange(e);
    }

    render() {
        return(
          
        <div 
        className= 'jumbotron text-center img-fluid' 
        style={{color: 'seagreen', backgroundPosition: 'center center', backgroundImage:'url("https://images.pexels.com/photos/1493378/pexels-photo-1493378.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")'}}>
          <div>
            <h4 style={{color: ''}}><FaRegStar/>Welcome to your SearchPosts page</h4>
          </div>
          <div className='row justify-content-center my-4'>
            <div className='col-md-6'>
              <form >
                <div className=' row form'>
                  <input
                        id='searchPosts'
                        type='text'
                        className='form-control'
                        aria-label='Search Posts'
                        placeholder='find by name'
                        ref='search'
                        value={this.state.search}
                        onChange={this.onChangeSearch}
                      />    
                </div>
              </form>
          </div>
          <button 
            className='btn btn-primary'
            type='submit'
          >search</button>
        </div> 
    </div>
        )
    }
}

export default SearchPosts;

