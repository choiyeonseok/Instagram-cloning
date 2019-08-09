import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import Loading from "../Loading";

const Feed = props => {
    if (props.loading) {
        return <LoadingFeed />
    }
};

const LoadingFeed = props => (
    <div className="feed">
        <Loading />
    </div>
);

Feed.PropTypes = {
    loading: PropTypes.bool.isRequired
}

export default Feed;