import React from 'react'

class Registration extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            email: '',
            passOne: '',
            passTwo: ''
        }
    }

    handleChange(e) {
        const itemName = e.target.name;
        const itemValue = e.target.value;

        this.setState({[itemName]: itemValue})
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
                        <div className="form-row">
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
                            id="userName"
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
                            id="email"
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
                            type="password"
                            name="passOne"
                            placeholder="choose a Password"
                            />
                        </section>
                        <section className="col-sm-6 form-group">
                            <input
                            className="form-control"
                            type="password"
                            required
                            name="passTwo"
                            placeholder="Repeat Password"
                            />
                        </section>
                        </div>
                        <div className="form-group text-right mb-0">
                        <button className="btn btn-primary" type="submit">
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