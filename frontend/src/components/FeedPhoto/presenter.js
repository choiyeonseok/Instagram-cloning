import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import PhotoActions from "../PhotoActions"
import PhotoComments from "../PhotoComments";
import TimeStamp from "../TimeStamp";
import CommentBox from "../CommentBox";
import UserList from "../UserList";

const FeedPhoto = (props, context) => {
    return (
        <div className="feed-photo">
            <header className="header">
                <img
                    src={props.creator.profile_image || require("../../images/noPhoto.png")}
                    alt={props.creator.username}
                    className="image"
                />
                <div className="header-column">
                    <span className="creator">{props.creator.username}</span>
                    <span className="location">{props.location}</span>
                </div>
            </header>
            <img src={props.file} alt={props.caption} />
            <div className="meta">
                <PhotoActions
                    number={props.like_count}
                    isLiked={props.is_liked}
                    photoId={props.id}
                    openLikes={props.openLikes}
                />
                <PhotoComments
                    caption={props.caption}
                    creator={props.creator.username}
                    comments={props.comments}
                />
                <TimeStamp time={props.natural_time}/>
                <CommentBox photoId={props.id}/>
            </div>
            {props.seeingLikes && (
                <UserList title={context.t("Likes")} closeLikes={props.closeLikes} />
            )}
        </div>
    );
}

FeedPhoto.contextTypes = {
    t: PropTypes.func.isRequired
};

FeedPhoto.propTypes = {
    id: PropTypes.number.isRequired,
    creator: PropTypes.shape({
        profile_image: PropTypes.string,
        username: PropTypes.string.isRequired
    }).isRequired,
    location: PropTypes.string.isRequired,
    file: PropTypes.string.isRequired,
    like_count: PropTypes.number.isRequired,
    caption: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            creator: PropTypes.shape({
                profile_image: PropTypes.string,
                username: PropTypes.string.isRequired
            }).isRequired
        })
    ).isRequired,
    natural_time: PropTypes.string.isRequired,
    is_liked: PropTypes.bool.isRequired,
    seeingLikes: PropTypes.bool.isRequired,
    openLikes: PropTypes.func.isRequired,
    closeLikes: PropTypes.func.isRequired,
    likes: PropTypes.arrayOf(
        PropTypes.shape({
            profile_image: PropTypes.string,
            username: PropTypes.string.isRequired,
            name: PropTypes.string
        }).isRequired
    )
};



export default FeedPhoto;
