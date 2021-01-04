import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Classroom from '../pages/Classroom';

const Routes = () => (
    <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/register" component={SignUp} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/classroom" component={Classroom} />
    </Switch>
)

export default Routes;