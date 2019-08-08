import React from "react";
import Ionicon from "react-ionicons";
import "./styles.scss";

export const LoginForm = props => (
    <div  className="form-component">
        <form className="form">
            <input className="text-input" type="text" placeholder="Username" />
            <input className="text-input" type="password" placeholder="Password" />
            <input className="button" type="submit" value="Log in" />
        </form>
        <span className="divider">or</span>
        <span className="facebook-link">
            <Ionicon icon="logo-facebook" fontSize="20px" color="#385185" /> Log in
            with Facebook
    </span>
        <span className="forgot-link">Forgot password?</span>
    </div>
);

export const SignupForm = props => (
    <div className="form-component">
        <h3>Sign up to see photos and videos from your friends.</h3>
        <button className="button">
            <Ionicon icon="logo-facebook" fontSize="20px" color="#fafafa" /> Log in
            with Facebook
    </button>
        <span className="divider">or</span>
        <form className="form">
            <input className="text-input" type="email" placeholder="Email" />
            <input className="text-input" type="text" placeholder="Full Name" />
            <input className="text-input" type="username" placeholder="Username" />
            <input className="text-input" type="password" placeholder="Password" />
            <input className="button" type="submit" value="Sign up" />
        </form>
        <p>
            By signing up, you agree to our <span>Terms & Privacy Policy</span>.
    </p>
    </div>
);