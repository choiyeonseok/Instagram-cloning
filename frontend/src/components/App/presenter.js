import React from 'react';
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import './styles.scss';
import Footer from '../Footer';
import Auth from '../Auth';
import Navigation from "../Navigation";
import Feed from "../Feed";
import Explore from "../Explore";
import Search from "../Search";

const App = props => [
    props.isLoggedIn ? <Navigation key={1} /> : null,
    props.isLoggedIn ? <PrivateRoutes key={2} /> : <PublicRoutes key={2} />,
    <Footer key={3} />
];

App.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
};

const PrivateRoutes = props => (
    <Switch>
        <Route key="1" exact path="/" component={Feed} />
        <Route key="2" exact path="/explore" component={Explore} />
        <Route key="3" exact path="/search/:searchTerm" component={Search} />
    </Switch>
)


const PublicRoutes = props => (
    <Switch>
        <Route exact path="/" component={Auth} />
        <Route exact path="/forgot" render={() => "password"} />
    </Switch>
)

export default App;
