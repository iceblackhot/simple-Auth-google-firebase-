import {SignUp} from 'components/signUp';
import React from 'react';
import {Link} from 'react-router-dom';
import {useAuth} from 'hooks/useAuth';
import {HomePage} from './homePage';

export const RegisterPage = () => {
  const {isAuth} = useAuth();

  return (
    <>
      {isAuth ? (
        <HomePage />
      ) : (
        <>
          <h1>Register Page</h1>
          <SignUp />
          <p style={{color: 'white', fontSize: '15px', padding: '4px'}}>
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        </>
      )}
    </>
  );
};
