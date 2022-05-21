import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/img/logo.png";
import Img2 from "../assets/img/profiles/avatar-02.jpg";

const LockScreen = (props) => {
    return (
        <div className="main-wrapper login-body">
            <div className="login-wrapper">
                <div className="container">
                    <span className="img-fluid logo-dark mb-4">
                        <Image src={Logo} alt="Logo" />
                    </span>
                    <div className="loginbox">
                        <div className="login-right">
                            <div className="login-right-wrap">
                                <div className="lock-user">
                                    <img
                                        className="rounded-circle"
                                        src={Img2}
                                        alt="User Image"
                                    />
                                    <h4>John Doe</h4>
                                </div>

                                {/* Form */}
                                <form>
                                    <div className="form-group">
                                        <label className="form-control-label">
                                            Password
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
                                            Enter
                                        </button>
                                    </div>
                                </form>
                                {/* /Form */}

                                <div className="text-center dont-have">
                                    Sign in as a different user?{" "}
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
export default LockScreen;
