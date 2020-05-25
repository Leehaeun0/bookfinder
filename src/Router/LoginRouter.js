import React from 'react';
import { Route } from 'react-router-dom';
import App from '../App';
import Login from '../Page/Login';

const LoginRouter = () => (
  <div>
    <Route path="/login" exact component={Login} />
    <Route path="/" exact component={App} />
  </div>
);

export default LoginRouter;
