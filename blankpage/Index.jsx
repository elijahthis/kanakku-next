import React from "react";
import Link from "next/link";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";

const BlankPage = () => {
    return (
        <div className="page-wrapper">
            <div className="content container-fluid">
                {/*Page Header */}
                <div className="page-header">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="page-title">Blank Page</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link href="/">Dashboard</Link>
                                </li>
                                <li className="breadcrumb-item active">
                                    Blank Page
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* /Page Header */}

                <div className="row">
                    <div className="col-sm-12">Contents here</div>
                </div>
            </div>
        </div>
    );
};
export default BlankPage;
