import React, { Component } from "react";
import Explore from "./presenter";
import PropTypes from "prop-types";

class Container extends Component {
    //initial state
    state = {
        loading : true
    }

    static propTypes = {
        getExplore: PropTypes.func.isRequired,
        userList: PropTypes.array
    };

    componentDidMount() {
        const { getExplore } = this.props;
        if (!this.props.userList){
            getExplore();
        } else {
            this.setState ({
                loading: false
            }); //이게 없으면 왔다갓다 할때마다 로딩을 계속한다.
        }
    }

    componentWillReceiveProps = nextProps => {
        if (nextProps.userList) {
            this.setState({
                loading: false
            });
        }

    };

    render () {
        const { userList } = this.props;
        return <Explore {...this.state} userList={userList}/>;
    }
}

export default Container;