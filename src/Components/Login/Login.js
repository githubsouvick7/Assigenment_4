import React from 'react'
import './Login.css'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import Main from '../Main/Main';

const Login = () => {
    const { isAuthenticated } = useAuth0();
    const { loginWithRedirect } = useAuth0();

    return (

        <>

            {
                isAuthenticated ? (<Main />) :
                    (
                        <div className="container">
                            <div className="item-left">
                                <div>Board.</div>
                            </div>
                            <div className="item-right">
                                <div className="login">
                                    <div className="text">
                                        <h1>Sign In</h1>
                                        <h4>Sign in to your account</h4>
                                    </div>
                                    <div className="authentication">
                                        <button className='btn' onClick={() => loginWithRedirect()}>Login with Google</button>
                                    </div>
                                    <form className="box">
                                        <div className="email">
                                            <label htmlFor="Email">Email Address</label>
                                            <input type="email" className='input' placeholder='abcd@gmail.com' required />
                                        </div>
                                        <div className="password">
                                            <label htmlFor="Password">Password</label>
                                            <input type="email" className='input' placeholder='Password' required />
                                        </div>
                                        <div className="forget">
                                            <h4>Forget Password ?</h4>
                                        </div>
                                        <button className="button" type='submit'>Sign In</button>
                                    </form>
                                    <div className="register">
                                        <h4>Don’t have an account? <p
                                            onClick={() => loginWithRedirect()}
                                            style={{ cursor: "pointer" }}>Register here</p></h4>
                                    </div>
                                    <h5>Note* only google login is working</h5>
                                </div>

                            </div>
                        </div>
                    )
            }
        </>
    )
}

export default Login