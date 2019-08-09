
import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";

const UserRow = (props, context) => (
    <div className="container">
        <div className="column">
            <img
                src={props.profile_image || require("../../images/noPhoto.jpg")}
                alt={props.user.username}
                className={props.big ? styles.bigAvatar : styles.avatar}
            />
            <div className="user">
                <span className="username">{props.user.username}</span>
                <span className="name">{props.user.name}</span>
            </div>
        </div>
        <span className="column">
            <button className={styles.button}>{context.t("Follow")}</button>
        </span>
    </div>
);

UserRow.contextTypes = {
    t: PropTypes.func.isRequired
};

UserRow.propTypes = {
    user: PropTypes.shape({
        profile_image: PropTypes.string,
        username: PropTypes.string.isRequired,
        name: PropTypes.string
    }).isRequired,
    big: PropTypes.bool
};

UserRow.defaultProps = {
    big: false
};

export default UserRow;