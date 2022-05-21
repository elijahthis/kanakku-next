import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import invoices from "../json/invoices";
import datatable from "../utils/utils";
import Select2 from "react-select2-wrapper";
import DatePicker from "react-datepicker";

const Invoices = () => {
    const [date, setDate] = useState(new Date());
    const [options, setOptions] = useState([
        { id: 1, text: "Select Status" },
        { id: 2, text: "Draft" },
        { id: 3, text: "Sent" },
        { id: 4, text: "Viewed" },
        { id: 5, text: "Expired" },
        { id: 6, text: "Accepted" },
        { id: 7, text: "Rejected" },
    ]);

    useEffect(() => {
        datatable("#invoicestabe");
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
                            <h3 className="page-title">Invoices</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link href="/">
                                        <a>Dashboard</a>
                                    </Link>
                                </li>
                                <li className="breadcrumb-item active">
                                    Invoices
                                </li>
                            </ul>
                        </div>
                        <div className="col-auto">
                            <Link href="/add-invoice">
                                <a className="btn btn-primary m-1">
                                    <i className="fas fa-plus"></i>
                                </a>
                            </Link>
                            <a
                                className="btn btn-primary filter-btn"
                                href="/invoices#"
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
                                    <label>Invoice Number</label>
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
                                        id="invoicestabe"
                                    >
                                        <thead className="thead-light">
                                            <tr>
                                                <th>Invoice Number</th>
                                                <th>Customer Name</th>
                                                <th>Created Date</th>
                                                <th>Amount</th>
                                                <th>Due Date</th>
                                                <th>Status</th>
                                                <th>Paid On</th>
                                                <th className="text-right">
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {invoices.map((item, index) => {
                                                let status;
                                                if (item.status === "Paid") {
                                                    status = (
                                                        <span className="badge badge-pill bg-success-light">
                                                            {item.status}
                                                        </span>
                                                    );
                                                } else if (
                                                    item.status === "Overdue"
                                                ) {
                                                    status = (
                                                        <span className="badge badge-pill bg-danger-light">
                                                            {item.status}
                                                        </span>
                                                    );
                                                } else if (
                                                    item.status === "Sent"
                                                ) {
                                                    status = (
                                                        <span className="badge badge-pill bg-info-light">
                                                            {item.status}
                                                        </span>
                                                    );
                                                } else if (
                                                    item.status ===
                                                    "Partially Paid"
                                                ) {
                                                    status = (
                                                        <span className="badge badge-pill bg-warning-light">
                                                            {item.status}
                                                        </span>
                                                    );
                                                }
                                                return (
                                                    <tr key={index}>
                                                        <td>
                                                            <Link href="/view-invoice">
                                                                <a>
                                                                    {
                                                                        item.invoice_number
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
                                                                        </div>{" "}
                                                                        {
                                                                            item.customer_name
                                                                        }
                                                                    </a>
                                                                </Link>
                                                            </h2>
                                                        </td>
                                                        <td>
                                                            {item.created_date}
                                                        </td>
                                                        <td>{item.amount}</td>
                                                        <td>{item.due_date}</td>
                                                        <td>{status}</td>
                                                        <td>
                                                            23 Nov 2020, 10:45pm
                                                        </td>
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
                                                                    <Link href="/edit-invoice">
                                                                        <a className="dropdown-item">
                                                                            <i className="far fa-edit mr-2"></i>
                                                                            Edit
                                                                        </a>
                                                                    </Link>
                                                                    <Link href="/view-invoice">
                                                                        <a className="dropdown-item">
                                                                            <i className="far fa-eye mr-2"></i>
                                                                            View
                                                                        </a>
                                                                    </Link>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="#"
                                                                    >
                                                                        <i className="far fa-trash-alt mr-2"></i>
                                                                        Delete
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
                                                                        Invoice
                                                                    </a>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="#"
                                                                    >
                                                                        <i className="far fa-copy mr-2"></i>
                                                                        Clone
                                                                        Invoice
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
export default Invoices;
