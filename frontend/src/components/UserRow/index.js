import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "../../redux/modules/user";

const mapDispatchToProps = (dispatch, ownProps) => {
    const { user } = ownProps;
    return {
        handleclick: () => {
            if(user.following){
                dispatch(userActions.unfollowUser())
            }else{
                dispatch(userActions.followUser())
            }
        }
    }
}
export default connect(null, mapDispatchToProps)(Container);