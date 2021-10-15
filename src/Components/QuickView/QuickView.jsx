import { ArrowUpward } from '@material-ui/icons'
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
    AreaChart,
    Area,
    Tooltip
  } from "recharts";
import "./quickView.css"

function QuickView() {
    const [salesData, setSalesData] = useState([]);
    const user = useSelector((state)=>state.user.currentUser);
    const [customers, setCustomers] = useState(0);
    const totalCosts = 0;
    const previousRevenue = 0;
    const initialCustomers = 0;

    useEffect(()=>
    {
        const fetchData= async ()=>
        {
            const res = await axios.get('/orders/income', {headers: {token: `Bearer ${user.accessToken}`}});
            setSalesData(res.data);
        }
        fetchData();
    }, [user.accessToken])

    const totalRevenue = ()=>
    {
        let revenue = 0;

        salesData.forEach(eachSalesData=>
            {
                revenue += eachSalesData.total;
            }
            )
        return revenue;
    }

    const totalRevenuePercentageIncrease = ()=>
    {
       const percentageRevenue = (totalRevenue() - previousRevenue)/100;
       return percentageRevenue;
    }

    const calculateMonthlyRevenue = ()=>
    {
        const date = new Date();
        const month =  date.getMonth();
        let revenue =0;
        salesData.forEach(eachSalesData=>
            {
                if(eachSalesData._id === month)
                {
                    revenue = eachSalesData.total;
                }
            })
            
        return revenue;
    }
    const monthlyChangeData =
    [
        {
            Month: 'prev',
            Sales: 0
        },
        {
            Month: 'prevprev',
            Sales: 0
        }
    ]
    const calculateMonthlyPercentageChange = ()=>
    {
        const date = new Date();
        const month =  date.getMonth();
        let revenuePrevMonth =0;
        let revenuePrevPrevMonth =0;
        salesData.forEach(eachSalesData=>
            {
                if(eachSalesData._id === month)
                {
                    revenuePrevMonth = eachSalesData.total;
                }
            })        
            salesData.forEach(eachSalesData=>
                {
                    if(eachSalesData._id === month-1)
                    {
                        revenuePrevPrevMonth = eachSalesData.total;
                    }
                }) 
                const percentageChange = ((revenuePrevMonth - revenuePrevPrevMonth)/revenuePrevPrevMonth)*100;
                monthlyChangeData.forEach(eachData=>
                    {
                        if (eachData.Month === 'prev')
                        {
                            eachData.Sales = revenuePrevPrevMonth
                        }else 
                        {
                            eachData.Sales = revenuePrevMonth 
                        }
                    })
                return percentageChange;
    }
   
    const data = [
        {
          Month: 'January',
          Sales: 0,
        },
        {
          Month: 'February',
          Sales: 0,
        },
        {
          Month: 'March',
          Sales: 0,
        },
        {
          Month: 'April',
          Sales: 0,
        },
        {
          Month: 'May',
          Sales: 0,
        },
        {
          Month: 'June',
          Sales: 0,
        },
        {
          Month: 'July',
          Sales: 0,
        },
        {
            Month: 'August',
            Sales: 0,
        },
        {
            Month: 'September',
            Sales: 0
        },
        {
            Month: 'October',
            Sales:0,
        },
        {
            Month:'November',
            Sales: 0,
        },
        {
            Month:'December',
            Sales: 0,
        },
      ];


     data.forEach(eachData=>
        {
            salesData.forEach(eachSalesData=>
                {
                   if (eachSalesData._id === data.indexOf(eachData)+1)
                   {
                       eachData.Sales = eachSalesData.total;
                   }
                })
        })
        
    const totalProfits = ()=>            
    {
        const profits =totalRevenue() -totalCosts;
        return profits
    }
    const  calculateProfitsChange = ()=>
    {
        const profitsChange = (totalProfits() - totalCosts)/100
        return profitsChange
    }
    const profitsData = 
    [
        {
            profit: 0,
        },
        {
            profit: totalProfits()
        }
    ];

    useEffect(()=>
    {
        const fetchUser = async ()=>
        {
            const res = await axios.get('/orders/income', {headers: {token: `Bearer ${user.accessToken}`}});
            setCustomers(res.data);
        }
        fetchUser();
    }, [user.accessToken]);
    
    const customersData = 
    [
        {
            customers: initialCustomers
        },
        {
            customers: customers.length
        }
    ]
    return ( 
        <div className="quickView">
            <div className="row quickViewRow">

            {/*Quick View Item start*/}
            <div className="col-lg-3 col-md-6 col-sm-12 quickViewItemColumn">
                <div className="quickViewItemWrapper">
                        <div className="quickViewItem">
                            <h6 className="quickViewTitle">Total Revenue</h6>
                            <div className="quickViewBody">
                                <div className="row">
                                <div className="col-6">
                                <AreaChart width={100} height={100} data={data}>
                                    <Tooltip />
                                    <Area type="monotone" dataKey="Sales" stroke="#8884d8" fill="#8884d8" />
                                </AreaChart>
                                </div>
                                <div className="col-6 stats">
                                    <div className="figures">
                                    <h2 className="sales">+{totalRevenuePercentageIncrease()}% {totalRevenuePercentageIncrease() > 0 ? (<ArrowUpward style={{color: '#5fc56a'}} className="upwardArrow"/>) : (<ArrowUpward style={{color: '#f44336'}} className="upwardArrow"/>)} </h2>
                                    <p className="revenue">$ {totalRevenue()}</p>
                                    </div>                               
                                </div>
                                </div>
                            </div>                        
                        </div>
                </div>    
           </div>
           {/*Quick view item end*/}
            {/*Quick View Item start*/}
            <div className="col-lg-3 col-md-6 col-sm-12 quickViewItemColumn">
                <div className="quickViewItemWrapper">
                        <div className="quickViewItem">
                            <h6 className="quickViewTitle">Last Month Revenue</h6>
                            <div className="quickViewBody">
                                <div className="row">
                                <div className="col-6">
                                <AreaChart width={100} height={100} data={monthlyChangeData}>
                                    <Tooltip />
                                    <Area type="monotone" dataKey="Sales" stroke="#8884d8" fill="#8884d8" />
                                </AreaChart>
                                </div>
                                <div className="col-6 stats">
                                    <div className="figures">
                                    <h2 className="sales">+{calculateMonthlyPercentageChange()}% {calculateMonthlyPercentageChange() > 0 ? (<ArrowUpward style={{color: '#5fc56a'}} className="upwardArrow"/>) : (<ArrowUpward style={{color: '#f44336'}} className="upwardArrow"/>)}</h2>
                                    <p className="revenue">$ {calculateMonthlyRevenue()}</p>
                                    </div>                               
                                </div>
                                </div>
                            </div>                        
                        </div>
                </div>    
           </div>
           {/*Quick view item end*/}
            {/*Quick View Item start*/}
            <div className="col-lg-3 col-md-6 col-sm-12 quickViewItemColumn">
                <div className="quickViewItemWrapper">
                        <div className="quickViewItem">
                            <h6 className="quickViewTitle">Total Profits</h6>
                            <div className="quickViewBody">
                                <div className="row">
                                <div className="col-6">
                                <AreaChart width={100} height={100} data={profitsData}>
                                    <Tooltip />
                                    <Area type="monotone" dataKey="profit" stroke="#8884d8" fill="#8884d8" />
                                </AreaChart>
                                </div>
                                <div className="col-6 stats">
                                    <div className="figures">
                                    <h2 className="sales">+{calculateProfitsChange()}% {calculateMonthlyPercentageChange() > 0 ? (<ArrowUpward style={{color: '#5fc56a'}} className="upwardArrow"/>) : (<ArrowUpward style={{color: '#f44336'}} className="upwardArrow"/>)}</h2>
                                    <p className="revenue">$ {totalProfits()}</p>
                                    </div>                               
                                </div>
                                </div>
                            </div>                        
                        </div>
                </div>    
           </div>
           {/*Quick view item end*/}
            {/*Quick View Item start*/}
            <div className="col-lg-3 col-md-6 col-sm-12 quickViewItemColumn">
                <div className="quickViewItemWrapper">
                        <div className="quickViewItem">
                            <h6 className="quickViewTitle">New Customers</h6>
                            <div className="quickViewBody">
                                <div className="row">
                                <div className="col-6">
                                <AreaChart width={100} height={100} data={customersData}>
                                    <Tooltip />
                                    <Area type="monotone" dataKey="customers" stroke="#8884d8" fill="#8884d8" />
                                </AreaChart>
                                </div>
                                <div className="col-6 stats">
                                    <div className="figures">
                                    <h2 className="sales">+{customers.length} {totalRevenuePercentageIncrease() > 0 ? (<ArrowUpward style={{color: '#5fc56a'}} className="upwardArrow"/>) : (<ArrowUpward style={{color: '#f44336'}} className="upwardArrow"/>)}</h2>
                                    <p className="revenue">{customers.length} New Customers</p>
                                    </div>                               
                                </div>
                                </div>
                            </div>                        
                        </div>
                </div>    
           </div>
           {/*Quick view item end*/}
          </div>
        </div>
    )
}

export default QuickView
