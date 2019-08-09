import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import Loading from "../Loading";
import FeedPhoto from "../FeedPhoto";

const Feed = props => {
    if (props.loading) {
        return <LoadingFeed />
    }else if (props.feed) {
        return <RenderFeed {...props} />
    }
};

const LoadingFeed = props => (
    <div className="feed">
        <Loading />
    </div>
);

const RenderFeed = props => (
    <div className="feed">
        {props.feed.map(photo => <FeedPhoto {...photo} key={photo.id}/>)}
    </div>
)

Feed.PropTypes = {
    loading: PropTypes.bool.isRequired
}

export default Feed;