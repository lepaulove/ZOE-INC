import userTypes from "./user.types";

export const emailSignIn = userCredentials => ({
    type: userTypes.EMAIL_SIGN_IN,
    payload: userCredentials
})

export const checkUserSession = () => ({
    type: userTypes.CHECK_USER_SESSION
})

export const setUserProfileData = userdata => ({
    type: userTypes.SET_USER_PROFILE_DATA,
    payload: userdata
})