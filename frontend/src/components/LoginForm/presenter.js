import React from "react";
import Ionicon from "react-ionicons";
import PropTypes from "prop-types";
import "../../shared/formStyles.scss";
import FacebookLogin from "react-facebook-login";

const LoginForm = (props, context) => (
    <div className="form-component" onSubmit={props.handleSubmit}>
        <form className="form">
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
        <span className="divider">{context.t("or")}</span>
        <FacebookLogin
            appId="1718196768212364"
            autoLoad={false}
            fields="name,email,picture"
            callback={props.handleFacebookLogin}
            cssClass="facebook-link"
            icon="fa-facebook-official"
            textButton={context.t("Log in with Facebook")}
        />
        
        <span className="forgot-link">
            {context.t("Forgot password?")}
        </span>
    </div>
);


LoginForm.contextTypes = {
    t: PropTypes.func.isRequired
};

LoginForm.propTypes = {
    usernameValue: PropTypes.string.isRequired,
    passwordValue: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleFacebookLogin: PropTypes.func.isRequired
    
}

export default LoginForm;