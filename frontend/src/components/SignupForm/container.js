import React, { Component } from "react";
import SignupForm from "./presenter";


class Container extends Component {
    state = {
        email: "",
        username: "",
        fullName: "",
        password: ""
    };

    render () {
        const { email, username, fullName, password } = this.state;
        return (
            <SignupForm 
                emailValue={email} 
                usernameValue={username} 
                fullNameValue={fullName} 
                passwordValue={password} 
            />
        );
    };

    _handleInputChange = event => {
        const { target : { value, name } } = event;
        this.setState({
            [name] : value
        });
        console.log(this.state);
    };

    _handleSubmit = event => {
        event.preventDefault();
    };
}


export default Container;
