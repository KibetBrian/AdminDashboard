import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice(
    {
        name: 'products',
        initialState: 
        {
            products: [],
            isFetching: false,
            error: false
        },
        reducers: 
        {
            //Fetch products
            getProductsStart: (state)=>
            {
                state.isFetching= true;
                state.error =false;
            },
            getProductSuccess: (state, action)=>
            {
                state.isFetching = false;
                state.error = false;
                state.products = action.payload;                
            },
            getProductsError: (state)=>
            {
                state.isFetching = false;
                state.error = true;
            },
            //Delete products
            deleteProductStart: (state)=>
            {
                state.isFetching = true;
                state.error= false;
            },
            deleteProductSuccess: (state, action)=>
            {
                state.isFetching= false;
                state.products = state.products.filter(product=>product._id !==action.payload)
                state.error = false;
            },
            deleteProductError: (state)=>
            {
                state.isFetching = false;
                state.error= true;
            }
        }
    }
)

export const { getProductsStart, getProductSuccess, getProductsError, deleteProductStart, deleteProductSuccess, deleteProductError } = productSlice.actions;
export default productSlice.reducer;