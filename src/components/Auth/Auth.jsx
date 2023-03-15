import { useEffect, useState } from 'react';

import { Loader } from '../Loader/Loader';
import { getAuth, signInWithPopup } from 'firebase/auth';
import { app, googleAuthProvider } from '../../firebase';

export const Auth = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(maybeUser => {
      if (maybeUser != null) {
        return setUser(maybeUser);
      }

      signInWithPopup(auth, googleAuthProvider)
        .then(credentials => setUser(credentials.user))
        .catch(event => console.error(event));
    });
    return unsub;
  }, [auth]);

  return user !== null ? <div>{user.displayName}</div> : <Loader />;
};
