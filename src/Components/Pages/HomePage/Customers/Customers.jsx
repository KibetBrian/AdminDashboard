import React from 'react'
import "./customers.css"

function Customers() {
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
                            <h5 className="CustomerProfileTitle">Frequent Clients</h5>
                            <div className="row">
                                <div className="col-12 d-block">
                                <div className="customersProfile d-flex">
                                    <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="customerImage img-fluid"  alt="Customers Image" />  
                                    <div className="customersContact ml-2 d-block">
                                        <h5>Brian Kibet</h5>
                                        <p>briankibet2040@gmail.com</p>
                                    </div>                                  

                                    </div>
                                    <div className="customersProfile d-flex">
                                    <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="customerImage img-fluid"  alt="Customers Image" />  
                                    <div className="customersContact ml-2 d-block">
                                        <h5>Brian Kibet</h5>
                                        <p>briankibet2040@gmail.com</p>
                                    </div>                                  

                                    </div>
                                    <div className="customersProfile d-flex">
                                    <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="customerImage img-fluid"  alt="Customers Image" />  
                                    <div className="customersContact ml-2 d-block">
                                        <h5>Brian Kibet</h5>
                                        <p>briankibet2040@gmail.com</p>
                                    </div> 
                                    </div>
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
                                 <tr className="tabledata">
                                 <td className="tableDataDate">
                                     25 07 2021
                                 </td>
                                 <td className="tableDataCustomerName">
                                     Brian Kibet
                                 </td>
                                 <td className="productName">
                                     Admin Panel
                                 </td>
                                 <td className="amount">
                                     $499
                                 </td>
                                 <td className="paymentStatus">
                                     <Button paymentState="Approved"/>
                                 </td>

                                 </tr>
                                 <tr className="tabledata">
                                 <td className="tableDataDate">
                                     25 07 2021
                                 </td>
                                 <td className="tableDataCustomerName">
                                     Brian Kibet
                                 </td>
                                 <td className="productName">
                                     Admin Panel
                                 </td>
                                 <td className="amount">
                                     $499
                                 </td>
                                 <td className="paymentStatus">
                                     <Button paymentState="Approved"/>
                                 </td>

                                 </tr>
                                 <tr className="tabledata">
                                 <td className="tableDataDate">
                                     25 07 2021
                                 </td>
                                 <td className="tableDataCustomerName">
                                     Brian Kibet
                                 </td>
                                 <td className="productName">
                                     Admin Panel
                                 </td>
                                 <td className="amount">
                                     $499
                                 </td>
                                 <td className="paymentStatus">
                                     <Button paymentState="Approved"/>
                                 </td>

                                 </tr>
                                 <tr className="tabledata">
                                 <td className="tableDataDate">
                                     25 07 2021
                                 </td>
                                 <td className="tableDataCustomerName">
                                     Brian Kibet
                                 </td>
                                 <td className="productName">
                                     Admin Panel
                                 </td>
                                 <td className="amount">
                                     $499
                                 </td>
                                 <td className="paymentStatus">
                                     <Button paymentState="Pending"/>
                                 </td>

                                 </tr>
                                 <tr className="tabledata">
                                 <td className="tableDataDate">
                                     25 07 2021
                                 </td>
                                 <td className="tableDataCustomerName">
                                     Brian Kibet
                                 </td>
                                 <td className="productName">
                                     Admin Panel
                                 </td>
                                 <td className="amount">
                                     $499
                                 </td>
                                 <td className="paymentStatus">
                                     <Button paymentState="Declined"/>
                                 </td>

                                 </tr>
                            </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customers
