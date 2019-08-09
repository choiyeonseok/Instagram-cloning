import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import Loading from "../Loading";
import Ionicon from "react-ionicons";

const UserList = props => (
    <div className="container">
        <div className="overlay" />
        <div className="box">
            <header className="header">
                <h4 className="title">{props.title}</h4>
                <span className="close" onClick={props.closeLikes}>
                    <Ionicon icon="md-close" fontSize="20px" color="black" />
                </span>            
            </header>
            <div className="content">{props.loading ? <Loading /> : null}</div>
        </div>
    </div>
);

UserList.propTypes = {
    title: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    userList: PropTypes.array,
    closeLikes: PropTypes.func.isRequired
};

export default UserList;