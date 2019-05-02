import React from 'react'

class Registration extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [],
            //user_id | username| email| password| zipcode 
          
        }
    }


//user_id | username| email| password| zipcode 
// componentDidMount(){
//     fetch('/users')
//         .then(res => res.json())
//         .then(users => this.setState({users}, () => console.log(users, 'User items showing to add new Posts?'))
// )}

// componentDidUpdate = (prevProps) => {
//     if(this.props.users !== this.props.users)
//         this.setState({ ...this.props.users})
// }

handleChange = (users) => {
    users.preventDefault(); //prevents from page reloading
    this.setState({ users: [...users.target.value]})
    console.log('was this added now??')
}

handleSubmit(event) {
    event.preventDefault();
    alert('A post was submitted: ' + this.state.value);
}

//Add new user to users table  - username| email| password| zipcode 
addNewUser = () => {
    let data = {
        username: document.getElementById('usernameInput').value,
        email: document.getElementById('emailInput').value,
        password: document.getElementById('passInput').value,
        zipcode: document.getElementById('zipInput').value
    }
    fetch('/users', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(newUser => this.setState({ users: [...this.state.users, newUser]})) //Adding user to db
}

    render(){
        return (
    <div>
        <form className="mt-3">
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="card bg-light">
                    <div className="card-body">
                        <h3 className="font-weight-light mb-3">Register</h3>
                        <div className="form-row" onSubmit={this.handleSubmit}>
                        <section className="col-sm-12 form-group">
                            <label
                            className="form-control-label sr-only"
                            htmlFor="userName"
                            >
                                User Name
                                </label>
                            <input
                            className="form-control"
                            type="text"
                            id="usernameInput"
                            placeholder="Pick a username"
                            name="username"
                            required
                            value={this.state.username}
                            />
                        </section>
                        </div>
                        <section className="form-group">
                        <label
                            className="form-control-label sr-only"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            className="form-control"
                            type="email"
                            id="emailInput"
                            placeholder="Email Address"
                            required
                            name="email"
                            value={this.state.email}
                        />
                        </section>
                        <div className="form-row">
                        <section className="col-sm-6 form-group">
                            <input
                            className="form-control"
                            type="passWord"
                            id="passInput"
                            name="password"
                            placeholder="choose a Password"
                            value={this.state.password}
                            />
                        </section>
                        <section className="col-sm-6 form-group">
                            <input
                            className="form-control"
                            type="zipcode"
                            required
                            name="zipcode"
                            id="zipInput"
                            placeholder="Enter Zipcode"
                            value={this.state.zipcode}
                            />
                        </section>
                        </div>
                        <div className="form-group text-right mb-0">
                        <button className="btn btn-success" type="submit" 
                        onClick={this.addNewUser} id="newUserReg">
                            Register
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </form>
    </div>
        )
    }
}

export default Registration;