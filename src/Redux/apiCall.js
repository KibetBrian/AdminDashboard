import { loginFailure, loginStart, loginSuccess } from "./userSlice"
import axios from 'axios' 
import { store } from "./store";
import { createProductFailure, createProductStart, createProductSuccess, deleteProductError, deleteProductStart, deleteProductSuccess, getProductsError, getProductsStart, getProductSuccess, updateProductStart, updateProductSuccess, updateProductError } from "./productRedux";
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
//Create Products
export const createProduct = async (dispatch, productsData)=>
{
    dispatch(createProductStart())
    
    try 
    {
        const createProduct = await axios.post('/products/add', productsData, {headers: {token: `Bearer ${store.getState().user.currentUser.accessToken}`}});
        dispatch(createProductSuccess(createProduct.data));
    }
    catch(err)
    {
        dispatch(createProductFailure())
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
//Update Products
export const updateProduct = async (dispatch,productId, productsData, accessToken)=>
{
    dispatch(updateProductStart)
    
    try 
    {
        const createProduct = await axios.post(`/products/update/${productId}`, productsData, {headers: {token: `Bearer ${store.getState().user.currentUser.accessToken}`}});
        dispatch(updateProductSuccess(createProduct.data));
    }
    catch(err)
    {
        dispatch(updateProductError())
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