import React from 'react'
import "./newUser.css"

function NewUser() {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label> User Name</label>
                    <input type="text" placeholder="username" />
                </div>
            </form>
        </div>
    )
}

export default NewUser
