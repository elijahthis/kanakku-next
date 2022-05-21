import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import customers from "../json/customers";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import $ from "jquery";

let SlideToggle;

const Customers = () => {
    useEffect(() => {
        SlideToggle = window.ReactSlideToggle;
        $("#customerstable").DataTable({
            bFilter: false,
            paging: true,
        });
        $("#filter_search").click(function () {
            $("#filter_inputs").slideToggle(500);
        });
    }, []);

    return (
        <div className="page-wrapper">
            <div className="content container-fluid">
                <div className="page-header">
                    <div className="row align-items-center">
                        <div className="col">
                            <h3 className="page-title">Customers</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link href="/">
                                        <a>Dashboard</a>
                                    </Link>
                                </li>
                                <li className="breadcrumb-item active">
                                    Customers
                                </li>
                            </ul>
                        </div>
                        <div className="col-auto">
                            <Link href="/add-customer">
                                <a className="btn btn-primary mr-1">
                                    <i className="fas fa-plus"></i>
                                </a>
                            </Link>
                            <a
                                className="btn btn-primary filter-btn"
                                href="/customers#"
                                id="filter_search"
                            >
                                <i className="fas fa-filter"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div id="filter_inputs" className="card filter-card">
                    <div className="card-body pb-0">
                        <div className="row">
                            <div className="col-sm-6 col-md-3">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <div className="card card-table">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table
                                        className="table table-center table-hover datatable"
                                        id="customerstable"
                                    >
                                        <thead className="thead-light">
                                            <tr>
                                                <th>Customer</th>
                                                <th>Email</th>
                                                <th>Amount Due</th>
                                                <th>Registered On</th>
                                                <th>Status</th>
                                                <th className="text-right">
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {customers.map((item, index) => {
                                                let status;
                                                if (item.status === "Active") {
                                                    status = (
                                                        <span className="badge badge-pill bg-success-light">
                                                            Active
                                                        </span>
                                                    );
                                                } else {
                                                    status = (
                                                        <span className="badge badge-pill bg-danger-light">
                                                            Inactive
                                                        </span>
                                                    );
                                                }
                                                return (
                                                    <tr key={index}>
                                                        <td>
                                                            <h2 className="table-avatar">
                                                                <Link href="/profile">
                                                                    <a className="avatar avatar-sm mr-2">
                                                                        <Image
                                                                            className="avatar-img rounded-circle"
                                                                            width="40"
                                                                            height="40"
                                                                            src={
                                                                                item.customer_image
                                                                            }
                                                                            alt="User Image"
                                                                        />
                                                                    </a>
                                                                </Link>
                                                                <Link href="/profile">
                                                                    <a>
                                                                        {
                                                                            item.customer_name
                                                                        }
                                                                        <span>
                                                                            {
                                                                                item.customer_mobile
                                                                            }
                                                                        </span>
                                                                    </a>
                                                                </Link>
                                                            </h2>
                                                        </td>
                                                        <td>
                                                            {
                                                                item.customer_email
                                                            }
                                                        </td>
                                                        <td>
                                                            {item.amount_due}
                                                        </td>
                                                        <td>
                                                            {item.registered_on}
                                                        </td>
                                                        <td>{status}</td>
                                                        <td className="text-right">
                                                            <Link href="/edit-customer">
                                                                <a className="btn btn-sm btn-white text-success mr-2">
                                                                    <i className="far fa-edit mr-1"></i>{" "}
                                                                    Edit
                                                                </a>
                                                            </Link>
                                                            <a
                                                                href="#"
                                                                className="btn btn-sm btn-white text-danger mr-2"
                                                            >
                                                                <i className="far fa-trash-alt mr-1"></i>
                                                                Delete
                                                            </a>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Customers;
