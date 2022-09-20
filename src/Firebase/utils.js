import { firebaseConfig } from "./config";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()


export const handleSignUp = (email, password) => {
    auth.createUserWithEmailAndPassword(email, password)
    .then(userCredentials => {
        const user = userCredentials.user
        console.log(user)
    }).catch(error => {console.log(error)})
}
