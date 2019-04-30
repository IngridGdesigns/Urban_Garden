import React from 'react';
import { FaPlus } from 'react-icons/fa';

class AddPosts extends React.Component {

    constructor(props) {
        super(props);

        this.state={
            user_items: [],
            item_name: " ",
            zipcode: " ",
            description: " ",
        }
    }
    //grabbing user items table
    componentDidMount = () => {
        fetch('/user_items')
            .then(res => res.json())
            .then(user_items => this.setState({user_items}, () => console.log(user_items, 'User items showing to add new Posts?'))
    )}

    componentDidUpdate = (prevProps) => {
        if(this.props.user_items !== this.props.user_items)
            this.setState({ ...this.props.user_items})
    }

    handleChange = (user_items) => {
        // e.preventDefault(); //prevents from page reloading
        this.setState({ user_items: [...user_items.target.value]})
        console.log('was this added now??')
    }

    // // handleSubmit(event) {
    // //     event.preventDefault();
    // //     this.setState({ ...this.state.user_items})
    // // }

    //Add new post to user_item table
    addPost = () => {
        let data = {
        item_name: document.getElementById('itemInput').value,
        zipcode: document.getElementById('zipInput').value,
        description: document.getElementById('desInput').value}
        fetch('/user_items', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(newPost => this.setState({ user_items: [...this.state.user_items, newPost]}))
    }
    

    render() {
      
        return(
            <div>
                {/* {this.state.user_items.map((item, index) => {
                    return(
                        <div>
                            <ul>
                            <li>{item.item_name}</li>
                            <li>{item.description}</li>
                            <li>{item.username}</li>
                            </ul>
                        </div>
                    )
                })} */}
            <FaPlus/>
           <form >
               <input type="text" 
               value={this.state.user_items.item_name} 
               id="itemInput"
               name="item_name"
               placeholder="Item name" 
               onClick={this.handleChange}
            />
               <br/>
               <input type="text" 
               value={this.state.user_items.zipcode} 
               id="zipInput" 
               name="zipcode" 
               placeholder="Zipcode" 
               onClick={this.handleChange}
            />
               <br/>
               <textarea type="text" 
                rows="4"
                cols="50"
                value={this.state.user_items.description} 
                id="desInput" 
                name="description" 
                placeholder="Description" 
                onClick={this.handleChange}
               />
               {/* <h1>{this.state.item_name} {this.state.zipcode} {this.state.description}</h1> */}
               
           </form>
           <button onClick={this.addPost} id="addNewPost">Submit</button>
            </div>
        )
    }
}

export default AddPosts;







