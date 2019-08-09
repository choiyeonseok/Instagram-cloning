import React, { Component } from "react";
import LoginForm from "./presenter";

class Container extends Component {
    state = {
        username: "",
        password: ""
    };

    render() {
        const { username, password } = this.state;
        return <LoginForm 
            handleInputChange={this._handleInputChange}
            _handleSubmit={this._handleSubmit} 
            usernameValue={username} 
            passwordValue={password} />;
    }

    _handleInputChange = event => {
        const { target : { value, name } } = event;
        this.setState({
            [name]: value
        });
        console.log(this.state);
    };

    _handleSubmit = event => {
        event.preventDefault(); // 디폴트 작업을 하지말라
        //redux action will be here!
    }
}



export default Container;
