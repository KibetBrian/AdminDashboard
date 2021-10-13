import React from 'react';
import "./userList.css";
import { DataGrid } from '@material-ui/data-grid';
import { Add, Delete } from '@material-ui/icons';
import {rows} from './UserDataRows';
import { Link } from "react-router-dom";
import { useState } from 'react';

function UserList() {
const [data, setData] = useState( rows );
const handleDelete = (id)=>
{
  setData(data.filter(item=>item.id !== id))
}
    const columns = [
      { 
          field: 'id',
          headerName: 'ID',
          width: 60
      },
      {
        field: 'name',
        headerName: 'Customer Name',
        width: 160,
        editable: true,
        renderCell:(params)=>
        {
            return (
                <div>
                    <img src={params.row.avatar} className="customerContactsImage" alt="User Image" />
                    {params.row.name}
                </div>
            )
        }
      },
      {
        field: 'email',
        headerName: 'Customer Email',
        width: 200,
        editable: true,
      },
      {
        field: 'address',
        headerName: 'Customer Address',
        type: 'number',
        width: 140,
        editable: true,
      },
      {
          field: 'date',
          headerName: 'Date',
          width: 150,
          renderCell: (params) =>
          {
              return (
                  <div>
                  {params.row.date}                
                  </div>
              )
          }
      },
      {
          field: 'add',
          width: 80,
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
          width: 80,
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
       
    
    return (
        <div className="userList">
            <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
        </div>
    )
}

export default UserList
