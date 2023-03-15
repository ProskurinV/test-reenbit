import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// const API_KEY = import.meta.env.VITE_API_KEY;

const firebaseConfig = {
  apiKey: 'AIzaSyA8cWri2LTmAsMWzen9vzubWWR2ttcYPCU',
  authDomain: 'reenbitauth-5601b.firebaseapp.com',
  projectId: 'reenbitauth-5601b',
  storageBucket: 'reenbitauth-5601b.appspot.com',
  messagingSenderId: '884881131549',
  appId: '1:884881131549:web:17c2ed7f080569608a9ef4',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
