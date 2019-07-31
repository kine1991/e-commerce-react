import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// const firestore = firebase();

const config = {
    apiKey: "AIzaSyArR58TB-bqgBsG4ktPW-_hKTR6d7QmVQM",
    authDomain: "kron-city.firebaseapp.com",
    databaseURL: "https://kron-city.firebaseio.com",
    projectId: "kron-city",
    storageBucket: "kron-city.appspot.com",
    messagingSenderId: "229414188338",
    appId: "1:229414188338:web:801181afd477f09c"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    // console.log(snapShot)

    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email, 
          createdAt,
          ...additionalData
        })
      } catch(error){
        console.log('error creating user', error.message)
      }
    }

    return userRef;
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
