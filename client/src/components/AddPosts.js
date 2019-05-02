import React from 'react';
import { FaRegLemon } from 'react-icons/fa';
import { FaLemon } from 'react-icons/fa';
// import axios from 'axios';

class AddPosts extends React.Component {

    constructor(props) {
        super(props);

        this.state={
            user_items: [],
            // item_name: " ",
            // zipcode: " ",
            // description: " ",
            
        }
    }
    

    //grabbing user items table
    componentDidMount() { 
        // console.log(this.props.auth.accessToken);
        const headers = { 'Authorization': `Bearer ${this.props.auth.accessToken}`}
        // const url = '/user_items'; console.log(url)
        // return axios.get(url, { headers})
        //     .then(response => this.setState({ user_items: response.data}))
        fetch('http://localhost:3005/user_items', {
            method: 'GET',
            // body: JSON.stringify(user_items),
            headers: headers,// }, body: JSON.stringify(user_items, )
        })
        .then(res => res.json())
        .then(user_items => this.setState({user_items}, console.log('User items showing??', user_items)))
        .catch(error => console.error('Error:', error)); 
        //axios stuff
        // const { getAccessToken } = this.props.auth;
    }

  
    // handleChange = (user_items) => {
    //     // user_items.preventDefault(); //prevents from page reloading
    //     this.setState({ user_items: [...user_items.target.value]})
    //     console.log('was this added now??')
    // }

    // // handleSubmit(event) {
    // //     event.preventDefault();
    // //     alert('A post was submitted: ' + this.state.value);
    // // }

    // //Add new post to user_item table
    // addPost = () => {
    //     let data = {
    //     item_name: document.getElementById('itemInput').value,
    //     zipcode: document.getElementById('zipInput').value,
    //     description: document.getElementById('desInput').value}
    //     fetch('/user_items', {
    //         method: 'POST',
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(data),
    //     })
    //     .then(res => res.json())
    //     .then(newPost => this.setState({ user_items: [...this.state.user_items, newPost]}))
    // }
    

    render() {
        return(
        <div>
            <h2>Is this working??</h2>
        {/* </div>
         <div> */}
           
         <hr/>
         <h2>AddPosts to Barter stuff</h2>
         <p>so stylish</p>

         <div className='card textcenter mt-3 '>
         <div className="apt-addheading card-header bg-success text-white">
             <FaLemon/> Add new item to barter
         </div>

                 <div className="card-body">
                 {/* id="addItem"  */}
                 <form 
                 // onSubmit={this.handleSubmit}
                 >
                     <div className="form-group form-row">
                     <label
                         className="col-md-2 col-form-label text-md-right"
                         // htmlFor="itemName"
                         readOnly
                     >
                         Item Name
                     </label>
                     <div className="col-md-10">
                         <input type="text"
                             className="form-control"
                             name="item_name"
                             id="itemInput"
                             placeholder="Item Name"
                             value={this.state.user_items.item_name}
                             onClick={this.handleChange}
                         />
                     </div>
                     </div>
             
                     <div className="form-group form-row">
                     <label
                         className="col-md-2 col-form-label text-md-right"
                         htmlFor="zipcode"
                     >
                         Zipcode
                     </label>
                     <div className="col-md-4">
                         <input
                         type="zipcode"
                         className="form-control"
                         name="zipcode"
                         id="zipInput"
                         value={this.state.user_items.zipcode}
                         onClick={this.handleChange}
                         />
                     </div>

                     <label
                         className="col-md-2 col-form-label text-md-right"
                         htmlFor="aptTime"
                     >
                         Time
                     </label>
                     <div className="col-md-4">
                     <FaRegLemon/> 
                         {/* <input
                         type="time"
                         className="form-control"
                         name="createdAt"
                         id="createdOn"
                         //   value={this.state.createdOn}
                         //   onChange={this.handleChange}
                         /> */}
                     </div>
                     </div>

                     <div className="form-group form-row">
                     <label className="col-md-2 text-md-right" htmlFor="description">
                     Description
                     </label>
                     <div className="col-md-10">
                         <textarea
                         className="form-control"
                         rows="4"
                         cols="50"
                         name="description"
                         id="desInput"
                         placeholder="Tell us about the item"
                         value={this.state.user_items.description}
                         onChange={this.handleChange}
                         />
                     </div>
                     </div>

                     <div className="form-group form-row mb-0">
                     <div className="offset-md-2 col-md-10">
                     
                     </div>
                     </div>
                 </form>
                 <button className="btn btn-success d-block ml-auto"
                     id="addNewPost"
                     onClick={this.addPost}>
                         Submit and add a New item
                 </button>
                 </div>
             </div>
                     </div>

        )
    }
}

export default AddPosts







