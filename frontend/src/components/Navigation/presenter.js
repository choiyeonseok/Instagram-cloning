import React from "react";
import PropTypes from "prop-types";
import Ionicon from "react-ionicons";
import { Link } from "react-router-dom";
import './styles.scss';


const Navigation = (props, context) => (
    <div className="navigation">
        <div className="inner">
            <div className="column">
                <Link to="/">
                    <img
                        src={require("../../images/logo.PNG")}
                        className="logo"
                        alt={context.t("Logo")}
                    />
                </Link>
            </div>
            <div className="column">
                <form onSubmit={props.onSubmit}>
                    <input
                        type="text"
                        placeholder={context.t("Search")}
                        className="search-input"
                        value={props.value}
                        onChange={props.onInputChange}
                    />
                </form>
            </div>
            <div className="column">
                <div className="nav-icon">
                    <Link to="/explore">
                        <Ionicon icon="ios-compass-outline" fontSize="28px" color="black" />
                    </Link>
                </div>
                <div className="nav-icon">
                    <Ionicon icon="ios-heart-outline" fontSize="28px" color="black" />
                </div>
                <div className="nav-icon">
                    <Link to="/profile">
                        <Ionicon icon="ios-person-outline" fontSize="32px" color="black" />
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

Navigation.contextTypes = {
    t: PropTypes.func.isRequired
}

Navigation.propTypes ={
    onSubmit: PropTypes.func.isRequired,
    onInputChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
}

export default Navigation;