import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './app';

import Error404 from '../app/errors/error-404.js';
import LoginForm from '../app/login';

export default function(history) {
    return (
        <Router history={ history }>
            <Route path="/" component={ App }>
                <IndexRoute component={ LoginForm }/>
                <Route path="users/login" component={ LoginForm }/>
                <Route path="*" component={ Error404 }/>
            </Route>
        </Router>
    );
}
