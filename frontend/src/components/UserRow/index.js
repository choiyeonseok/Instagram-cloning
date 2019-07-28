import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "../../redux/modules/user";


const mapDispatchToProps = (dispatch, ownProps) => {
    const { user } = ownProps;
    return {
        handleClick: () => {
            if(user.following){
                dispatch(userActions.unfollowUser())
            }
        }
    }
}

export default connect(null, mapDispatchToProps)(Container);