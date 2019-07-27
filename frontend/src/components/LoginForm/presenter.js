import React from "react";
import "../../shared/formStyles.scss";
import Ionicon from "react-ionicons";
import PropTypes from "prop-types";



const LoginForm = (props, context) => (

    <div className="form-component">
        <h1 className="title">Instagram</h1>
        <form className="form">
            <input type="text" placeholder={context.t("Username")} className="text-input" />
            <input
                type="password"
                placeholder={context.t("Password")}
                className="text-input"
            />
            <input type="submit" value={context.t("Log in")} className="button" />
        </form>

        <span className="divider">or</span>
        <span className="facebook-link">
            <Ionicon icon="logo-facebook" fontSize="20px" color="#385185" /> {context.t("Log in with Facebook")}
        </span>
        <span className="forgot-link">{context.t("Forgot password?")}</span>
    </div>
);

LoginForm.contextTypes = {
    t: PropTypes.func.isRequired
}

export default LoginForm;