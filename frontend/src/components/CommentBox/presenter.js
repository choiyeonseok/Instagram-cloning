import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import Textarea from "react-textarea-autosize";

const CommentBox = (props, context) => (
    <form className="comment-box" >
        <Textarea
         className="input"
         placeholder={context.t("Add a comment...")} 
         value={props.comment}
         onChange={props.handleInputChange}
         onKeyPress={props.handleKeyPress}
        />
    </form>
);

CommentBox.contextTypes = {
    t: PropTypes.func.isRequired
};

CommentBox.propTypes = {
    handleKeyPress: PropTypes.func.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    comment: PropTypes.string.isRequired,
    photoId: PropTypes.number.isRequired,
};

export default CommentBox;