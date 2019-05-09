import React, {Component} from 'react'
import { FaLemon } from 'react-icons/fa';
import { FaRegLemon } from 'react-icons/fa';
import {Fragment} from 'react'



class SubmitBarter extends Component {
    constructor(props){
        super(props);
        this.state = {
            offers: [],
            
        }
    }

    componentDidMount() { 
      const headers = { 'Authorization': `Bearer ${this.props.auth.accessToken}`}
      // const id = this.props.item_id //get by id
      fetch(`http://localhost:3005/offers`, {
          method: 'GET',
          headers: headers, 
      })
      .then(res => res.json())
      .then(offers => this.setState({ offers }, console.log({offers}))
    ).catch(error => console.log('Error', error))
    }


    
    // updateAsking(value) {
    //     this.setState({
    //       offers: value,
    //     });
    //   }

      handleOfferChange = (e) => {
        e.preventDefault(); //prevents from page reloading
        //const headers = { 'Authorization': `Bearer ${this.props.auth.accessToken}`}
        this.setState({ offers: [...e.target.value]})
        console.log('handlechange function on?? was this added now??')
    }

    handleOfferSubmit= (e) => {
        e.preventDefault();
        this.props.addOffer(...this.state.offers)
        alert('A offer was submitted: ' + this.state.value);
        // this.setState({ user_items: ''})
    }



      addOffer = (e) => {
        e.preventDefault(); //prevents page from reloading -- 'e' is for event
        const headers = { 'Authorization': `Bearer ${this.props.auth.accessToken}`, 'Content-Type': 'application/json'}
        //const { match: { params } } = this.props;
        //const id = this.props.item_id //get by id
        
        let data = {
          asking: document.getElementById('askBarter').value,
          //author: document.getElem
      }
        fetch(`http://localhost:3005/offers`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(response => this.setState({ offers: [...this.state.offers, response]}))
      }

        render() {
         
            return(
<Fragment>
        <div className='form-group text-left'><FaRegLemon/>
          <label htmlFor='asking'>Question:</label>
          <input
            type='text'
            id='askBarter'
            onChange={this.handleOfferChange}
            className='form-control'
            placeholder='Start Bartering!'
            value={this.state.asking}
          />
        </div>
        <button 
          className='btn btn-success'
          onClick={this.addOffer}>
          <FaLemon/>  Submit
        </button>
        <hr className='my-4' />
      </Fragment>

            )
        }



}

export default SubmitBarter;