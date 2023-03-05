import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

const createNewUser = async (email, password) => {
  return new Promise(function (resolve, reject) {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        resolve(userCredential);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        reject(`${errorCode}: ${errorMessage}`);
      })
  });
}

const signInUser = async (email, password) => {
  return new Promise(function (resolve, reject) {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        resolve(userCredential);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        reject(`${errorCode}: ${errorMessage}`);
      })
  });
}

export { createNewUser, signInUser };
