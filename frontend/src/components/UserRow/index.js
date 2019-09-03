import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "../../redux/modules/user";

const mapDispatchToProps = (dispatch, ownProps) => {
    const { user } = ownProps;
    console.log(user);
    return {
        handleClick: () => {
            if(user.following){
                dispatch(userActions.unfollowUser(user.id));
                console.log(user.id);
            }else{
                dispatch(userActions.followUser(user.id));
                console.log(user.id);
            }
        }
    }
}
export default connect(null, mapDispatchToProps)(Container);