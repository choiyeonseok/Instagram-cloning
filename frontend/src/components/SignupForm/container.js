import React, { Component } from "react";
import SignupForm from "./presenter";
import PropTypes from "prop-types";


class Container extends Component {
    state = {
        email: "",
        fullName: "",
        username: "",
        password: "",
    };

    static propTypes = {
        facebookLogin: PropTypes.func.isRequired,
    };

    render() {
        const { email, fullName, username, password } = this.state;
        return (
            <SignupForm
                handleInputChange={this._handleInputChange}
                handleSubmit={this._handleSubmit}
                handleFacebookLogin={this._handleFacebookLogin}
                emailValue={email}
                fullNameValue={fullName}
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
        event.preventDefault();
    };
    
    _handleFacebookLogin = response => {
        const { facebookLogin } = this.props;
        facebookLogin(response.accessToken);
    };
}


export default Container;