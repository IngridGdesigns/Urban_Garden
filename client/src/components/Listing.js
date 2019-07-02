import React, {Component} from 'react'
import { FaLemon} from 'react-icons/fa'
import SubmitBarter from './SubmitBarter'
import UserBreadCrumb from './UserBreadCrumb'

class Listing extends Component {
    constructor(props) {
      super(props);
      this.state = {
        offers: [],
        user_items: [],
        offer_accepted: false,
       
      }
}

//read promise.all to get everything instead of one by one
  componentDidMount() { 
    const headers = { 'Authorization': `Bearer ${this.props.auth.accessToken}`}
    const id = this.props.match.params.item_id //get by id


    fetch(`http://localhost:3005/user_items/${id}`,{
        method: 'GET',
        headers: headers, 
  }).then(res => res.json())
    .then(user_items => this.setState({ user_items })
    )
    .then(() => fetch(`http://localhost:3005/offers/${id}`, {
        method: 'GET',
        headers: headers, 
    })
    ).then(res => res.json())
    .then(offers => this.setState({offers})
  ).catch(err => console.log(err))
}
    
  handleOfferChange = (e) => {
    e.preventDefault(); //prevents from page reloading
    this.setState({ offers: [...e.target.value]}) //({ offers: [...e.target.value]})
    console.log('handlechange function on?? was this added now??')
}

  handleSubmit= (e) => {
    e.preventDefault();
    this.props.addPost(...this.state.offers)
    console.log(`a post was submitted ${this.state.offers}`)
    this.setState({ offers: ''})
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

    let askQuery = document.getElementById('askBarter')
  
    askQuery.value = '';
  
  }

//<div className="loader centered"></div>

  handleOfferAccepted = (e)=> {
    e.preventDefault();
    this.setState(prevState => ({
      offer_accepted: !prevState.offer_accepted//sets to true e.value.target//
    })
    )
  }


    render() {
      const {user_items} = this.state
      
        return (
            <div className='container-fluid'>
            <UserBreadCrumb/>

              <div className='container'>

                <div className='row'>

                  <div className='col-md-6'>

                    <div className='card' style={{backgroundColor: 'whitesmoke'}}>
                      <div className='card-body'>
                        <div className='card-title'> 

                          <div className='row'>
                            <div className='col-sm-8 col-md-8 color3'>

                            <FaLemon style={{color: 'green'}}/> Item id:  {user_items.item_id}</div>
                            <div className='col-sm-4 col-md-4 color3'>zipcode: {user_items.zipcode}</div>
                          </div>
                        </div>
                        
                      <div className='card-text text-center'>
                        <h3 className='display-3 text-center' style={{color: 'green'}}>{user_items.item_name}</h3>
                        <p className='lead text-left'>{user_items.description}</p>
                      </div>
                    </div>  
                  </div>
                  
                </div>
                <div className='col-md-6'>
                  <div>
                    <h4 >Posted by: {user_items.username}</h4>
                </div>
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
                      <button 
                      className='btn-primary' //addOffer={(e) => this.addOffer(this.props.match.params.item_id, e)}
                      id='offerAccepted'
                      onClick={(e) => this.handleOfferAccepted(e)}
                      >{this.state.offer_accepted ? 'offer accepted' : 'accept'}
                      </button>
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

