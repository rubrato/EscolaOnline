import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Classroom from '../pages/Classroom';

const Routes = () => (
    <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={SignUp} />
        <Route path="/dashboard" component={Dashboard} isPrivate />
        <Route path="/classroom" component={Classroom} isPrivate />
    </Switch>
)

export default Routes;