import React from 'react';
// import Alert from 'react-bootstrap/Alert'

class LoginForm extends React.Component {
    render() {
        return(
            
            <div>
            <div className='row'>
            {/* <div className='row justify-content-center'> */}
                {/* <h2>Login</h2>
                <h2>Welcome to your Login</h2> */}
            <form>
                <div className='form-group row col-sm-6'>
                    <label for='emailaddress'>Email address</label>
                    <input type='email' className='form-control' id='InputEmail' aria-describedby='email' placeholder='Enter email'></input>
                    <small id='email' className='form-text text-muted'>We'll never share your email with anyone else.</small>
                </div>

                <div className='form-group row col-sm-6'>
                    <label for='password'>Password</label>
                    <input type='password' className='form-control' id='InputPassword' placeholder='Password'></input>
                </div>
                    
                    <button type='submit' className='btn btn-outline-success mr-4'>
                    {/* <span class='spinner-border spinner-border-sm'></span> */}
                    {/* Loading.. */}
                    Submit</button>
                    <hr/>
                    <div className='row col-sm-6 color2'>
                    <p>New to Urban Garden?</p>
                    <a href='/register'  type='register' className='btn btn-success mr-2'>
                       Create Account
                    </a>
                    
                    
                    </div>
            </form>
            
            </div>
        </div>
        )
    }
}

export default LoginForm;