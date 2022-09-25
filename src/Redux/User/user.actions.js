import userTypes from "./user.types";

export const emailSignIn = userCredentials => ({
    type: userTypes.EMAIL_SIGN_IN,
    payload: userCredentials
})