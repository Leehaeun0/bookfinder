import React from 'react';
import { Route } from 'react-router-dom';
import App from '../App';
import Login from '../Page/Login';

const LoginRouter = () => (
  <div>
    <Route exact path="/" component={App} />
    <Route path="/recommend" component={App} />
    <Route path="/new" component={App} />
    <Route path="/search" component={App} />
    <Route path="/login" component={Login} />
  </div>
);

export default LoginRouter;
