import React from 'react';
import LoginSec from '../Components/LoginSec';

const Login = ({ history }) => {
  return (
    <>
      <h1 className="loginH1">Book Finder</h1>
      <LoginSec history={history} />
    </>
  );
};

export default Login;
