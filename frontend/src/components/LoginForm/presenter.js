import React from "react";
import Ionicon from "react-ionicons";
import PropTypes from "prop-types";
import "../../shared/formStyles.scss";

const LoginForm = (props, context) => (
    <div className="form-component">
        <form className="form">
            <input
                type="text"
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
                value={context.t("Log in")}
                className="button"
            />
        </form>
        <span className="divider">{context.t("or")}</span>
        <span className="facebook-link">
            <Ionicon icon="logo-facebook" fontSize="20px" color="#385185" />{" "}
            {context.t("Log in with Facebook")}
        </span>
        <span className="forgot-link">
            {context.t("Forgot password?")}
        </span>
    </div>
);


LoginForm.contextTypes = {
    t: PropTypes.func.isRequired
};


export default LoginForm;