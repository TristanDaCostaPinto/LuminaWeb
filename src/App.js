import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Router, Switch, Route } from "react-router-dom";

import Login from "./components/login";
import Register from "./components/register";
import Profile from "./components/profile";
import Navigation from './addons/navbar';
import Home from './components/home';
import Appointment from './components/appointment';
import Document from './components/document';
import Settings from "./components/settings";
import Properties from './components/properties';
import PropertyDetails from './components/propertyDetails';

import { clearMessage } from "./actions/message";

import { History } from "./helpers/history";

export default function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        History.listen((location) => {
            dispatch(clearMessage()); // clear message when changing location
        });
    }, [dispatch]);

    return (
        <Router history={History}>
            <Switch>
            <Route path="/profile" component={Profile} />
            <Route path="/appointment" component={Appointment} />
            <Route path="/document" component={Document} />
            <Route path="/settings" component={Settings} />
                <React.Fragment>
                    <Navigation />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/properties" component={Properties} />
                    <Route path='/property/:id' component={PropertyDetails} />	
                </React.Fragment>
            </Switch>
        </Router>
    );
};

