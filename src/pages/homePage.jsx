import React from 'react';
import {useDispatch} from 'react-redux';
import {useAuth} from 'hooks/useAuth';
import {removeUser} from 'store/slices/userSlices';
import {LoginPage} from './loginPage';

export const HomePage = () => {
  const {isAuth, email} = useAuth();
  const dispatch = useDispatch();

  return (
    <>
      {isAuth ? (
        <div>
          <h1>Welcome!</h1>
          <button className="logout-btn" onClick={() => dispatch(removeUser())}>
            Log out from {email}
          </button>
        </div>
      ) : (
        <LoginPage />
      )}
    </>
  );
};
