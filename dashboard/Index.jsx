import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import recentinvoices from "../json/recentinvoices";
import recentestimates from "../json/recentestimates";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";

const Dashboard = () => {
    const salesOptions = {
            colors: ["#7638ff", "#fda600"],
            chart: {
                type: "bar",
                fontFamily: "Poppins, sans-serif",
                height: 350,
                toolbar: {
                    show: false,
                },
            },
            series: [
                {
                    name: "Received",
                    type: "column",
                    data: [
                        70, 150, 80, 180, 150, 175, 201, 60, 200, 120, 190, 160,
                        50,
                    ],
                },
                {
                    name: "Pending",
                    type: "column",
                    data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16, 80],
                },
            ],
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: "60%",
                    endingShape: "rounded",
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                width: 2,
                colors: ["transparent"],
            },
            xaxis: {
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                ],
            },
            yaxis: {
                title: {
                    text: "$ (thousands)",
                },
            },
            fill: {
                opacity: 1,
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return "$ " + val + " thousands";
                    },
                },
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200,
                        },
                        legend: {
                            position: "bottom",
                        },
                    },
                },
            ],
        },
        invoiceOptions = {
            colors: ["#7638ff", "#ff737b", "#fda600", "#1ec1b0"],
            chart: {
                fontFamily: "Poppins, sans-serif",
                height: 350,
                type: "donut",
            },
            series: [55, 40, 20, 10],
            labels: ["Paid", "Unpaid", "Overdue", "Draft"],
            legend: { show: false },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200,
                        },
                        legend: {
                            position: "bottom",
                        },
                    },
                },
            ],
        },
        recentestimates_ = recentestimates,
        recentinvoices_ = recentinvoices;

    useEffect(() => {
        if (document) {
            const ApexCharts = require("apexcharts");
            console.log(ApexCharts);

            let salesColumn = document.getElementById("sales_chart");
            let salesChart = new ApexCharts(salesColumn, salesOptions);
            salesChart.render();
            let invoiceColumn = document.getElementById("invoice_chart");
            let invoiceChart = new ApexCharts(invoiceColumn, invoiceOptions);
            invoiceChart.render();
        }
    }, []);

    return (
        <div className="page-wrapper">
            <div className="content container-fluid">
                <div className="row">
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="dash-widget-header">
                                    <span className="dash-widget-icon bg-1">
                                        <i className="fas fa-dollar-sign"></i>
                                    </span>
                                    <div className="dash-count">
                                        <div className="dash-title">
                                            Amount Due
                                        </div>
                                        <div className="dash-counts">
                                            <p>1,642</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress progress-sm mt-3">
                                    <div
                                        className="progress-bar bg-5"
                                        role="progressbar"
                                        style={{ width: "75%" }}
                                        aria-valuenow="75"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                                <p className="text-muted mt-3 mb-0">
                                    <span className="text-danger mr-1">
                                        <i className="fas fa-arrow-down mr-1"></i>
                                        1.15%
                                    </span>{" "}
                                    since last week
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="dash-widget-header">
                                    <span className="dash-widget-icon bg-2">
                                        <i className="fas fa-users"></i>
                                    </span>
                                    <div className="dash-count">
                                        <div className="dash-title">
                                            Customers
                                        </div>
                                        <div className="dash-counts">
                                            <p>3,642</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress progress-sm mt-3">
                                    <div
                                        className="progress-bar bg-6"
                                        role="progressbar"
                                        style={{ width: "65%" }}
                                        aria-valuenow="75"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                                <p className="text-muted mt-3 mb-0">
                                    <span className="text-success mr-1">
                                        <i className="fas fa-arrow-up mr-1"></i>
                                        2.37%
                                    </span>{" "}
                                    since last week
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="dash-widget-header">
                                    <span className="dash-widget-icon bg-3">
                                        <i className="fas fa-file-alt"></i>
                                    </span>
                                    <div className="dash-count">
                                        <div className="dash-title">
                                            Invoices
                                        </div>
                                        <div className="dash-counts">
                                            <p>1,041</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress progress-sm mt-3">
                                    <div
                                        className="progress-bar bg-7"
                                        role="progressbar"
                                        style={{ width: "85%" }}
                                        aria-valuenow="75"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                                <p className="text-muted mt-3 mb-0">
                                    <span className="text-success mr-1">
                                        <i className="fas fa-arrow-up mr-1"></i>
                                        3.77%
                                    </span>{" "}
                                    since last week
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="dash-widget-header">
                                    <span className="dash-widget-icon bg-4">
                                        <i className="far fa-file"></i>
                                    </span>
                                    <div className="dash-count">
                                        <div className="dash-title">
                                            Estimates
                                        </div>
                                        <div className="dash-counts">
                                            <p>2,150</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress progress-sm mt-3">
                                    <div
                                        className="progress-bar bg-8"
                                        role="progressbar"
                                        style={{ width: "45%" }}
                                        aria-valuenow="75"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                                <p className="text-muted mt-3 mb-0">
                                    <span className="text-danger mr-1">
                                        <i className="fas fa-arrow-down mr-1"></i>
                                        8.68%
                                    </span>{" "}
                                    since last week
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-7 d-flex">
                        <div className="card flex-fill">
                            <div className="card-header">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="card-title">
                                        Sales Analytics
                                    </h5>
                                    <div
                                        className="dropdown"
                                        data-toggle="dropdown"
                                    >
                                        <a
                                            href="#"
                                            className="btn btn-white btn-sm dropdown-toggle"
                                            role="button"
                                            data-toggle="dropdown"
                                        >
                                            Monthly
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                Weekly
                                            </a>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                Monthly
                                            </a>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                Yearly
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between flex-wrap flex-md-nowrap">
                                    <div className="w-md-100 d-flex align-items-center mb-3">
                                        <div>
                                            <span>Total Sales</span>
                                            <p className="h3 text-primary mr-5">
                                                $1000
                                            </p>
                                        </div>
                                        <div>
                                            <span>Receipts</span>
                                            <p className="h3 text-success mr-5">
                                                $1000
                                            </p>
                                        </div>
                                        <div>
                                            <span>Expenses</span>
                                            <p className="h3 text-danger mr-5">
                                                $300
                                            </p>
                                        </div>
                                        <div>
                                            <span>Earnings</span>
                                            <p className="h3 text-dark mr-5">
                                                $700
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div id="sales_chart"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 d-flex">
                        <div className="card flex-fill">
                            <div className="card-header">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="card-title">
                                        Invoice Analytics
                                    </h5>
                                    <div
                                        className="dropdown"
                                        data-toggle="dropdown"
                                    >
                                        <a
                                            href="#"
                                            className="btn btn-white btn-sm dropdown-toggle"
                                            role="button"
                                            data-toggle="dropdown"
                                        >
                                            Monthly
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                Weekly
                                            </a>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                Monthly
                                            </a>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                Yearly
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div id="invoice_chart"></div>
                                <div className="text-center text-muted">
                                    <div className="row">
                                        <div className="col-4">
                                            <div className="mt-4">
                                                <p className="mb-2 text-truncate">
                                                    <i className="fas fa-circle text-primary mr-1"></i>{" "}
                                                    Invoiced
                                                </p>
                                                <h5>$ 2,132</h5>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="mt-4">
                                                <p className="mb-2 text-truncate">
                                                    <i className="fas fa-circle text-success mr-1"></i>{" "}
                                                    Received
                                                </p>
                                                <h5>$ 1,763</h5>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="mt-4">
                                                <p className="mb-2 text-truncate">
                                                    <i className="fas fa-circle text-danger mr-1"></i>{" "}
                                                    Pending
                                                </p>
                                                <h5>$ 973</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <div className="card">
                            <div className="card-header">
                                <div className="row">
                                    <div className="col">
                                        <h5 className="card-title">
                                            Recent Invoices
                                        </h5>
                                    </div>
                                    <div className="col-auto">
                                        <Link href="/invoices">
                                            <a className="btn-right btn btn-sm btn-outline-primary">
                                                View All
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="mb-3">
                                    <div className="progress progress-md rounded-pill mb-3">
                                        <div
                                            className="progress-bar bg-success"
                                            role="progressbar"
                                            style={{ width: "47%" }}
                                            aria-valuenow="47"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        ></div>
                                        <div
                                            className="progress-bar bg-warning"
                                            role="progressbar"
                                            style={{ width: "28%" }}
                                            aria-valuenow="28"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        ></div>
                                        <div
                                            className="progress-bar bg-danger"
                                            role="progressbar"
                                            style={{ width: "15%" }}
                                            aria-valuenow="15"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        ></div>
                                        <div
                                            className="progress-bar bg-info"
                                            role="progressbar"
                                            style={{ width: "10%" }}
                                            aria-valuenow="10"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        ></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-auto">
                                            <i className="fas fa-circle text-success mr-1"></i>{" "}
                                            Paid
                                        </div>
                                        <div className="col-auto">
                                            <i className="fas fa-circle text-warning mr-1"></i>{" "}
                                            Unpaid
                                        </div>
                                        <div className="col-auto">
                                            <i className="fas fa-circle text-danger mr-1"></i>{" "}
                                            Overdue
                                        </div>
                                        <div className="col-auto">
                                            <i className="fas fa-circle text-info mr-1"></i>{" "}
                                            Draft
                                        </div>
                                    </div>
                                </div>

                                <div className="table-responsive">
                                    <table className="table table-stripped table-hover">
                                        <thead className="thead-light">
                                            <tr>
                                                <th>Customer</th>
                                                <th>Amount</th>
                                                <th>Due Date</th>
                                                <th>Status</th>
                                                <th className="text-right">
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {recentinvoices_.map(
                                                (item, index) => {
                                                    let status;
                                                    if (
                                                        item.status === "Paid"
                                                    ) {
                                                        status = (
                                                            <span className="badge bg-success-light">
                                                                {item.status}
                                                            </span>
                                                        );
                                                    } else if (
                                                        item.status === "Sent"
                                                    ) {
                                                        status = (
                                                            <span className="badge bg-info-light">
                                                                {item.status}
                                                            </span>
                                                        );
                                                    } else if (
                                                        item.status ===
                                                        "Partially Paid"
                                                    ) {
                                                        status = (
                                                            <span className="badge bg-warning-light">
                                                                {item.status}
                                                            </span>
                                                        );
                                                    } else if (
                                                        item.status ===
                                                        "Overdue"
                                                    ) {
                                                        status = (
                                                            <span className="badge bg-danger-light">
                                                                {item.status}
                                                            </span>
                                                        );
                                                    }

                                                    return (
                                                        <tr key={index}>
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
                                                                                        item.image
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
                                                                {item.amount}
                                                            </td>
                                                            <td>
                                                                {item.due_date}
                                                            </td>
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
                                                                            href=""
                                                                        >
                                                                            <i className="far fa-trash-alt mr-2"></i>
                                                                            Delete
                                                                        </a>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href=""
                                                                        >
                                                                            <i className="far fa-check-circle mr-2"></i>
                                                                            Mark
                                                                            as
                                                                            sent
                                                                        </a>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href=""
                                                                        >
                                                                            <i className="far fa-paper-plane mr-2"></i>
                                                                            Send
                                                                            Invoice
                                                                        </a>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href=""
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
                                                }
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <div className="card">
                            <div className="card-header">
                                <div className="row">
                                    <div className="col">
                                        <h5 className="card-title">
                                            Recent Estimates
                                        </h5>
                                    </div>
                                    <div className="col-auto">
                                        <Link href="/estimates">
                                            <a className="btn-right btn btn-sm btn-outline-primary">
                                                View All
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="mb-3">
                                    <div className="progress progress-md rounded-pill mb-3">
                                        <div
                                            className="progress-bar bg-success"
                                            role="progressbar"
                                            style={{ width: "39%" }}
                                            aria-valuenow="39"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        ></div>
                                        <div
                                            className="progress-bar bg-danger"
                                            role="progressbar"
                                            style={{ width: "35%" }}
                                            aria-valuenow="35"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        ></div>
                                        <div
                                            className="progress-bar bg-warning"
                                            role="progressbar"
                                            style={{ width: "26%" }}
                                            aria-valuenow="26"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        ></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-auto">
                                            <i className="fas fa-circle text-success mr-1"></i>{" "}
                                            Sent
                                        </div>
                                        <div className="col-auto">
                                            <i className="fas fa-circle text-warning mr-1"></i>{" "}
                                            Draft
                                        </div>
                                        <div className="col-auto">
                                            <i className="fas fa-circle text-danger mr-1"></i>{" "}
                                            Expired
                                        </div>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead className="thead-light">
                                            <tr>
                                                <th>Customer</th>
                                                <th>Expiry Date</th>
                                                <th>Amount</th>
                                                <th>Status</th>
                                                <th className="text-right">
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {recentestimates_.map(
                                                (item, index) => {
                                                    let status;
                                                    if (
                                                        item.status === "Sent"
                                                    ) {
                                                        status = (
                                                            <span className="badge bg-info-light">
                                                                {item.status}
                                                            </span>
                                                        );
                                                    } else if (
                                                        item.status ===
                                                        "Expired"
                                                    ) {
                                                        status = (
                                                            <span className="badge bg-warning-light">
                                                                {item.status}
                                                            </span>
                                                        );
                                                    } else {
                                                        status = (
                                                            <span className="badge bg-success-light">
                                                                {item.status}
                                                            </span>
                                                        );
                                                    }
                                                    return (
                                                        <tr key={index}>
                                                            <td>
                                                                <h2 className="table-avatar">
                                                                    <a href="/profile">
                                                                        <div className="mr-2 w-10 h-10 inline avatar avatar-sm avatar-img">
                                                                            <Image
                                                                                width="40"
                                                                                height="40"
                                                                                className="rounded-circle"
                                                                                src={
                                                                                    item.image
                                                                                }
                                                                                alt="User Image"
                                                                            />
                                                                        </div>
                                                                        {
                                                                            item.customer_name
                                                                        }
                                                                    </a>
                                                                </h2>
                                                            </td>
                                                            <td>
                                                                {
                                                                    item.expiry_date
                                                                }
                                                            </td>
                                                            <td>
                                                                {item.amount}
                                                            </td>
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
                                                                        <Link href="/edit-invoice">
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
                                                                            Mark
                                                                            as
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
                                                                            Mark
                                                                            as
                                                                            Accepted
                                                                        </a>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="#"
                                                                        >
                                                                            <i className="far fa-times-circle mr-2"></i>
                                                                            Mark
                                                                            as
                                                                            Rejected
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    );
                                                }
                                            )}
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
export default Dashboard;
