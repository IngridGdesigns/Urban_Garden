import React, {Component} from 'react'
import { FaLemon} from 'react-icons/fa';
import SubmitBarter from './SubmitBarter';

class Listing extends Component {
    constructor(props) {
      super(props);
      this.state = {
        offers: [],
        user_items: [],
       
      }
}

//read promise.all to get everything instead of one by one
  componentDidMount() { 
    const headers = { 'Authorization': `Bearer ${this.props.auth.accessToken}`}
    const id = this.props.match.params.item_id //get by id
    console.log("HEY WERE INSIDE LISTING.JS")
    console.log(this.props.match)
    fetch(`http://localhost:3005/user_items/${id}`,{
        method: 'GET',
        headers: headers, 
  }).then(res => res.json())
    .then(user_items => this.setState({ user_items }))
    .then(() => fetch(`http://localhost:3005/offers/${id}`, {
        method: 'GET',
        headers: headers, 
    })
    ).then(res => res.json())
    .then(offers => this.setState({offers})
  ).catch(err => console.log(err))
}
    
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.offers !== prevProps.offers) {
      this.fetchData(this.props.offers);
    }
}

  handleOfferChange = (e) => {
    e.preventDefault(); //prevents from page reloading
    this.setState({ offers: [...e.target.value]})
    console.log('handlechange function on?? was this added now??')
}

  handleSubmit= (e) => {
    e.preventDefault();
    this.props.addPost(...this.state.offers)
    alert('A post was submitted: ' + this.state.value);
    this.setState({ offers:[]})
}

addOffer = (id, e) => {
  e.preventDefault(); 
  const headers = { 'Authorization': `Bearer ${this.props.auth.accessToken}`, 'Content-Type': 'application/json'}
  //const { match: { params } } = this.props;
  //const id = this.props.item_id //get by id
  // console.log(id)
  
  let data = {
    asking: document.getElementById('askBarter').value,
}
  fetch(`http://localhost:3005/offers/${id}`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data),
  })
  .then(res => res.json())
  .then(response => this.setState({ offers: [...this.state.offers, response]}))
}

//<div className="loader centered"></div>

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

                  
                  <h6 className='color1'>Listing: {user_items.username}</h6>
                      <h4 className='display-3 text-center color2'>{user_items.item_name}</h4>
                      <p className='lead'>{user_items.description}</p>
                    <hr/>
                  </div>
                  
                </div>
             <SubmitBarter 
                  auth={this.props.auth} 
                  item_id={this.props.match.params.item_id}
                //handleOfferChange={(e) => this.handleOfferChange(e)}
                  addOffer={(e) => this.addOffer(this.props.match.params.item_id, e)}
                  onClick={(e) => this.handleSubmit(e)}
              />


            <div className='row'>
                <div className='column' style={{'width':'75%'}}>
                    <h5>Offers:</h5>
                </div>
                <div className='column' style={{'width':'25%'}}>
                    <h5>Accept Offers</h5>
                </div>
            </div>
             {/* <p>Offers:</p> */}
             {
                this.state.offers.map((barter, idx) => (
                  <div className='container' key={idx}>
                    <div className='row color1' >
                    <div className='column' style={{'width':'70%'}}>
                      <p>{barter.asking}</p>
                      </div>
                      <div className='column' style={{'width':'30%'}}>
                      <button className='btn-primary'>accept{barter.offer_accepted}</button>
                      </div>
                    </div>
                   
                  </div>
                ))

             }
              </div>
            </div>
        )
    }

}

export default Listing;

