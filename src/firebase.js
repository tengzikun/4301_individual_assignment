import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut
} from 'firebase/auth';
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDwWvy3sa-yGAEKSo4U03lNdTyIw_lB6k4',
  authDomain: 'idvassign.firebaseapp.com',
  projectId: 'idvassign',
  storageBucket: 'idvassign.appspot.com',
  messagingSenderId: '1046174954449',
  appId: '1:1046174954449:web:2c5af1a046d52b983c66f0'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, 'users'), where('uid', '==', user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        name: user.displayName,
        authProvider: 'google',
        email: user.email
      });
    }
  } catch (err) {
    console.error(err);
    switch (err.message) {
      case "Firebase: Error (auth/wrong-password).":
        alert( "Password provided is not corrected, please try again");
        break;
      case "Firebase: Error (auth/invalid-email).":
        alert( "User is not found, please try with another email");  
        break;
      default:
        return "";
    }
  }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    switch (err.message) {
      case "Firebase: Error (auth/wrong-password).":
        alert( "User is not found, please try with another email");
        break;
      case "Firebase: Error (auth/invalid-email).":
        alert( "User is not found, please try with another email");  
        break;
      default:
        return "";
    }
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert('Password reset link sent!');
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout
};
