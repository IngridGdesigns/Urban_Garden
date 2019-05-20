import React, {Component} from 'react'
import { FaLemon } from 'react-icons/fa'


class SubmitBarter extends Component {
    constructor(props){
        super(props);
        this.state = {
            // do these need to be in the state?
            offers: [],
            item_id: props.item_id
            
        }
        console.log(this.props.item_id)
  }

  render() {
      return(
        <div className='container' style={{paddingTop: '5%'}}>
              <div className='form-group text-left'>
                <label htmlFor='asking'>   Question:</label>
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
            </div>

            )
        }

     

}

export default SubmitBarter;
