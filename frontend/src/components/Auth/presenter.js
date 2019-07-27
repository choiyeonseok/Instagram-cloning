import React from "react";
import "./styles.scss";
import LoginForm from "../LoginForm";
import SignupForm from "../SignupForm";
import PropTypes from "prop-types";

const Auth = (props, context) => (
    <main className="auth">
        <div className="column">
            <img src={require("../../images/phone.PNG")} alt="Checkout our app. Is cool" />
        </div>
        <div className="column">
            <div className="white-box form-box">
                {props.action === "login" && <LoginForm/>}
                {props.action === "signup" && <SignupForm />}
            </div>
            <div className="white-box">
                {props.action === "login" && (<p className="text">
                    {context.t("Don't have an account?")}{" "}
                    <span
                        className="change-link"
                        onClick={props.changeAction}
                    >
                        {context.t("Sign up")}
                    </span>
                </p>)}
                {props.action === "signup" && (<p className="text">
                    {context.t("Have an account?")}{" "}
                    <span
                        className="change-link"
                        onClick={props.changeAction}
                    >
                        {context.t("Log in")}
                </span>
                </p>)}
    
            </div>
            <div className="app-box">
                <span>{context.t("Get the app")}</span>
                <div className="appstores">
                    <img
                        src={require("../../images/ios.png")}
                        alt="Download it on the Apple Appstore"
                    />
                    <img
                        src={require("../../images/android.png")}
                        alt="Download it on the Apple Appstore"
                    />
                </div>
            </div>
        </div>
    </main>
);

Auth.contextTypes = {
    t: PropTypes.func.isRequired
}

export default Auth;