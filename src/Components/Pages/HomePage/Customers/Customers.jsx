import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux';
import { format } from 'timeago.js'
import "./customers.css"


function Customers() {
    const [customers, setCustomers] = useState([]);
    const [orders, setOrders] = useState([]);
    
    const user = useSelector(state=>state.user.currentUser);

    useEffect(()=>
    {
       const fetchCustomers = async ()=>
       {
           const users = await axios.get('/user/allusers', {headers: {token: `Bearer ${user.accessToken}`}});
           setCustomers(users.data);
       }
       fetchCustomers();
       const fetchOrders = async ()=> 
       {
           const orders = await axios.get('/orders/',{headers: {token: `Bearer ${user.accessToken}`}});
           setOrders(orders.data)
       }
       fetchOrders();
    }, [orders.data, user.accessToken]);


    const Button=({paymentState}) =>
    {
        return <button className={"paymentStatusButton " + paymentState}>{paymentState}</button>
    }
    return (
        <div>
            <div className="container-fluid customersContainer">
                <div className="row">
                    <div className="col-lg-3 frequentCustomersWrapper col-md-12 col-sm-12">
                        <div className="customerProfile">
                            <h5 className="CustomerProfileTitle">Recent Customers</h5>
                            <div className="row">
                                <div className="col-12 d-block">                              
                                    {customers.map(eachCustomer=>
                                        (
                                            <div className="customersProfile d-flex">
                                                <img src= {eachCustomer.image ? eachCustomer.image: 'https://www.gravatar.com/avatar/35781abe4b5920be6df45021ced0bf7e?s=256&d=mm'} className="customerImage img-fluid"  alt="CustomersImage" />  
                                                <div className="customersContact ml-2 d-block">
                                                    <h5>{eachCustomer.username}</h5>
                                                    <p>{eachCustomer.email}</p>
                                                </div>                              
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 ml-lg-5 recentTransactions">
                        <h5 className="recentTransactionsTitle">Recent Transactions</h5>
                            <table className="recentTransactionsTable">
                                <tr className="tableHeadings">
                                    <th className="tableHead">Date</th>
                                    <th className="tableHead">Customer</th>
                                    <th className="tableHead">Product</th>
                                    <th className="tableHead">Amount</th>
                                    <th className="tableHead">Payment Status</th>
                                </tr>
                                {orders.map((eachOrder)=>
                                    (
                                        <tr className="tabledata">
                                                <td className="tableDataDate">
                                                    {format(eachOrder.createdAt)}
                                                </td>
                                                <td className="tableDataCustomerName">
                                                    {eachOrder.userId}
                                                </td>
                                                <td className="productName">
                                                    {/* {eachOrder.products.map(eachProduct=>(`${eachProduct.productId}`))} */}
                                                    productName
                                                </td>
                                                <td className="amount">
                                                    {eachOrder.amount}
                                                </td>
                                                <td className="paymentStatus">
                                                    <Button paymentState= {eachOrder.status}/>
                                                </td> 
                                            </tr>                   
                                    ))}                                     
                                    </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customers
