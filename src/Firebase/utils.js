import { firebaseConfig } from "./config";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth } from 'firebase/auth'

const app = firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()
const auth2 = getAuth(app)


export const handleSignUp = (displayName, email, password, confirmPassword) => {

    let user = null

    if(password === confirmPassword){
        auth.createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            user = userCredentials
            handleUserProfile({userAuth: user.user})
        }).catch(error => {console.log(error)})
    }else{
        console.log('Sorry, ' + displayName + '! Passwords Do Not Match.')
    }
    
    return user
}


export const handleUserProfile = async({userAuth}) => {

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
                // ...additionalData
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
    const snapshot = await (await handleUserProfile({userAuth: user})).get()
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