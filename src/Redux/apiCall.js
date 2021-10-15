import { loginFailure, loginStart, loginSuccess } from "./userSlice"
import axios from 'axios' 
import { store } from "./store";
import { deleteProductError, deleteProductStart, deleteProductSuccess, getProductsError, getProductsStart, getProductSuccess } from "./productRedux";
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
//Fetch products 
export const fetchProducts = async (dispatch)=>
{
    dispatch(getProductsStart())
    try
    {
        const res = await axios.get('/products/allproducts');
        dispatch(getProductSuccess(res.data))
    }
    catch (err)
    {
        console.log(err)
        dispatch(getProductsError())
    }
}
//DeleteProducts
export const deleteProducts = async (dispatch, productId)=>
{
    dispatch(deleteProductStart());
    try 
    {
        const res = await axios.delete(`/products/delete/${productId}`, {headers: {token: `Bearer ${store.getState().user.currentUser.accessToken}`}});
        dispatch(deleteProductSuccess(productId))
    }
    catch(err)
    {
        dispatch(deleteProductError())
        console.log(err)
    }
}