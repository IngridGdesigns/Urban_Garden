import React from 'react';
import { FaRegLemon } from 'react-icons/fa';
import { FaLemon } from 'react-icons/fa';

class AddPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          offers: [],
          user_items: [],
          formDisplay: false,
        };
}

    toggleForm = () => {
        this.setState({
        formDisplay: !this.state.formDisplay
        });
    }


    handleChange = (e) => {
        e.preventDefault(); 
        this.setState({ user_items: [...e.target.value]})
    }

    handleSubmit= (e) => {
        e.preventDefault();
        
        // let inputItemName = document.getElementById('itemInput')
        // console.log(inputItemName.value)
            
        this.props.addPost(...this.state.user_items)
        
      


        // this.setState({user_items: []})
        
        // alert('A post was submitted: ' + this.state.value);
        
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
        <div className='container'>
         
         <h3 className='h1-responsive text-center'>Welcome to the dashboard!</h3>
                

               
                <p className='text-center dark-grey-text w-responsive mx-auto mb-5'>
                Hi, you could add items to barter or browse the growstuff item of the day!</p>
  
                <div className='card textcenter mt-3 container'>
                    <div className='card-header bg-success text-white container-fluid'>
                        <button onClick={this.toggleForm} className="btn" 
                                src={{color : 'white'}}><FaLemon/></button>
           
                            {this.state.formDisplay ? 'hide' : 'show form'}
                    </div>
                
                {this.state.formDisplay && (
                        <div className='card-body'>
                        {/* id='addItem'  */}
                        <form >
                            <div className='form-group form-row'>
                                <label className='col-md-2 col-form-label text-md-right'
                                    htmlFor='itemName'
                                    readOnly>
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
                                        onClick={this.handleChange}/>
                                    </div>
                                        Item Name
                                    <div className='col-md-4'>
                                        <input type='text'
                                            className='form-control'
                                            name='item_name'
                                            id='itemInput'
                                            placeholder='Item Name'
                                            value={this.state.item_name}
                                            onClick={this.handleChange}/>
                                    <h1>{this.state.user_items.item_name}</h1>
                                </div>
                            </div>
             
                            <div className='form-group form-row'>
                                <label
                                    className='col-md-2 col-form-label text-md-right'
                                    htmlFor='zipcode'>
                                    Zipcode
                                </label>
                        <div className='col-md-4'>
                            <input
                                type='text'
                                className='form-control'
                                name='zipcode'
                                id='zipInput'
                                value={this.state.zipcode}
                                onClick={this.handleChange}/>
                        </div>

                        <label
                            className='col-md-2 col-form-label text-md-right'
                            //htmlFor='aptTime'>
                            htmlFor='imgUpload'>
                            
                        </label>
                     <div className='col-md-4'>
                     <FaRegLemon/> Image upload coming soon!
                     
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
                 
                 </div>)}
             </div>
        </div>

        )
    }
}

export default AddPosts;