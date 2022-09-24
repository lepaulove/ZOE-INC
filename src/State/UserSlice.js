import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";

const initialState = {
    currentUser: null
}

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            console.log(action.payload)
          }
    }
})

export const { signInSuccess } = UserSlice.actions
export const selectUser = state => state.user.currentUser

export default UserSlice.reducer