import React from "react";
import "../../shared/formStyles.scss";
import PropTypes from "prop-types";
import FacebookLogin from "react-facebook-login";


const LoginForm = (props, context) => (

    <div className="form-component">
        <h1 className="title">Instagram</h1>
        <form className="form" onSubmit={props.handleSubmit}>
            <input 
                type="text" 
                placeholder={context.t("Username")} 
                className="text-input" 
                value={props.usernameValue}
                onChange={props.handleInputChange}
                name="username"
            />
            <input
                type="password"
                placeholder={context.t("Password")}
                className="text-input"
                value={props.passwordValue}
                onChange={props.handleInputChange}
                name="password"
            />
            <input 
                type="submit" 
                value={context.t("Log in")} 
                className="button" 
            />
        </form>
        <span className="divider">or</span>
        
        <FacebookLogin
            appId="1718196768212364"
            autoLoad={false}
            fields="name,email,picture"
            callback={props.handleFacebookLogin}
            className="facebook-link"
            icon="fa-facebook-official"
            textButton={context.t("Log in with Facebook")}
        />
        <span className="forgot-link">{context.t("Forgot password?")}</span>
    </div>
);

LoginForm.propTypes = {
    usernameValue: PropTypes.string.isRequired,
    passwordValue: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleFacebookLogin: PropTypes.func.isRequired,
};

LoginForm.contextTypes = {
    t: PropTypes.func.isRequired
};

export default LoginForm;