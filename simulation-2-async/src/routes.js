import React from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from './components/Auth/Auth';
import Dashboard from './components/Dashboard/Dashboard';
import Wizard from './components/Wizard/Wizard';

export default (
    <Switch> 
        <Route exact path="/" component={Auth} />
        <Route path="/dashboard" component={Dashboard} />
        <Route exact path="/wizard/:id" component={Wizard} />
    </Switch>
)
