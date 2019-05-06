import React, {Component} from 'react'
//import { Link } from 'react-router-dom'
// import axios from 'axios'
import { FaLemon} from 'react-icons/fa';

class Listing extends Component {
    constructor(props) {
      super(props);
      this.state = {
        offers: [],
        user_items: [],
      };
    }

componentDidMount() { 
  const headers = { 'Authorization': `Bearer ${this.props.auth.accessToken}`}
  const id = this.props.match.params.item_id //get by id
  fetch(`http://localhost:3005/user_items/${id}`, {
      method: 'GET',
      headers: headers, 
  })
  .then(res => res.json())
  .then(user_items => this.setState({ user_items }, console.log({user_items}))
).catch(error => console.log('Error', error))
}
  
// componentDidMount() { //this one worked
//   const headers = { 'Authorization': `Bearer ${this.props.auth.accessToken}`}
//   const id = this.props.match.params.item_id // we grab the ID from the URL
//   const {data} = axios.get(`http://localhost:3005/user_items/${id}`, headers)
//   this.setState({user_item: data})
//   console.log({user_items: data} + 'is it grabbing By ID??')
// }


    render() {
      const {user_items} = this.state
        return (
            <div>
              <div className='container'>
                <div className='row'>
                  <div className='jumbotron'>

                  <div className='row'>
    
                      <div className='col-sm-6 font-weight-bold color1'>
                      <FaLemon/> Item id:  {user_items.item_id}</div>
                      <div className='col-sm-3 text-right color3'> {user_items.zipcode}</div>
                  </div>

                    {/* <section className='col-9'>
                    <h3>lets start testing how much space we have</h3>
                    </section>
                    <section className='col-3'>
                      <h3>cookies desserts and cream, cronuts and croissants are good</h3>
                    </section> */}
                  <h6 className='color1'>Listing: {user_items.username}</h6>
                      <h4 className='display-3 text-center color2'>{user_items.item_name}</h4>
                      <p className='lead'>{user_items.description}</p>
                    <hr/>
                  </div>
                </div>
              </div>
            </div>
        )
    }

}

export default Listing;

//happy accident
/* <div className='container'>
<div className='row'>
  <div className='jumbotron text-center'>
  <h1>Listing: {user_items.username}</h1>
      <h4 className='display-3 text-success'>{user_items.item_name}</h4>
      <p className='lead'>{user_items.description}</p>
    <hr/>
  </div>
</div>
</div> */