import { ArrowUpward } from '@material-ui/icons'
import React from 'react'
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
  } from "recharts";
import "./quickView.css"

function QuickView() {
    const data = [
        {
          name: "Page A",
          uv: 10,
          pv: 10,
          amt: 10
        },
        {
          name: "Page B",
          uv: 20,
          pv: 1398,
          amt: 15
        },
        {
          name: "Page C",
          uv: 30,
          pv: 9800,
          amt: 20
        },
        {
          name: "Page D",
          uv: 40,
          pv: 3908,
          amt: 2000
        },
        {
          name: "Page E",
          uv: 45,
          pv: 4800,
          amt: 30
        },
        {
          name: "Page F",
          uv: 50,
          pv: 3800,
          amt: 40
        },
        {
          name: "Page G",
          uv: 60,
          pv: 4300,
          amt: 50
        }
      ];
      
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
                                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                                </AreaChart>
                                </div>
                                <div className="col-6 stats">
                                    <div className="figures">
                                    <h2 className="sales">+101 <ArrowUpward className="upwardArrow"/></h2>
                                    <p className="revenue">Revenue Today</p>
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
                            <h6 className="quickViewTitle">Total Revenue</h6>
                            <div className="quickViewBody">
                                <div className="row">
                                <div className="col-6">
                                <AreaChart width={100} height={100} data={data}>
                                    <Tooltip />
                                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                                </AreaChart>
                                </div>
                                <div className="col-6 stats">
                                    <div className="figures">
                                    <h2 className="sales">+101 <ArrowUpward className="upwardArrow"/></h2>
                                    <p className="revenue">Revenue Today</p>
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
                            <h6 className="quickViewTitle">Total Revenue</h6>
                            <div className="quickViewBody">
                                <div className="row">
                                <div className="col-6">
                                <AreaChart width={100} height={100} data={data}>
                                    <Tooltip />
                                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                                </AreaChart>
                                </div>
                                <div className="col-6 stats">
                                    <div className="figures">
                                    <h2 className="sales">+101 <ArrowUpward className="upwardArrow"/></h2>
                                    <p className="revenue">Revenue Today</p>
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
                            <h6 className="quickViewTitle">Total Revenue</h6>
                            <div className="quickViewBody">
                                <div className="row">
                                <div className="col-6">
                                <AreaChart width={100} height={100} data={data}>
                                    <Tooltip />
                                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                                </AreaChart>
                                </div>
                                <div className="col-6 stats">
                                    <div className="figures">
                                    <h2 className="sales">+101 <ArrowUpward className="upwardArrow"/></h2>
                                    <p className="revenue">Revenue Today</p>
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
