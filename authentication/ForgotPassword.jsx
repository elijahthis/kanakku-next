import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/img/logo.png'

const ForgotPassword = (props) => {

        return (
            <div className="main-wrapper login-body">
                <div className="login-wrapper">
                    <div className="container">
                        <img className="img-fluid logo-dark mb-2" src={Logo} alt="Logo" />
                    
                        <div className="loginbox"> 
                            <div className="login-right">
                                <div className="login-right-wrap">
                                    <h1>Forgot Password?</h1>
                                    <p className="account-subtitle">Enter your email to get a password reset link</p>
                                    
                                    {/* Form */}
                                    <form>
                                        <div className="form-group">
                                            <label className="form-control-label">Email Address</label>
                                            <input className="form-control" type="text" />
                                        </div>
                                        <div className="form-group mb-0">
                                            <button className="btn btn-lg btn-block btn-primary w-100" onClick={()=>props.history.push('/login')} type="submit">Reset Password</button>
                                        </div>
                                    </form>
                                    {/* /Form */}
                                    
                                    <div className="text-center dont-have">Remember your password? <Link to="/login">Login</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    
}
export default ForgotPassword;