import React from "react";
import Link from "next/link";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import InputMask from "react-input-mask";

const FormMask = () => {
    return (
        <div className="page-wrapper">
            <div className="content container-fluid">
                {/* Page Header */}
                <div className="page-header">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="page-title">Form Mask</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link href="/">Dashboard</Link>
                                </li>
                                <li className="breadcrumb-item active">
                                    Form Mask
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* /Page Header */}

                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Form Mask</h5>
                                <p className="card-text">
                                    Input masks can be used to force the user to
                                    enter data conform a specific format. Unlike
                                    validation, the user can't enter any other
                                    key than the ones specified by the mask.
                                </p>
                            </div>
                            <div className="card-body">
                                <form action="#">
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <InputMask
                                            className="form-control"
                                            mask="(999) 999-9999"
                                        ></InputMask>
                                        <span className="form-text text-muted">
                                            (999) 999-9999
                                        </span>
                                    </div>
                                    <div className="form-group">
                                        <label>Date</label>
                                        <InputMask
                                            className="form-control"
                                            mask="99/99/9999"
                                        ></InputMask>
                                        <span className="form-text text-muted">
                                            dd/mm/yyyy
                                        </span>
                                    </div>
                                    <div className="form-group">
                                        <label>SSN field 1</label>
                                        <InputMask
                                            className="form-control"
                                            mask="999-99-9999"
                                        ></InputMask>
                                        <span className="form-text text-muted">
                                            e.g "999-99-9999"
                                        </span>
                                    </div>
                                    <div className="form-group">
                                        <label>Phone field + ext.</label>
                                        <InputMask
                                            className="form-control"
                                            mask="(999) 999-9999? x99999"
                                        ></InputMask>
                                        <span className="form-text text-muted">
                                            +40 999 999 999
                                        </span>
                                    </div>
                                    <div className="form-group">
                                        <label>Product Key</label>
                                        <InputMask
                                            className="form-control"
                                            mask="a*-999-a999"
                                        ></InputMask>
                                        <span className="form-text text-muted">
                                            e.g a*-999-a999
                                        </span>
                                    </div>
                                    <div className="form-group">
                                        <label>Currency</label>
                                        <InputMask
                                            className="form-control"
                                            mask="999,999,999.99"
                                        ></InputMask>
                                        <span className="form-text text-muted">
                                            $ 999,999,999.99
                                        </span>
                                    </div>
                                    <div className="form-group">
                                        <label>Eye Script</label>
                                        <InputMask
                                            className="form-control"
                                            mask="~9.99 ~9.99 999"
                                        ></InputMask>
                                        <span className="form-text text-muted">
                                            ~9.99 ~9.99 999
                                        </span>
                                    </div>
                                    <div className="form-group">
                                        <label>Percent</label>
                                        <InputMask
                                            className="form-control"
                                            mask="99%"
                                        ></InputMask>
                                        <span className="form-text text-muted">
                                            e.g "99%"
                                        </span>
                                    </div>
                                    <div className="form-group mb-0">
                                        <label>Credit Card Number</label>
                                        <InputMask
                                            className="form-control"
                                            mask="9999 9999 9999 9999"
                                        ></InputMask>
                                        <span className="form-text text-muted">
                                            e.g "999.999.999.9999"
                                        </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default FormMask;
