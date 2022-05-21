import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/img/logo.png";

const Login = (props) => {
    return (
        <>
            {/* Main Wrapper */}
            <div className="main-wrapper login-body">
                <div className="login-wrapper">
                    <div className="container">
                        <span className="img-fluid logo-dark mb-2">
                            <Image src={Logo} alt="Logo" />
                        </span>
                        <div className="loginbox">
                            <div className="login-right">
                                <div className="login-right-wrap">
                                    <h1>Login</h1>
                                    <p className="account-subtitle">
                                        Access to our dashboard
                                    </p>
                                    <div>
                                        <div className="form-group">
                                            <label className="form-control-label">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-control-label">
                                                Password
                                            </label>
                                            <div className="pass-group">
                                                <input
                                                    type="password"
                                                    className="form-control pass-input"
                                                />
                                                <span className="fas fa-eye toggle-password" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="custom-control custom-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input"
                                                            id="cb1"
                                                        />
                                                        <label
                                                            className="custom-control-label"
                                                            htmlFor="cb1"
                                                        >
                                                            Remember me
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-6 text-end">
                                                    <Link href="/forgot-password">
                                                        <a className="forgot-link">
                                                            Forgot Password ?
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            className="btn btn-lg btn-block btn-primary w-100"
                                            type="submit"
                                            onClick={() =>
                                                props.history.push("/")
                                            }
                                        >
                                            Login
                                        </button>
                                        <div className="login-or">
                                            <span className="or-line" />
                                            <span className="span-or">or</span>
                                        </div>
                                        {/* Social Login */}
                                        <div className="social-login mb-3">
                                            <span>Login with</span>
                                            <a href="#" className="facebook">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                            <a href="#" className="google">
                                                <i className="fab fa-google" />
                                            </a>
                                        </div>
                                        {/* /Social Login */}
                                        <div className="text-center dont-have">
                                            Don't have an account yet?{" "}
                                            <Link href="/register">
                                                Register
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Main Wrapper */}
        </>
    );
};
export default Login;
