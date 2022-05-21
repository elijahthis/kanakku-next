import React, { useEffect, useState } from "react";
import Link from "next/link";
import Select2 from "react-select2-wrapper";
import reports from "../json/report";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import $ from "jquery";

const SalesReport = () => {
    const [date_range_, setdaterange] = useState([
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
        $("#salesreporttable").DataTable({
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
                            <h3 className="page-title">Sales Report</h3>
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
                                        id="salesreporttable"
                                    >
                                        <thead className="thead-light">
                                            <tr>
                                                <th>#</th>
                                                <th>Date</th>
                                                <th>Category</th>
                                                <th>Sales</th>
                                                <th>Refunded</th>
                                                <th>Discounts</th>
                                                <th>Taxs</th>
                                                <th>Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {reports.map((item, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{item.id}</td>
                                                        <td>{item.date}</td>
                                                        <td>{item.category}</td>
                                                        <td>{item.sales}</td>
                                                        <td>{item.refunded}</td>
                                                        <td>
                                                            {item.discounts}
                                                        </td>
                                                        <td>{item.taxr}</td>
                                                        <td>{item.amount}</td>
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
export default SalesReport;
