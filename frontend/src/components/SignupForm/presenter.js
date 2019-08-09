import React from "react";
import Ionicon from "react-ionicons";
import PropTypes from "prop-types";
import "../../shared/formStyles.scss";


const SignupForm = (props, context) => (
    <div className="componenet">
        <h3 className="signup-header">
            {context.t("Sign up to see photos and videos from your friends.")}
        </h3>
        <button className="button">
            <Ionicon icon="logo-facebook" fontSize="20px" color="white" />
            {context.t("Log in with Facebook")}
        </button>
        <span className="divider">or</span>
        <form className="form">
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

export default SignupForm;