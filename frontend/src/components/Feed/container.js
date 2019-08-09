import React, { Component } from "react";
import Feed from "./presenter";
import PropTypes from "prop-types";

class Container extends Component {
    //initial state
    state = {
        loading : true
    }

    static propTypes = {
        getFeed: PropTypes.func.isRequired
    };

    componentDidMount() {
        const { getFeed } = this.props;
        getFeed();
    }

    render () {
        return <Feed {...this.state}/>;
    }
}

export default Container;