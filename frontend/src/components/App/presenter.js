import React from 'react';
import PropTypes from "prop-types";
import './styles.scss';
import { Route, Switch } from "react-router-dom";
import Footer from "../Footer";
import Auth from "../Auth/";
import Navigation from "../Navigation";
import Feed from "../Feed";



const App = props => [
    // Nav, 
    props.isLoggedIn ? <Navigation key={1}/> : null,
    props.isLoggedIn ? <PrivateRoutes key={2} /> : <PublicRoutes key={2} />,
    <Footer key={3} />
]

App.PropTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
}

const PrivateRoutes = props => (
    <Switch>
        <Route exact path="/" component={Feed} />
        <Route exact path="/explore" render={() => "explore"} />
    </Switch>
)

const PublicRoutes = props => (
    <Switch>
        <Route exact path="/" component={Auth} />
        <Route exact path="/forgot" render={() => "password"} />
    </Switch>
)

export default App;
