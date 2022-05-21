import React from "react";
import Link from "next/link";

const Page500 = () => {
    return (
        <div className="main-wrapper">
            <div className="error-box">
                <h1>500</h1>
                <h3 className="h2 mb-3">
                    <i className="fas fa-exclamation-circle"></i> Oops!
                    Something went wrong
                </h3>
                <p className="h4 font-weight-normal">
                    The page you requested was not found.
                </p>
                <Link href="/" className="btn btn-primary">
                    Back to Home
                </Link>
            </div>
        </div>
    );
};
export default Page500;
