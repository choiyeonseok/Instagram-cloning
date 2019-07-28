//import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";


const TimeStamp = (props, context) => props.time;

TimeStamp.prototype = {
    time : PropTypes.string.isRequired,
}

TimeStamp.contextTypes = {
    t: PropTypes.func.isRequired
};

export default TimeStamp;