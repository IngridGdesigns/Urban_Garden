import React from 'react';
import { FaRegLemon } from 'react-icons/fa';
import { FaLemon } from 'react-icons/fa';
//import Profile from './Profile/Profile'
// import axios from 'axios';

class AddPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          offers: [],
          user_items: [],
          isHidden: false,
        };

}

toggleFormHidden() {
    this.setState({
        isHidden: !this.state.isHidden
    })
}
toggleForm() {
    this.setState({
      formDisplay: !this.state.formDisplay
    });
  }

    // componentDidMount() {
    //     const headers = { 'Authorization': `Bearer ${this.props.auth.accessToken}`}
    //     fetch('http://localhost:3005/user_items', {
    //         method: 'GET',
    //         headers: headers, 
    //     })
    //       .then(res => res.json())
    //       .then(user_items => this.setState({ user_items })
    //     ).catch(err => res.send(err + 'you have rror'))
    // }


    handleChange = (e) => {
        e.preventDefault(); //prevents from page reloading
        //const headers = { 'Authorization': `Bearer ${this.props.auth.accessToken}`}
        this.setState({ user_items: [...e.target.value]})
        console.log('handlechange function on?? was this added now??')
    }

    handleSubmit= (e) => {
        e.preventDefault();
        this.props.addPost(...this.state.user_items)
        alert('A post was submitted: ' + this.state.value);
        // this.setState({ user_items: ''})
    }


    // //Add new post to user_item table -- before Auth0
    addPost = (e) => {
        e.preventDefault(); //prevents page from reloading -- 'e' is for event
        const headers = { 'Authorization': `Bearer ${this.props.auth.accessToken}`, 'Content-Type': 'application/json'}
       
        
        let data = {
                    item_name: document.getElementById('itemInput').value,
                    description: document.getElementById('desInput').value,
                    zipcode: document.getElementById('zipInput').value,
                    username: document.getElementById('nameInput').value
        }

        fetch('http://localhost:3005/user_items', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(response => this.setState({ user_items: [...this.state.user_items, response]}))
    }
  
    render() {
        
        return(     
        <div>

         <hr/>
         <h2>AddPosts to Barter stuff</h2>

         <div className='card textcenter mt-3 container'>
         <div className='card-header bg-success text-white container-fluid'>
         <button onClick={this.toggleForm}
         className="btn" 
         src={{color : 'white'}}><FaLemon/>
         </button>
             {/* <FaLemon data-toggle="collapse"/> Add new item to barter */}
             {!this.state.isHidden}
         </div>

                 <div className='card-body'>
                 {/* id='addItem'  */}
                 <form 
                 // onSubmit={this.handleSubmit}
                 >
                     <div className='form-group form-row'>
                     <label
                         className='col-md-2 col-form-label text-md-right'
                         htmlFor='itemName'
                         readOnly
                     >
                    Username
                     </label>
                     <div className='col-md-4'>
                         <input 
                            type='text'
                            className='form-control'
                            name='username'
                            id='nameInput'
                            placeholder='write username'
                            value={this.state.username}
                            onClick={this.handleChange}
                         />
                         </div>
                    Item Name
                     <div className='col-md-4'>
                         <input type='text'
                             className='form-control'
                             name='item_name'
                             id='itemInput'
                             placeholder='Item Name'
                             value={this.state.item_name}
                             onClick={this.handleChange}
                         />
                         <h1>{this.state.user_items.item_name}</h1>
                     </div>
                     </div>
             
                     <div className='form-group form-row'>
                     <label
                         className='col-md-2 col-form-label text-md-right'
                         htmlFor='zipcode'
                     >
                         Zipcode
                     </label>
                     <div className='col-md-4'>
                         <input
                         type='text'
                         className='form-control'
                         name='zipcode'
                         id='zipInput'
                         value={this.state.zipcode}
                         onClick={this.handleChange}
                         />
                     </div>

                     <label
                         className='col-md-2 col-form-label text-md-right'
                         htmlFor='aptTime'
                     >
                         Time
                     </label>
                     <div className='col-md-4'>
                     <FaRegLemon/> 
                         {/* <input
                         type='time'
                         className='form-control'
                         name='createdAt'
                         id='createdOn'
                         //   value={this.state.createdOn}
                         //   onChange={this.handleChange}
                         /> */}
                     </div>
                     </div>

                     <div className='form-group form-row'>
                     <label className='col-md-2 text-md-right' htmlFor='description'>
                     Description
                     </label>
                     <div className='col-md-10'>
                         <textarea
                         className='form-control'
                         rows='4'
                         cols='50'
                         name='description'
                         type='text'
                         id='desInput'
                         placeholder='Tell us about the item'
                         value={this.state.description}
                         onChange={this.handleChange}
                         />
                     </div>
                     </div>

                     <div className='form-group form-row mb-0'>
                     <div className='offset-md-2 col-md-10'>
                     
                     </div>
                     </div>
                     <button className='btn btn-success d-block ml-auto'
                     id='addNewPost'
                     onClick={this.addPost}>
                         Submit and add a New item
                 </button>
                 </form>
                 
                 </div>
             </div>
            </div>

        )
    }
}

export default AddPosts;

/* old code 

 //     fetch('http://localhost:3005/user_items', {
    //         method: 'POST',
    //         headers: headers, 
    //     })

    // addPost = () => {
    //     const headers = { 'Authorization': `Bearer ${this.props.auth.accessToken}`}
         //  const contJson = 'Content-Type': 'application/json'
    //     let data = {
    //         item_name: document.getElementById('itemInput').value,
    //         zipcode: document.getElementById('zipInput').value,
    //         description: document.getElementById('desInput').value}

    //     fetch('http://localhost:3005/user_items', {
    //         method: 'POST',
    //         headers: {headers, contJson},
    //         body: JSON.stringify(data),
    //     }).then(result => this.setState({ user_items: [...this.state.user_items, result.data()]})
    //      .catch(error => console.log('Error', error))
    //     )
      
    //     }*/




