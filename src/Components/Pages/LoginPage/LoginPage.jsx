import React from 'react'
import { useState } from 'react';
import { login } from '../../../Redux/apiCall';
import { useDispatch } from 'react-redux'
import './loginPage.scss'

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const handleFormSubmit  = (e)=>
    {
        e.preventDefault();
        login(dispatch, {email, password});
    }
    return (
        <div className='loginPage'>
            <div className="loginContainer">
                <div className="loginPageLeft">
                    <div className="imageContainer">
                        <img src="/Assets/loginIllustration.svg" alt="login" />
                    </div>
                </div>
                <div className="loginPageRight">
                    <div className="contentContainer">
                        <div className="title"><h1>Sign Up</h1></div>
                        <div className="inputContainer">
                            <form className='form' onSubmit={handleFormSubmit}>
                                <label htmlFor="email">Email</label>
                                <input onChange={(e)=>setEmail(e.target.value)} type="email" name="email" placeholder='Enter your email' id="email" />
                                <label htmlFor="password">Password</label>
                                <input onChange={(e)=>setPassword(e.target.value)} type="password" name = "password" placeholder='Enter your password'/>
                                <button type = "submit">Sign In</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
