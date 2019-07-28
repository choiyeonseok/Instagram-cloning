import React from "react";
import PropTypes from "prop-types";
import Ionicon from "react-ionicons";
import "./styles.scss";


const PhotoActions = (props, context) => (
    <div className="actions">
        <div className="icons">
            <span className="icons" onClick={props.handleHeartClick}>
                {props.isLiked ? (
                    <Ionicon icon="ios-heart" fontSize="28px" color="#EB4B59" />
                ) : (
                        <Ionicon icon="ios-heart-outline" fontSize="28px" color="black" />
                    )}
            </span>
            <span className="icons">
                <Ionicon icon="ios-text-outline" fontSize="28px" color="black" />
            </span>
        </div>
        <span className="likes" onClick={props.openLikes}>
            {props.number}{" "}
            {props.number === 1 ? context.t("like") : context.t("likes")}
        </span>
    </div>
);


PhotoActions.propTypes = {
    number: PropTypes.number.isRequired,
    isLiked: PropTypes.bool.isRequired,
    photoId: PropTypes.number.isRequired,
    handleHeartClick: PropTypes.func.isRequired,
    openLikes: PropTypes.func.isRequired
};

PhotoActions.contextTypes = {
    t: PropTypes.func.isRequired
};

export default PhotoActions;