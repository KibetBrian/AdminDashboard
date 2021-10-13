import { CalendarToday, Person } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import "./userData.css"

function UserData() {
    return (
        <div className="userData">
            <div className="userTitleContainer">
                <div className="userTitle">
                    <h4 className="userTitleHeading">Edit User</h4>
                    <Link to ="/user/userdata/newuser">
                    <button className="createUserButton">Create User</button>
                    </Link>
                </div>                
            </div>
            <div className="userDetailsContainer">
                <div className="userDetailsWrapper">
                    <div className="userProfile">
                        <div className="userProfileImageContainer">
                        <img src="https://images.pexels.com/photos/301958/pexels-photo-301958.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="userProfileImage" />
                        <div className="accountDetailsContainer">
                            <div className="userNameAndDateofBirth">
                                <div className="userName"><Person/> Ariana</div>
                                <div className="dateOfBirth"> <CalendarToday/>19 Jan 1995</div>
                                <div className="dateOfBirth"> <CalendarToday/>19 Jan 1995</div>
                                <div className="dateOfBirth"> <CalendarToday/>19 Jan 1995</div>
                                <div className="dateOfBirth"> <CalendarToday/>19 Jan 1995</div>
                                <div className="dateOfBirth"> <CalendarToday/>19 Jan 1995</div>
                            </div>
                        </div>                    
                        </div>
                        <div className="nameAndPositionContainer">
                            <span className="userProfileName">Ariana</span> <br />
                            <span className="position">Software Developer</span>
                              
                        </div>  
                              
                    </div>   
                        
                    <div className="userContent d-block">
                        <div className="her">Hey</div>
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default UserData
