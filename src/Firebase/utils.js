import { firebaseConfig } from "./config";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const app = firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()


export const handleSignUp = async (displayName, email, password, confirmPassword) => {

    let user = null

    try{
      if(password === confirmPassword){
        user = await auth.createUserWithEmailAndPassword(email, password)
        // .then(userCredentials => {
            // user = userCredentials
            console.log(user.user)
            handleUserProfile( user.user, { displayName })
            return user
        // }).catch(error => {console.log(error)})
      }else{
          throw 'Passwords Do Not Match.'
      }
    }catch(err){
      console.log(err)
      throw err
    }  
}


export const handleUserProfile = async(userAuth, additionalData) => {

    // console.log(userAuth)

    if(!userAuth) return

    const { uid } = userAuth

    // console.log(`${uid} Storing in firestore database...`)

    const userRef = firestore.doc(`users/${uid}`)

    const snapshot = await userRef.get()
    

    if(!snapshot.exists){
        const { displayName, email} = userAuth
        const timeStamp = new Date()
        const userRoles = ['user']
        try{
            await userRef.set({
                displayName,
                email,
                createdDate: timeStamp,
                userRoles,
                ...additionalData
            })
        }catch(err){
            console.log(err)
        }
    }
    // console.log(userRef)
    
    return userRef
}

export const getSnapshotFromUserAuth = async (user) => {
    // console.log(user)
    const snapshot = await (await handleUserProfile(user)).get()
    // console.log(snapshot)
    return snapshot
}

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
        unsubscribe();
        resolve(userAuth);
      }, reject);
    })
}

export const handleResetPasswordAPI = (email) => {
    const config = {
      url: 'http://localhost:3000/login'
    };
  
    return new Promise((resolve, reject) => {
      auth.sendPasswordResetEmail(email, config)
        .then(() => {
          resolve();
        })
        .catch(() => {
          const err = ['Email not found. Please try again.'];
          reject(err);
        });
    });
  };