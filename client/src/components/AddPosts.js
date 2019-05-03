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

        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        const headers = { 'Authorization': `Bearer ${this.props.auth.accessToken}`}
        fetch('http://localhost:3005/user_items', {
            method: 'GET',
            headers: headers, 
        })
          .then(res => res.json())
          .then(user_items => this.setState({ user_items }))
            //   result => {
            //   console.log(result.json())
            //   console.log(result)
            //   console.log('is it working')
        //   })//res.json())
        //   .then(res => this.setState({ user_items: res }));
      }


    handleChange = (user_items) => {
        user_items.preventDefault(); //prevents from page reloading
        this.setState({ user_items: [...user_items.target.value]})
        console.log('handlechange function on?? was this added now??')
    }

    // // handleSubmit(event) {
    // //     event.preventDefault();
    // //     alert('A post was submitted: ' + this.state.value);
    // // }

    // //Add new post to user_item table -- before Auth0
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
    

    addPost = () => {
        const headers = { 'Authorization': `Bearer ${this.props.auth.accessToken}`}
        
        let data = {
            item_name: document.getElementById('itemInput').value,
            zipcode: document.getElementById('zipInput').value,
            description: document.getElementById('desInput').value}

        fetch('http://localhost:3005/user_items', {
            method: 'POST',
            headers: {'Content-Type': 'application/json', headers},
            body: JSON.stringify(data),
        }).then(result => this.setState({ user_items: [...this.state.user_items, result.data()]})
        // .catch(error => console.log('Error', error))
        )
      
        }

    render() {
        
        

        return(
            
        <div>

    <table>
        {this.state.user_items.map((items) => {
            return (
            <tr>
            <td>
            {items.username}
            </td>
            
            <td>
            {items.description}
            </td>
           <td>
            {items.zipcode}
            </td>
            </tr>)})
        }
        </table>



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
                             value={this.state.item_name}
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
                         value={this.state.zipcode}
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
                         value={this.state.description}
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

export default AddPosts;







