import React, { useEffect } from 'react'
import { useState } from 'react'
import MainBodyChart from '../../Charts/MainBodyChart/MainBodyChart'
import QuickView from '../../QuickView/QuickView'
import Customers from './Customers/Customers'
import axios from 'axios'
import "./homePage.css"
import { useSelector } from 'react-redux'

function HomePage() {
    const [salesData, setSalesData] = useState([]);
    const user = useSelector(state=>state.user.currentUser);

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
    useEffect(()=>
    {
        const fetchSalesData = async ()=>
        {
            const res = await axios.get('/orders/income', {headers: {token: `Bearer ${user.accessToken}`}});
            setSalesData(res.data);
        }
        fetchSalesData();
    }, [user.accessToken]); 

      data.forEach(eachData=>
        {
          salesData.forEach(eachSalesData=>
            {
                data[eachSalesData._id].Sales=eachSalesData.total
            })
        })
    return (
        <div className="homePage">
            <QuickView/>
            <MainBodyChart title="Sales" data={data}  dataKey="Sales"  /> 
            <Customers/>  
        </div>
    )
}

export default HomePage
