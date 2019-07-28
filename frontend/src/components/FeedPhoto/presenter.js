import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import PhotoActions from "../PhotoActions"
import PhotoComments from "../PhotoComments";
import TimeStamp from "../TimeStamp";
import CommentBox from "../CommentBox";

const FeedPhoto = (props, context) => {
    return (
        <div className="feed-photo">
            <header>
                <img
                    src={props.creator.profile_image || require("../../images/noPhoto.jpg")}
                    alt={props.creator.username}
                />
                <div className="photo-info">
                    <span>{props.creator.username}</span>
                    <span>{props.location}</span>
                </div>
            </header>
            <img src={props.file} alt={props.caption} />
            <div className="photo-info">
                <PhotoActions
                    number={props.like_count}
                    isLiked={props.is_liked}
                    photoId={props.id}
                />
                <PhotoComments
                    caption={props.caption}
                    creator={props.creator.username}
                    comments={props.comments}
                />
                <TimeStamp time={props.natural_time}/>
                <CommentBox photoId={props.id}/>
            </div>
        </div>
    );
}

FeedPhoto.propTypes = {
    creator: PropTypes.shape({
        profile_image: PropTypes.string,
        username: PropTypes.string.isRequired,
    }).isRequired,
    location: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    file: PropTypes.string.isRequired,
    like_count: PropTypes.number.isRequired,
    comments: PropTypes.arrayOf({
        message: PropTypes.string.isRequired,
        creator: PropTypes.shape({
            profile_image: PropTypes.string,
            username: PropTypes.string.isRequired,
        }).isRequired
    }).isRequired,
    natural_time: PropTypes.string.isRequired,
    is_liked: PropTypes.bool.isRequired
};

export default FeedPhoto;
