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
            //Create products
            createProductStart: (state)=>
            {
                state.isFetching = true;
                state.error = false;
            },
            createProductSuccess: (state, action)=>
            {
                state.isFetching = false;
                state.error = false;
                state.products.push(action.payload)
            },
            createProductFailure: (state) =>
            {
                state.error = true;
                state.isFetching = false;
            },
            
             //Update Products 
             updateProductStart: (state)=>
             {
                 state.isFetching = true;
                 state.error = false;
             },
             updateProductSuccess: (state, action)=>
             {
                 state.isFetching = false;
                 state.error = false;
                 state.products.forEach(eachProduct=>
                    {
                        if (eachProduct._id === action.payload._id)
                        {
                            eachProduct = action.payload
                        }
                    });
             },
             updateProductError: (state)=>
             {
                 state.error = true;
             },

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

export const {
    createProductStart, createProductSuccess, createProductFailure,
    getProductsStart, getProductSuccess, getProductsError,
    updateProductStart, updateProductSuccess, updateProductError,
    deleteProductStart, deleteProductSuccess, deleteProductError,
     } = productSlice.actions;
export default productSlice.reducer;