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

    if(password === confirmPassword){
        auth.createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user
            handleUserProfile({ userAuth: user, additionalData: { displayName }})
        }).catch(error => {console.log(error)})
    }else{
        console.log('Sorry, ' + displayName + '! Passwords Do Not Match.')
    }
    
}


export const handleUserProfile = async({ userAuth, additionalData }) => {
    if(!userAuth) return

    const { uid } = userAuth

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
    console.log(snapshot)
    return userRef
}

export const getSnapshotFromUserAuth = async (user) => {
    const snapshot = (await handleUserProfile({userAuth: user})).get()
    return snapshot
}
