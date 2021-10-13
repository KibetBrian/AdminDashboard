import React from 'react'
import MainBodyChart from '../../Charts/MainBodyChart/MainBodyChart'
import QuickView from '../../QuickView/QuickView'
import UserData from '../UserDataPage/UserData'
import Customers from './Customers/Customers'
import "./homePage.css"
import {salesData} from "./TestingData"

function HomePage() {
    return (
        <div className="homePage">
            <QuickView/>
            <MainBodyChart title="Sales" data={salesData}  dataKey="Sales"  /> 
            <Customers/>  
        </div>
    )
}

export default HomePage
