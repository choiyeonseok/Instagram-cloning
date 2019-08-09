import React from "react";
import PropTypes from "prop-types";
import "../../shared/formStyles.scss";
import FacebookLogin from "react-facebook-login";


const SignupForm = (props, context) => (
    <div className="form-component" onSubmit={props.handleSubmit}>
        <h3 className="signup-header">
            {context.t("Sign up to see photos and videos from your friends.")}
        </h3>
        <FacebookLogin
            appId="1718196768212364"
            autoLoad={false}
            fields="name,email,picture"
            callback={props.handleFacebookLogin}
            cssClass="button"
            icon="fa-facebook-official"
            textButton={context.t("Log in with Facebook")}
        />
        <span className="divider">or</span>
        <form className="form" >
            <input
                type="email"
                placeholder={context.t("Email")}
                className="text-input"
            />
            <input
                type="text"
                placeholder={context.t("Full Name")}
                className="text-input"
            />
            <input
                type="username"
                placeholder={context.t("Username")}
                className="text-input"
            />
            <input
                type="password"
                placeholder={context.t("Password")}
                className="text-input"
            />
            <input
                type="submit"
                value={context.t("Sign up")}
                className="button"
            />
        </form>
        <p className="terms">
            {context.t("By signing up, you agree to our ")}
            <span>{context.t("Terms & Privacy Policy")}</span>.
        </p>
    </div>
);

SignupForm.contextTypes = {
    t: PropTypes.func.isRequired
};

SignupForm.propTypes = {
    emailValue: PropTypes.string.isRequired,
    fullNameValue: PropTypes.string.isRequired,
    usernameValue: PropTypes.string.isRequired,
    passwordValue: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleFacebookLogin: PropTypes.func.isRequired
}

export default SignupForm;