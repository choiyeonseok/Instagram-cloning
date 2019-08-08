import { connect } from "react-redux";
import Container from "./container";


const mapStateToProps = (state, ownProps) => {
    const { user } = state;
    return {
        isLoggedIn: user.isLoggedIn // 새로운 프롭 생성
    };
};

export default connect(mapStateToProps)(Container);


