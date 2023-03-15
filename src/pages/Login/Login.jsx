import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth, googleAuthProvider } from '../../firebase';
import { Button } from './Login.styled';

const Login = ({ setIsAuth }) => {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then(result => {
        localStorage.setItem('isAuth', true);
        setIsAuth(true);
        navigate('/');
      })
      .catch(e => console.error(error));
  };

  return (
    <div>
      <Button type="button" onClick={() => signInWithGoogle()}>
        Sign in with Google
      </Button>
    </div>
  );
};
export default Login;
