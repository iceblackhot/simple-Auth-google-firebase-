import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Form} from './form';
import {useDispatch} from 'react-redux';
import {setUser} from 'store/slices/userSlices';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          }),
        );
        navigate('/');
      })
      .catch(() => alert('invalid user!'));
  };

  return <Form title="Sign in" handleClick={handleLogin} />;
};
