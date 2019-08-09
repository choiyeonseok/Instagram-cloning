import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as PhotoActions } from "../../redux/modules/photos";


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        submitComment : (message) => {
            dispatch(PhotoActions.commentPhoto(ownProps.photoId, message))
        }
    };
};

export default connect(null, mapDispatchToProps)(Container);