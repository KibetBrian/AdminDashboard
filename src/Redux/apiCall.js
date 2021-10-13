import { loginFailure, loginStart, loginSuccess } from "./userSlice"
import axios from 'axios' 

//Login 
export const login = async (dispatch, userInput)=>
{
    dispatch(loginStart());
    try 
    {
        const res = await axios.post('/auth/login', userInput);
        dispatch(loginSuccess(res.data))
    }
    catch(err)
    {
        dispatch(loginFailure())
    }
}