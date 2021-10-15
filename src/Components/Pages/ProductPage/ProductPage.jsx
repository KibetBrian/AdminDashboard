import React from 'react'
import { DataGrid } from '@mui/x-data-grid';import { useEffect } from 'react';
import { useState } from 'react';
import './productPage.scss'
import { Link } from 'react-router-dom';
import { Add, Delete } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux'
import { deleteProducts, fetchProducts } from '../../../Redux/apiCall';


function ProductPage() {
    const user = useSelector((state)=>state.user.currentUser);
    const products = useSelector(state=>state.products.products);
    const dispatch = useDispatch();

    const handleDelete = (productId)=>
    {
        deleteProducts(dispatch, productId)
    }   

    useEffect(()=>
    {
        const fetchData= async ()=>
        {
            fetchProducts(dispatch)
        }
        fetchData();
    }, [dispatch, user.accessToken]);

    //Data grid  
    const columns = [
        { 
            field: 'id',
            headerName: 'ID',
            width: 90
         },
        {
          field: 'productName',
          headerName: 'productName',
          width: 150,
          editable: true,
        },
        {
          field: 'productPrice',
          headerName: 'Price',
          width: 110,
          editable: true,
        },
        {
          field: 'stock',
          headerName: 'Stock',
          type: 'number',
          width: 150,
          editable: true,
        },        
        {
            field: 'productImage',
            width: 170,
            renderCell: (params)=>
            {
                return(
                <div className='imageContainer'>
                    <img src={params.row.productImage} alt="" />
                </div>
                )
            }
        },
        {
            field: 'add',
            width: 150,
            renderCell: (params)=>
            {
                return(
                    <div className="addContainer">
                        <Link to = {"/users/"+params.row.id} >
                         Edit 
                        </Link>
                         <Add className="ml-2" />
                    </div>
                )
            }
        },
        {
            field: 'delete',
            width: 150,
            renderCell: (params)=>
            {
                return(
                    <div className="deleteContainer" onClick={
                      ()=>
                      {
                        handleDelete(params.row.id)
                      }
                    }>
                        Delete
                      <Delete className='ml-2' onClick={()=>
                      {
                        handleDelete(params.row.id)
                      }}/>
                    </div>
                )
            }
        }

      ];
      
      const rows = 
          products.map(eachData=>
            (                
                { id: eachData._id, productName: eachData.productName, productPrice: eachData.productPrice, stock: eachData.productInStock, productImage: eachData.productImage }
            ))
     

    return (
        <div className='productListPage'>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}

export default ProductPage
