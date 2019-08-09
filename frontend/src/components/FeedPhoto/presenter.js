import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const FeedPhoto = (props, context) => {
    return (
        <div className="feed-photo">
            <header>
                <img
                    src={props.creator.profile_image || require("../../images/noPhoto.jpg")}
                    alt={props.creator.username}
                />
                <div>
                    <span>{props.creator.username}</span>
                    <span>{props.location}</span>
                </div>
            </header>
            <img src={props.file} alt={props.caption} />
            {/* <div>
                <PhotoActions number={props.like_count} />
            </div> */}
        </div>
    );
};


FeedPhoto.propTypes = {
    creator: PropTypes.shape({
        profile_image: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
    }),
    location: PropTypes.string.isRequired,
    file: PropTypes.string.isRequired,
    like_count: PropTypes.number.isRequired,
    caption: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            message: PropTypes.string.isRequired,
            creator: PropTypes.shape({
                profile_image: PropTypes.string.isRequired,
                username: PropTypes.string.isRequired
        }).isRequired,
    })
    ).isRequired,
    created_at: PropTypes.string.isRequired
};

export default FeedPhoto;

