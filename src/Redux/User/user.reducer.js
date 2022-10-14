import userTypes from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
    userProfileData: null
}

const userReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case userTypes.EMAIL_SIGN_IN: 
            return {
                ...state,
                currentUser: action.payload
            }
        case userTypes.SET_USER_PROFILE_DATA:
            return {
                ...state,
                userProfileData: action.payload
            }
        default:
            return state
    }
}

export default userReducer