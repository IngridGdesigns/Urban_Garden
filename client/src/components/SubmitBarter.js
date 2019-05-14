import React, {Component} from 'react'
import { FaLemon } from 'react-icons/fa';
import { FaRegLemon } from 'react-icons/fa';
import {Fragment} from 'react'

class SubmitBarter extends Component {
    constructor(props){
        super(props);
        this.state = {
            offers: [],
            item_id: props.item_id
            
        }
        console.log(this.props.item_id)
  }

  render() {
      return(
        <Fragment>
              <div className='form-group text-left'><FaRegLemon/>
                <label htmlFor='asking'>Question:</label>
                <input
                  type='text'
                  id='askBarter'
                  onChange={this.props.handleOfferChange}
                  // value={this.state.item_id}
                  className='form-control'
                  placeholder='Start Bartering!'
                />
              </div>
              <button 
                className='btn btn-success'
                onClick={this.props.addOffer}>
                <FaLemon/>  Submit
              </button>
                
              <hr className='my-4' />
            </Fragment>

            )
        }

     

}

export default SubmitBarter;