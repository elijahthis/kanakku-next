import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import expenses from "../json/expenses";
import datatable from "../utils/utils";
import Select2 from "react-select2-wrapper";
import DatePicker from "react-datepicker";

const Expenses = () => {
    const [date, setDate] = useState(new Date());
    const [categoryOptions, setCategoryOptions] = useState([
        { id: 1, text: "Advertising" },
        { id: 2, text: "Marketing" },
        { id: 3, text: "Software" },
        { id: 4, text: "Travel" },
    ]);

    useEffect(() => {
        datatable("#expensestable");
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
                            <h3 className="page-title">Expenses</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link href="/">
                                        <a>Dashboard</a>
                                    </Link>
                                </li>
                                <li className="breadcrumb-item active">
                                    <a>Expenses</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-auto">
                            <Link href="/add-expenses">
                                <a className="btn btn-primary m-1">
                                    <i className="fas fa-plus"></i>
                                </a>
                            </Link>
                            <a
                                className="btn btn-primary filter-btn"
                                href="/expenses#"
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
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label>Category:</label>
                                    <Select2
                                        className="w-100"
                                        data={categoryOptions}
                                        options={{
                                            placeholder: "Select Category",
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="col-md-3">
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
                            <div className="col-md-3">
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
                                        id="expensestable"
                                    >
                                        <thead className="thead-light">
                                            <tr>
                                                <th>Category</th>
                                                <th>Customer</th>
                                                <th>Expense Date</th>
                                                <th>Notes</th>
                                                <th>Amount</th>
                                                <th>Status</th>
                                                <th className="text-right">
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {expenses.map((item, index) => {
                                                let status;
                                                if (
                                                    item.status === "Approved"
                                                ) {
                                                    status = (
                                                        <span className="badge badge-pill bg-success-light">
                                                            {item.status}
                                                        </span>
                                                    );
                                                } else {
                                                    status = (
                                                        <span className="badge badge-pill bg-danger-light">
                                                            {item.status}
                                                        </span>
                                                    );
                                                }
                                                return (
                                                    <tr key={index}>
                                                        <td>{item.category}</td>
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
                                                            {item.expense_date}
                                                        </td>
                                                        <td>{item.notes}</td>
                                                        <td>{item.amount}</td>
                                                        <td>{status}</td>
                                                        <td className="text-right">
                                                            <Link href="/edit-expenses">
                                                                <a className="btn btn-sm btn-white text-success mr-2">
                                                                    <i className="far fa-edit mr-1"></i>{" "}
                                                                    Edit
                                                                </a>
                                                            </Link>
                                                            <a
                                                                href="#"
                                                                className="btn btn-sm btn-white text-danger"
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
export default Expenses;
