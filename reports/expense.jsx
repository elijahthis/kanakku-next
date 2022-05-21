import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Select2 from "react-select2-wrapper";
import expenses from "../json/expenses";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import $ from "jquery";

const ExpenseReport = () => {
    const [category_, setcategory] = useState([
            { id: 2, text: "Advertising" },
            { id: 3, text: "Marketing" },
            { id: 4, text: "Software" },
            { id: 5, text: "Travel" },
        ]),
        [date_range_, setdaterange] = useState([
            { id: 2, text: "Today" },
            { id: 3, text: "This Week" },
            { id: 4, text: "This Month" },
            { id: 5, text: "This Quarter" },
            { id: 6, text: "This Year" },
            { id: 7, text: "Previous Week" },
            { id: 8, text: "Previous Month" },
            { id: 9, text: "Previous Quarter" },
            { id: 10, text: "Previous Year" },
        ]);

    useEffect(() => {
        const SlideToggle = window.ReactSlideToggle;
        $("#expensereporttable").DataTable({
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
                {/* Page Header */}
                <div className="page-header">
                    <div className="row align-items-center">
                        <div className="col">
                            <h3 className="page-title">Expenses Report</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link href="/">
                                        <a>Dashboard</a>
                                    </Link>
                                </li>
                                <li className="breadcrumb-item active">
                                    Reports
                                </li>
                            </ul>
                        </div>
                        <div className="col-auto">
                            <a href="#" className="btn btn-primary mr-1">
                                <i className="fas fa-file-pdf" />
                            </a>
                            <a
                                className="btn btn-primary filter-btn"
                                href="/expenses-report#"
                                id="filter_search"
                            >
                                <i className="fas fa-filter" />
                            </a>
                        </div>
                    </div>
                </div>
                {/* /Page Header */}
                {/* Search Filter */}
                <div id="filter_inputs" className="card filter-card">
                    <div className="card-body pb-0">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label>Slect Date Range</label>
                                    <br />
                                    <Select2
                                        style={{ innerWidth: "250px" }}
                                        className="w-100"
                                        data={date_range_}
                                        options={{
                                            placeholder: "Select",
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label>Category:</label>
                                    <br />
                                    <Select2
                                        className="w-100"
                                        data={category_}
                                        options={{
                                            placeholder: "Select Category",
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label>From</label>
                                    <div className="">
                                        <input
                                            className="form-control datetimepicker"
                                            type="date"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label>To</label>
                                    <div className="">
                                        <input
                                            className="form-control datetimepicker"
                                            type="date"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Search Filter */}

                <div className="row">
                    <div className="col-sm-12">
                        <div className="card card-table">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table
                                        className="table table-center table-hover datatable"
                                        id="expensereporttable"
                                    >
                                        <thead className="thead-light">
                                            <tr>
                                                <th>Category</th>
                                                <th>Customer</th>
                                                <th>Expense Date</th>
                                                <th>Amount</th>
                                                <th>Status</th>
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
                                                        <td>{item.amount}</td>
                                                        <td>{status}</td>
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
export default ExpenseReport;
