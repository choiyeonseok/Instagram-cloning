import React, { Component } from "react";
import SignupForm from "./presenter";
import PropTypes from "prop-types";


class Container extends Component {
    state = {
        email: "",
        name: "",
        username: "",
        password: "",
    };

    static propTypes = {
        facebookLogin: PropTypes.func.isRequired,
        createAccount: PropTypes.func.isRequired,
    };

    render() {
        const { email, name, username, password } = this.state;
        return (
            <SignupForm
                handleInputChange={this._handleInputChange}
                handleSubmit={this._handleSubmit}
                handleFacebookLogin={this._handleFacebookLogin}
                emailValue={email}
                nameValue={name}
                usernameValue={username}
                passwordValue={password} 
            />

        );
    }

    _handleInputChange = event => {
        const { target: { value, name } } = event;
        this.setState({
            [name]: value
        });
        console.log(this.state);
    };

    _handleSubmit = event => {
        const { email, name, username, password } = this.state;
        const { createAccount } = this.props;
        event.preventDefault();
        createAccount(username, password, email, name);
    };
    
    _handleFacebookLogin = response => {
        const { facebookLogin } = this.props;
        facebookLogin(response.accessToken);
    };
}


export default Container;