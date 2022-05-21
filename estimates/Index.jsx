import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import estimates from "../json/estimates";
import datatable from "../utils/utils";
import Select2 from "react-select2-wrapper";
import DatePicker from "react-datepicker";

const Estimates = () => {
    const [date, setDate] = useState(new Date());
    const [options, setOptions] = useState([
        { id: 1, text: "Draft" },
        { id: 2, text: "Sent" },
        { id: 3, text: "Viewed" },
        { id: 4, text: "Expired" },
        { id: 5, text: "Accepted" },
        { id: 6, text: "Rejected" },
    ]);

    useEffect(() => {
        datatable("#estimatestable");
        $("#filter_search").click(function () {
            $("#filter_inputs").slideToggle(500);
        });
        let elements = Array.from(
            document.getElementsByClassName("select2-container")
        );
        elements.map((element) => element.classList.add("width-100"));
    }, []);

    const handleChange = (date) => {
        setDate(date);
    };

    return (
        <div className="page-wrapper">
            <div className="content container-fluid">
                <div className="page-header">
                    <div className="row align-items-center">
                        <div className="col">
                            <h3 className="page-title">Estimates</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link href="/">
                                        <a>Dashboard</a>
                                    </Link>
                                </li>
                                <li className="breadcrumb-item active">
                                    Estimates
                                </li>
                            </ul>
                        </div>
                        <div className="col-auto">
                            <Link href="/add-estimate">
                                <a className="btn btn-primary mr-1">
                                    <i className="fas fa-plus"></i>
                                </a>
                            </Link>
                            <a
                                className="btn btn-primary filter-btn"
                                href="/estimates#"
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
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label>Customer:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="form-group">
                                    <label>Status:</label>
                                    <Select2
                                        className="w-100"
                                        data={options}
                                        options={{
                                            placeholder: "Select Status",
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="form-group">
                                    <label>From</label>
                                    <div className="cal-icon">
                                        <DatePicker
                                            selected={date}
                                            onChange={handleChange}
                                            className="form-control datetimepicker"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="form-group">
                                    <label>To</label>
                                    <div className="cal-icon">
                                        <DatePicker
                                            selected={date}
                                            onChange={handleChange}
                                            className="form-control datetimepicker"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label>Estimate Number</label>
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
                                        className="table table-stripped table-hover datatable"
                                        id="estimatestable"
                                    >
                                        <thead className="thead-light">
                                            <tr>
                                                <th>Estimate Number</th>
                                                <th>Customer</th>
                                                <th>Estimate Date</th>
                                                <th>Expiry Date</th>
                                                <th>Amount</th>
                                                <th>Status</th>
                                                <th className="text-right">
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {estimates.map((item, index) => {
                                                let status;
                                                if (
                                                    item.status === "Accepted"
                                                ) {
                                                    status = (
                                                        <span className="badge badge-pill bg-success-light">
                                                            {item.status}
                                                        </span>
                                                    );
                                                } else if (
                                                    item.status === "Declined"
                                                ) {
                                                    status = (
                                                        <span className="badge badge-pill bg-danger-light">
                                                            {item.status}
                                                        </span>
                                                    );
                                                } else {
                                                    status = (
                                                        <span className="badge badge-pill bg-info-light">
                                                            {item.status}
                                                        </span>
                                                    );
                                                }
                                                return (
                                                    <tr key={index}>
                                                        <td>
                                                            <Link href="/view-estimate">
                                                                <a>
                                                                    {
                                                                        item.estimate_number
                                                                    }
                                                                </a>
                                                            </Link>
                                                        </td>
                                                        <td>
                                                            <h2 className="table-avatar">
                                                                <Link href="/profile">
                                                                    <a>
                                                                        <div className="mr-2 w-10 h-10 inline avatar avatar-sm avatar-img">
                                                                            <Image
                                                                                width="40"
                                                                                height="40"
                                                                                className="rounded-circle"
                                                                                src={
                                                                                    item.customer_image
                                                                                }
                                                                                alt="User Image"
                                                                            />
                                                                        </div>
                                                                        {
                                                                            item.customer_name
                                                                        }
                                                                    </a>
                                                                </Link>
                                                            </h2>
                                                        </td>
                                                        <td>
                                                            {
                                                                item.estimated_date
                                                            }
                                                        </td>
                                                        <td>
                                                            {item.expiry_date}
                                                        </td>
                                                        <td>{item.amount}</td>
                                                        <td>{status}</td>
                                                        <td className="text-right">
                                                            <div className="dropdown dropdown-action">
                                                                <a
                                                                    href="#"
                                                                    className="action-icon dropdown-toggle"
                                                                    data-bs-toggle="dropdown"
                                                                    aria-expanded="false"
                                                                >
                                                                    <i className="fas fa-ellipsis-h" />
                                                                </a>
                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                    <Link href="/edit-estimate">
                                                                        <a className="dropdown-item">
                                                                            <i className="far fa-edit mr-2"></i>
                                                                            Edit
                                                                        </a>
                                                                    </Link>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="#"
                                                                    >
                                                                        <i className="far fa-trash-alt mr-2"></i>
                                                                        Delete
                                                                    </a>
                                                                    <Link href="/view-estimate">
                                                                        <a className="dropdown-item">
                                                                            <i className="far fa-eye mr-2"></i>
                                                                            View
                                                                        </a>
                                                                    </Link>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="#"
                                                                    >
                                                                        <i className="far fa-file-alt mr-2"></i>
                                                                        Convert
                                                                        to
                                                                        Invoice
                                                                    </a>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="#"
                                                                    >
                                                                        <i className="far fa-check-circle mr-2"></i>
                                                                        Mark as
                                                                        sent
                                                                    </a>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="#"
                                                                    >
                                                                        <i className="far fa-paper-plane mr-2"></i>
                                                                        Send
                                                                        Estimate
                                                                    </a>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="#"
                                                                    >
                                                                        <i className="far fa-check-circle mr-2"></i>
                                                                        Mark as
                                                                        Accepted
                                                                    </a>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="#"
                                                                    >
                                                                        <i className="far fa-times-circle mr-2"></i>
                                                                        Mark as
                                                                        Rejected
                                                                    </a>
                                                                </div>
                                                            </div>
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
export default Estimates;
