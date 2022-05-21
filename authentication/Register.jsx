import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/img/logo.png";

const Register = (props) => {
    return (
        <div className="main-wrapper login-body">
            <div className="login-wrapper">
                <div className="container">
                    <span className="img-fluid logo-dark mb-2">
                        <Image src={Logo} alt="Logo" />
                    </span>

                    <div className="loginbox">
                        <div className="login-right">
                            <div className="login-right-wrap">
                                <h1>Register</h1>
                                <p className="account-subtitle">
                                    Access to our dashboard
                                </p>

                                {/* Form */}
                                <form>
                                    <div className="form-group">
                                        <label className="form-control-label">
                                            Name
                                        </label>
                                        <input
                                            className="form-control"
                                            type="text"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-control-label">
                                            Email Address
                                        </label>
                                        <input
                                            className="form-control"
                                            type="text"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-control-label">
                                            Password
                                        </label>
                                        <input
                                            className="form-control"
                                            type="text"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-control-label">
                                            Confirm Password
                                        </label>
                                        <input
                                            className="form-control"
                                            type="text"
                                        />
                                    </div>
                                    <div className="form-group mb-0">
                                        <button
                                            className="btn btn-lg btn-block btn-primary w-100"
                                            onClick={() =>
                                                props.history.push("/")
                                            }
                                            type="submit"
                                        >
                                            Register
                                        </button>
                                    </div>
                                </form>
                                {/* /Form */}

                                <div className="login-or">
                                    <span className="or-line"></span>
                                    <span className="span-or">or</span>
                                </div>
                                {/* Social Login */}
                                <div className="social-login">
                                    <span>Register with</span>
                                    <a href="#" className="facebook">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#" className="google">
                                        <i className="fab fa-google"></i>
                                    </a>
                                </div>
                                {/* /Social Login */}
                                <div className="text-center dont-have">
                                    Already have an account?{" "}
                                    <Link href="/login">Login</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Register;
