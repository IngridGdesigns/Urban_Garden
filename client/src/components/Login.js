import React from 'react'


class Login extends React.Component {
    render() {
        return(
            <div>
                    <h2>Welcom to the Login page</h2>
                    <h2>Welcome to the Login page</h2>
            <form >
                <div className="form-group row">
                    <label for="exampleInputEmail1">Email address</label>
                <div className='col-sm-6'>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                </div>
                <div className="form-group row">
                    <label for="exampleInputPassword1">Password</label>
                <div className='col-sm-6'>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                    </div>
                </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
        )
    }
}

export default Login;