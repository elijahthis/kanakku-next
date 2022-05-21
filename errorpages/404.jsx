import React from "react";
import Link from "next/link";

const Page404 = () => {
    return (
        <div className="main-wrapper">
            <div className="error-box">
                <h1>404</h1>
                <h3 className="h2 mb-3">
                    <i className="fas fa-exclamation-circle"></i> Oops! Page not
                    found!
                </h3>
                <p className="h4 font-weight-normal">
                    The page you requested was not found.
                </p>
                <Link href="/">
                    <a className="btn btn-primary">Back to Home</a>
                </Link>
            </div>
        </div>
    );
};
export default Page404;
