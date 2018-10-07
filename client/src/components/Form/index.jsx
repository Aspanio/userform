import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pwd: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePwdChange = this.handlePwdChange.bind(this);
    }

    handleSubmit(e) {
        let data = {
            pwd: this.state.pwd,
            email: this.state.email
        };
        fetch('/serv', {
            method: 'POST',
            body: data
        })
            .then(res => {
                res.json();
                console.log(res);
            })
            .catch(err => console.log(err));
    }

    handleEmailChange(e) {
        this.setState({ email: e.target.value})
    }

    handlePwdChange(e) {
        this.setState({ pwd: e.target.value})
    }

    render() {
        return(
            <form action="/serv" method="post" onSubmit={this.handleSubmit}>
                <label htmlFor="email">
                    Email:
                    <input onChange={this.handleEmailChange} value={this.state.email} placeholder="type here.." type="email" name="email"/>
                </label>
                <label htmlFor="pwd">
                    Password:
                    <input onChange={this.handlePwdChange} value={this.state.pwd} placeholder="type here.." type="password" name="pwd"/>
                </label>
                <button type="submit">Register</button>
            </form>
        )
    }
}

export default Form;