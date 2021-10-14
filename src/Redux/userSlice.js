import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice(
    {
        name: 'user',
        initialState: 
        {
            currentUser: {},
            isFetching: false,
            error: false
        },
        reducers: 
        {
            loginStart: (state)=>
            {
                state.isFetching = true;
            },
            loginSuccess: (state, action)=>
            {
                state.isFetching = false;
                state.error = false;
                state.currentUser = action.payload;
            },
            loginFailure: (state)=>
            {
                state.error = true;
                state.isFetching = false;
            }
        }
    }
);
export const {loginStart, loginSuccess, loginFailure} = userSlice.actions;
export default userSlice.reducer;