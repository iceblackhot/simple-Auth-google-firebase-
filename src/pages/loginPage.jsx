import React from 'react';
import {Link} from 'react-router-dom';
import {Login} from 'components/login';

export const LoginPage = () => {
  return (
    <div className="login">
      <h1>Login Page</h1>
      <Login />
      <p style={{color: 'white', fontSize: '15px', padding: '4px'}}>
        no account?{' '}
        <Link className="login__link" to="/register">
          register
        </Link>
      </p>
    </div>
  );
};
