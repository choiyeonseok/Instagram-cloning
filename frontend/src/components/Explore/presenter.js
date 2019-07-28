import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import Loading from "../Loading";
import UserRow from "../UserRow";

const Explore = props => {
    if (props.loading) {
        return <LoadingExplore />;
    } else if (props.userList) {
        return <RenderExplore {...props} />;
    }
};

const LoadingExplore = props => (
    <div className="explore">
        <Loading />
    </div>
);

const RenderExplore = props => (
    <div className="explore">
        {props.userList.map(user => (
            <UserRow big={true} user={user} key={user.id} />
        ))}
    </div>
);

Explore.propTypes = {
    loading: PropTypes.bool.isRequired,
    feed: PropTypes.array
};

export default Explore;