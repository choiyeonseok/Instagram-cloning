import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "../../redux/modules/user";


const mapStateToProps = (state, ownProps) => {
    const { user: { userList, imageList } } = state;
    return {
        userList,
        imageList,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { match: { params: { searchTerm } } } = ownProps;
    return {
        searchByTerm: () => {
            console.log(searchTerm);
            dispatch(userActions.searchByTerm(searchTerm));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
