import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import img1 from "../assets/img/profiles/avatar-01.jpg";
import img2 from "../assets/img/profiles/avatar-02.jpg";
import img3 from "../assets/img/profiles/avatar-03.jpg";
import img4 from "../assets/img/profiles/avatar-04.jpg";

const Components = () => {
    return (
        <div className="page-wrapper">
            <div className="content container-fluid">
                <div className="page-header">
                    <div className="row">
                        <div className="col">
                            <h3 className="page-title">Components</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link href="/">Dashboard</Link>
                                </li>
                                <li className="breadcrumb-item active">
                                    Components
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="comp-sec-wrapper">
                    {/* Avatar */}
                    <section className="comp-section">
                        <div className="section-header">
                            <h3 className="section-title">Avatar</h3>
                            <div className="line" />
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card bg-white">
                                    <div className="card-header">
                                        <h5 className="card-title">Sizing</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="avatar avatar-xxl">
                                            <Image
                                                className="avatar-img rounded-circle"
                                                alt="User Image"
                                                src={img2}
                                            />
                                        </div>
                                        <div className="avatar avatar-xl">
                                            <span className="avatar-img ">
                                                <Image
                                                    alt="User Image"
                                                    className="rounded-circle"
                                                    src={img2}
                                                />
                                            </span>
                                        </div>
                                        <div className="avatar avatar-lg">
                                            <Image
                                                className="avatar-img rounded-circle"
                                                alt="User Image"
                                                src={img2}
                                            />
                                        </div>
                                        <div className="avatar">
                                            <Image
                                                className="avatar-img rounded-circle"
                                                alt="User Image"
                                                src={img2}
                                            />
                                        </div>
                                        <div className="avatar avatar-sm">
                                            <Image
                                                className="avatar-img rounded-circle"
                                                alt="User Image"
                                                src={img2}
                                            />
                                        </div>
                                        <div className="avatar avatar-xs">
                                            <Image
                                                className="avatar-img rounded-circle"
                                                alt="User Image"
                                                src={img2}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="card bg-white">
                                    <div className="card-header">
                                        <h5 className="card-title">
                                            Avatar With Status
                                        </h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="avatar avatar-online">
                                            <Image
                                                className="avatar-img rounded-circle"
                                                alt="User Image"
                                                src={img2}
                                            />
                                        </div>
                                        <div className="avatar avatar-offline">
                                            <Image
                                                className="avatar-img rounded-circle"
                                                alt="User Image"
                                                src={img2}
                                            />
                                        </div>
                                        <div className="avatar avatar-away">
                                            <Image
                                                className="avatar-img rounded-circle"
                                                alt="User Image"
                                                src={img2}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="card bg-white">
                                    <div className="card-header">
                                        <h5 className="card-title">Shape</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="avatar">
                                            <Image
                                                className="avatar-img rounded"
                                                alt="User Image"
                                                src={img2}
                                            />
                                        </div>
                                        <div className="avatar">
                                            <Image
                                                className="avatar-img rounded-circle"
                                                alt="User Image"
                                                src={img2}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="card bg-white">
                                    <div className="card-header">
                                        <h5 className="card-title">Group</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="avatar-group">
                                            <div className="avatar">
                                                <Image
                                                    className="avatar-img rounded-circle border border-white"
                                                    alt="User Image"
                                                    src={img2}
                                                />
                                            </div>
                                            <div className="avatar">
                                                <Image
                                                    className="avatar-img rounded-circle border border-white"
                                                    alt="User Image"
                                                    src={img3}
                                                />
                                            </div>
                                            <div className="avatar">
                                                <Image
                                                    className="avatar-img rounded-circle border border-white"
                                                    alt="User Image"
                                                    src={img4}
                                                />
                                            </div>
                                            <div className="avatar">
                                                <span className="avatar-title rounded-circle border border-white">
                                                    CF
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* /Avatar */}
                    {/* Alerts */}
                    <section className="comp-section">
                        <div className="section-header">
                            <h3 className="section-title">Alerts</h3>
                            <div className="line" />
                        </div>
                        <div className="card bg-white">
                            <div className="card-body">
                                <div
                                    className="alert alert-primary alert-dismissible fade show"
                                    role="alert"
                                >
                                    <strong>Holy guacamole!</strong> You should
                                    check in on some of those fields below.
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="alert"
                                        aria-label="Close"
                                    />
                                </div>
                                <div
                                    className="alert alert-secondary alert-dismissible fade show"
                                    role="alert"
                                >
                                    <strong>Holy guacamole!</strong> You should
                                    check in on some of those fields below.
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="alert"
                                        aria-label="Close"
                                    />
                                </div>
                                <div
                                    className="alert alert-success alert-dismissible fade show"
                                    role="alert"
                                >
                                    <strong>Holy guacamole!</strong> You should
                                    check in on some of those fields below.
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="alert"
                                        aria-label="Close"
                                    />
                                </div>
                                <div
                                    className="alert alert-danger alert-dismissible fade show"
                                    role="alert"
                                >
                                    <strong>Holy guacamole!</strong> You should
                                    check in on some of those fields below.
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="alert"
                                        aria-label="Close"
                                    />
                                </div>
                                <div
                                    className="alert alert-warning alert-dismissible fade show"
                                    role="alert"
                                >
                                    <strong>Holy guacamole!</strong> You should
                                    check in on some of those fields below.
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="alert"
                                        aria-label="Close"
                                    />
                                </div>
                                <div
                                    className="alert alert-info alert-dismissible fade show"
                                    role="alert"
                                >
                                    <strong>Holy guacamole!</strong> You should
                                    check in on some of those fields below.
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="alert"
                                        aria-label="Close"
                                    />
                                </div>
                                <div
                                    className="alert alert-light alert-dismissible fade show"
                                    role="alert"
                                >
                                    <strong>Holy guacamole!</strong> You should
                                    check in on some of those fields below.
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="alert"
                                        aria-label="Close"
                                    />
                                </div>
                                <div
                                    className="alert alert-dark alert-dismissible fade show"
                                    role="alert"
                                >
                                    <strong>Holy guacamole!</strong> You should
                                    check in on some of those fields below.
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="alert"
                                        aria-label="Close"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* /Alerts */}
                    {/* Breadcrumbs */}
                    <section className="comp-section">
                        <div className="section-header">
                            <h3 className="section-title">Breadcrumbs</h3>
                            <div className="line" />
                        </div>
                        <div className="card bg-white">
                            <div className="card-body">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li
                                            className="breadcrumb-item active"
                                            aria-current="page"
                                        >
                                            Home
                                        </li>
                                    </ol>
                                </nav>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="#">Home</a>
                                        </li>
                                        <li
                                            className="breadcrumb-item active"
                                            aria-current="page"
                                        >
                                            Products
                                        </li>
                                    </ol>
                                </nav>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb mb-0">
                                        <li className="breadcrumb-item">
                                            <a href="#">Home</a>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <a href="#">Products</a>
                                        </li>
                                        <li
                                            className="breadcrumb-item active"
                                            aria-current="page"
                                        >
                                            Accessories
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </section>
                    {/* /Breadcrumbs */}
                    {/* Buttons */}
                    <section className="comp-section comp-buttons">
                        <div className="section-header">
                            <h3 className="section-title">Buttons</h3>
                            <div className="line" />
                        </div>
                        <div className="card bg-white">
                            <div className="card-body">
                                <h5 className="card-title">Default Button</h5>
                                <button
                                    type="button"
                                    className="btn btn-primary mr-1"
                                >
                                    Primary
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-secondary mr-1"
                                >
                                    Secondary
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-success mr-1"
                                >
                                    Success
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-danger mr-1"
                                >
                                    Danger
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-warning mr-1"
                                >
                                    Warning
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-info mr-1"
                                >
                                    Info
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-light mr-1"
                                >
                                    Light
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-dark mr-1"
                                >
                                    Dark
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-link mr-1"
                                >
                                    Link
                                </button>
                                <hr />
                                <h5 className="card-title">Button Sizes</h5>
                                <p>
                                    <button
                                        type="button"
                                        className="btn btn-primary btn-lg mr-1"
                                    >
                                        Primary
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-secondary btn-lg mr-1"
                                    >
                                        Secondary
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-success btn-lg mr-1"
                                    >
                                        Success
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-danger btn-lg mr-1"
                                    >
                                        Danger
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-warning btn-lg mr-1"
                                    >
                                        Warning
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-info btn-lg mr-1"
                                    >
                                        Info
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-light btn-lg mr-1"
                                    >
                                        Light
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-dark btn-lg mr-1"
                                    >
                                        Dark
                                    </button>
                                </p>
                                <p>
                                    <button
                                        type="button"
                                        className="btn btn-primary mr-1"
                                    >
                                        Primary
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-secondary mr-1"
                                    >
                                        Secondary
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-success mr-1"
                                    >
                                        Success
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-danger mr-1"
                                    >
                                        Danger
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-warning mr-1"
                                    >
                                        Warning
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-info mr-1"
                                    >
                                        Info
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-light mr-1"
                                    >
                                        Light
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-dark mr-1"
                                    >
                                        Dark
                                    </button>
                                </p>
                                <p>
                                    <button
                                        type="button"
                                        className="btn btn-primary btn-sm mr-1"
                                    >
                                        Primary
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-secondary btn-sm mr-1"
                                    >
                                        Secondary
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-success btn-sm mr-1"
                                    >
                                        Success
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-danger btn-sm mr-1"
                                    >
                                        Danger
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-warning btn-sm mr-1"
                                    >
                                        Warning
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-info btn-sm mr-1"
                                    >
                                        Info
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-light btn-sm mr-1"
                                    >
                                        Light
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-dark btn-sm mr-1"
                                    >
                                        Dark
                                    </button>
                                </p>
                                <hr />
                                <h5 className="card-title">Button Groups</h5>
                                <div className="btn-toolbar">
                                    <div className="btn-group btn-group-lg">
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                        >
                                            Left
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                        >
                                            Middle
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                        >
                                            Right
                                        </button>
                                    </div>
                                </div>
                                <br />
                                <div className="btn-toolbar">
                                    <div className="btn-group">
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                        >
                                            Left
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                        >
                                            Middle
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                        >
                                            Right
                                        </button>
                                    </div>
                                </div>
                                <br />
                                <div className="btn-toolbar">
                                    <div className="btn-group btn-group-sm">
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                        >
                                            Left
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                        >
                                            Middle
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                        >
                                            Right
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Rounded Button */}
                        <div className="card bg-white">
                            <div className="card-header">
                                <h5 className="card-title">Rounded Button</h5>
                                <p className="card-text">
                                    use <code>.btn-rounded</code> in class{" "}
                                    <code>.btn</code> class to get Rounded
                                    button
                                </p>
                            </div>
                            <div className="card-body">
                                <button
                                    type="button"
                                    className="btn btn-rounded btn-primary mr-1"
                                >
                                    Primary
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-rounded btn-secondary mr-1"
                                >
                                    Secondary
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-rounded btn-success mr-1"
                                >
                                    Success
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-rounded btn-danger mr-1"
                                >
                                    Danger
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-rounded btn-warning mr-1"
                                >
                                    Warning
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-rounded btn-info mr-1"
                                >
                                    Info
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-rounded btn-light mr-1"
                                >
                                    Light
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-rounded btn-dark mr-1"
                                >
                                    Dark
                                </button>
                                <hr />
                                <p>
                                    use <code>.btn-rounded</code> in class{" "}
                                    <code>.btn-outline-*</code> class to get
                                    Rounded Outline button
                                </p>
                                <button
                                    type="button"
                                    className="btn btn-rounded btn-outline-primary mr-1"
                                >
                                    Primary
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-rounded btn-outline-secondary mr-1"
                                >
                                    Secondary
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-rounded btn-outline-success mr-1"
                                >
                                    Success
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-rounded btn-outline-danger mr-1"
                                >
                                    Danger
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-rounded btn-outline-warning mr-1"
                                >
                                    Warning
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-rounded btn-outline-info mr-1"
                                >
                                    Info
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-rounded btn-outline-light mr-1"
                                >
                                    Light
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-rounded btn-outline-dark mr-1"
                                >
                                    Dark
                                </button>
                            </div>
                        </div>
                        {/* /Rounded Button */}
                        {/* Outline Buttons */}
                        <div className="card bg-white">
                            <div className="card-header">
                                <h5 className="card-title">Outline Buttons</h5>
                                <p className="card-text">
                                    Use <code>.btn-outline-*</code> class for
                                    outline buttons.
                                </p>
                            </div>
                            <div className="card-body">
                                <div className="row row-sm align-items-center">
                                    <div className="col-12 col-xl mb-3 mb-xl-0">
                                        Normal
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                        <button
                                            type="button"
                                            className="btn btn-block btn-outline-primary"
                                        >
                                            Primary
                                        </button>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                        <button
                                            type="button"
                                            className="btn btn-block btn-outline-secondary"
                                        >
                                            Secondary
                                        </button>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                        <button
                                            type="button"
                                            className="btn btn-block btn-outline-success"
                                        >
                                            Success
                                        </button>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                        <button
                                            type="button"
                                            className="btn btn-block btn-outline-warning"
                                        >
                                            Warning
                                        </button>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                        <button
                                            type="button"
                                            className="btn btn-block btn-outline-danger"
                                        >
                                            Danger
                                        </button>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                        <button
                                            type="button"
                                            className="btn btn-block btn-outline-info"
                                        >
                                            Info
                                        </button>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                        <button
                                            type="button"
                                            className="btn btn-block btn-outline-light"
                                        >
                                            Light
                                        </button>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                        <button
                                            type="button"
                                            className="btn btn-block btn-outline-dark"
                                        >
                                            Dark
                                        </button>
                                    </div>
                                </div>
                                <div className="row row-sm align-items-center mt-3">
                                    <div className="col-12 col-xl mb-3 mb-xl-0">
                                        Active
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                        <button
                                            type="button"
                                            className="btn btn-block btn-outline-primary active"
                                        >
                                            Primary
                                        </button>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                        <button
                                            type="button"
                                            className="btn btn-block btn-outline-secondary active"
                                        >
                                            Secondary
                                        </button>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                        <button
                                            type="button"
                                            className="btn btn-block btn-outline-success active"
                                        >
                                            Success
                                        </button>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                        <button
                                            type="button"
                                            className="btn btn-block btn-outline-warning active"
                                        >
                                            Warning
                                        </button>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                        <button
                                            type="button"
                                            className="btn btn-block btn-outline-danger active"
                                        >
                                            Danger
                                        </button>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                        <button
                                            type="button"
                                            className="btn btn-block btn-outline-info active"
                                        >
                                            Info
                                        </button>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                        <button
                                            type="button"
                                            className="btn btn-block btn-outline-light active"
                                        >
                                            Light
                                        </button>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                        <button
                                            type="button"
                                            className="btn btn-block btn-outline-dark active"
                                        >
                                            Dark
                                        </button>
                                    </div>
                                </div>
                                <div className="row row-sm align-items-center mt-3">
                                    <div className="col-12 col-xl mb-3 mb-xl-0">
                                        Disabled
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                        <button
                                            disabled
                                            type="button"
                                            className="btn btn-block btn-outline-primary"
                                        >
                                            Primary
                                        </button>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                        <button
                                            disabled
                                            type="button"
                                            className="btn btn-block btn-outline-secondary"
                                        >
                                            Secondary
                                        </button>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                        <button
                                            disabled
                                            type="button"
                                            className="btn btn-block btn-outline-success"
                                        >
                                            Success
                                        </button>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                        <button
                                            disabled
                                            type="button"
                                            className="btn btn-block btn-outline-warning"
                                        >
                                            Warning
                                        </button>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                        <button
                                            disabled
                                            type="button"
                                            className="btn btn-block btn-outline-danger"
                                        >
                                            Danger
                                        </button>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                        <button
                                            disabled
                                            type="button"
                                            className="btn btn-block btn-outline-info"
                                        >
                                            Info
                                        </button>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                        <button
                                            disabled
                                            type="button"
                                            className="btn btn-block btn-outline-light"
                                        >
                                            Light
                                        </button>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                        <button
                                            disabled
                                            type="button"
                                            className="btn btn-block btn-outline-dark"
                                        >
                                            Dark
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Outline Buttons */}
                        {/* Progress Button */}
                        <div className="card mb-4">
                            <div className="card-header">
                                <h5 className="card-title">Progress Button</h5>
                            </div>
                            <div className="card-body bg-white">
                                <button
                                    type="button"
                                    className="btn btn-primary mr-1"
                                >
                                    <span
                                        className="spinner-border spinner-border-sm mr-2"
                                        role="status"
                                    />
                                    Primary
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-secondary mr-1"
                                >
                                    <span
                                        className="spinner-border spinner-border-sm mr-2"
                                        role="status"
                                    />
                                    Secondary
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-success mr-1"
                                >
                                    <span
                                        className="spinner-border spinner-border-sm mr-2"
                                        role="status"
                                    />
                                    Success
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-danger mr-1"
                                >
                                    <span
                                        className="spinner-border spinner-border-sm mr-2"
                                        role="status"
                                    />
                                    Danger
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-warning mr-1"
                                >
                                    <span
                                        className="spinner-border spinner-border-sm mr-2"
                                        role="status"
                                    />
                                    Warning
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-info mr-1"
                                >
                                    <span
                                        className="spinner-border spinner-border-sm mr-2"
                                        role="status"
                                    />
                                    Info
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-dark mr-1"
                                >
                                    <span
                                        className="spinner-border spinner-border-sm mr-2"
                                        role="status"
                                    />
                                    Dark
                                </button>
                            </div>
                        </div>
                        {/* /Progress Button */}
                    </section>
                    {/* Buttons */}
                    {/* Cards */}
                    <section className="comp-section comp-cards">
                        <div className="section-header">
                            <h3 className="section-title">Cards</h3>
                            <div className="line" />
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-4 d-flex">
                                <div className="card flex-fill bg-white">
                                    <Image
                                        alt="Card Image"
                                        src={img1}
                                        className="card-img-top"
                                    />
                                    <div className="card-header">
                                        <h5 className="card-title mb-0">
                                            Card with image and links
                                        </h5>
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">
                                            Some quick example text to build on
                                            the card title and make up the bulk
                                            of the card&apos;s content.
                                        </p>
                                        <a className="card-link" href="#">
                                            Card link
                                        </a>
                                        <a className="card-link" href="#">
                                            Another link
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 d-flex">
                                <div className="card flex-fill bg-white">
                                    <Image
                                        alt="Card Image"
                                        src={img1}
                                        className="card-img-top"
                                    />
                                    <div className="card-header">
                                        <h5 className="card-title mb-0">
                                            Card with image and button
                                        </h5>
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">
                                            Some quick example text to build on
                                            the card title and make up the bulk
                                            of the card&apos;s content.
                                        </p>
                                        <a className="btn btn-primary" href="#">
                                            Go somewhere
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 d-flex">
                                <div className="card flex-fill bg-white">
                                    <Image
                                        alt="Card Image"
                                        src={img1}
                                        className="card-img-top"
                                    />
                                    <div className="card-header">
                                        <h5 className="card-title mb-0">
                                            Card with image and list
                                        </h5>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            Cras justo odio
                                        </li>
                                        <li className="list-group-item">
                                            Dapibus ac facilisis in
                                        </li>
                                        <li className="list-group-item">
                                            Vestibulum at eros
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-4 d-flex">
                                <div className="card flex-fill bg-white">
                                    <div className="card-header">
                                        <h5 className="card-title mb-0">
                                            Card with links
                                        </h5>
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">
                                            Some quick example text to build on
                                            the card title and make up the bulk
                                            of the card&apos;s content.
                                        </p>
                                        <a className="card-link" href="#">
                                            Card link
                                        </a>
                                        <a className="card-link" href="#">
                                            Another link
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 d-flex">
                                <div className="card flex-fill bg-white">
                                    <div className="card-header">
                                        <h5 className="card-title mb-0">
                                            Card with button
                                        </h5>
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">
                                            Some quick example text to build on
                                            the card title and make up the bulk
                                            of the card&apos;s content.
                                        </p>
                                        <a className="btn btn-primary" href="#">
                                            Go somewhere
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 d-flex">
                                <div className="card flex-fill bg-white">
                                    <div className="card-header">
                                        <h5 className="card-title mb-0">
                                            Card with list
                                        </h5>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            Cras justo odio
                                        </li>
                                        <li className="list-group-item">
                                            Dapibus ac facilisis in
                                        </li>
                                        <li className="list-group-item">
                                            Vestibulum at eros
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-4 d-flex">
                                <div className="card flex-fill bg-white">
                                    <div className="card-header">
                                        This is my header
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Special title treatment
                                        </h5>
                                        <p className="card-text">
                                            Some quick example text to build on
                                            the card title and make up the bulk
                                            of the card&apos;s content.
                                        </p>
                                    </div>
                                    <div className="card-footer text-muted">
                                        This is my footer
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 d-flex">
                                <div className="card flex-fill bg-white">
                                    <div className="card-header">
                                        <ul
                                            role="tablist"
                                            className="nav nav-tabs card-header-tabs float-right"
                                        >
                                            <li className="nav-item">
                                                <a
                                                    href="#tab-1"
                                                    data-bs-toggle="tab"
                                                    className="nav-link active"
                                                >
                                                    Active
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    href="#tab-2"
                                                    data-bs-toggle="tab"
                                                    className="nav-link"
                                                >
                                                    Link
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    href="#tab-3"
                                                    data-bs-toggle="tab"
                                                    className="nav-link disabled"
                                                >
                                                    Disabled
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card-body">
                                        <div className="tab-content pt-0">
                                            <div
                                                role="tabpanel"
                                                id="tab-1"
                                                className="tab-pane fade show active"
                                            >
                                                <h5 className="card-title">
                                                    Card with tabs
                                                </h5>
                                                <p className="card-text">
                                                    Some quick example text to
                                                    build on the card title and
                                                    make up the bulk of the
                                                    card&apos;s content.
                                                </p>
                                                <a
                                                    className="btn btn-primary"
                                                    href="#"
                                                >
                                                    Go somewhere
                                                </a>
                                            </div>
                                            <div
                                                role="tabpanel"
                                                id="tab-2"
                                                className="tab-pane fade text-center"
                                            >
                                                <h5 className="card-title">
                                                    Card with tabs
                                                </h5>
                                                <p className="card-text">
                                                    Some quick example text to
                                                    build on the card title and
                                                    make up the bulk of the
                                                    card&apos;s content.
                                                </p>
                                                <a
                                                    className="btn btn-primary"
                                                    href="#"
                                                >
                                                    Go somewhere
                                                </a>
                                            </div>
                                            <div
                                                role="tabpanel"
                                                id="tab-3"
                                                className="tab-pane fade"
                                            >
                                                <h5 className="card-title">
                                                    Card with tabs
                                                </h5>
                                                <p className="card-text">
                                                    Some quick example text to
                                                    build on the card title and
                                                    make up the bulk of the
                                                    card&apos;s content.
                                                </p>
                                                <a
                                                    className="btn btn-primary"
                                                    href="#"
                                                >
                                                    Go somewhere
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 d-flex">
                                <div className="card flex-fill bg-white">
                                    <div className="card-header">
                                        <ul
                                            role="tablist"
                                            className="nav nav-pills card-header-pills float-right"
                                        >
                                            <li className="nav-item">
                                                <a
                                                    href="#tab-4"
                                                    data-bs-toggle="tab"
                                                    className="nav-link active"
                                                >
                                                    Active
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    href="#tab-5"
                                                    data-bs-toggle="tab"
                                                    className="nav-link"
                                                >
                                                    Link
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    href="#tab-6"
                                                    data-bs-toggle="tab"
                                                    className="nav-link disabled"
                                                >
                                                    Disabled
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card-body">
                                        <div className="tab-content pt-0">
                                            <div
                                                role="tabpanel"
                                                id="tab-4"
                                                className="tab-pane fade show active"
                                            >
                                                <h5 className="card-title">
                                                    Card with pills
                                                </h5>
                                                <p className="card-text">
                                                    Some quick example text to
                                                    build on the card title and
                                                    make up the bulk of the
                                                    card&apos;s content.
                                                </p>
                                                <a
                                                    className="btn btn-primary"
                                                    href="#"
                                                >
                                                    Go somewhere
                                                </a>
                                            </div>
                                            <div
                                                role="tabpanel"
                                                id="tab-5"
                                                className="tab-pane fade text-center"
                                            >
                                                <h5 className="card-title">
                                                    Card with pills
                                                </h5>
                                                <p className="card-text">
                                                    Some quick example text to
                                                    build on the card title and
                                                    make up the bulk of the
                                                    card&apos;s content.
                                                </p>
                                                <a
                                                    className="btn btn-primary"
                                                    href="#"
                                                >
                                                    Go somewhere
                                                </a>
                                            </div>
                                            <div
                                                role="tabpanel"
                                                id="tab-6"
                                                className="tab-pane fade"
                                            >
                                                <h5 className="card-title">
                                                    Card with pills
                                                </h5>
                                                <p className="card-text">
                                                    Some quick example text to
                                                    build on the card title and
                                                    make up the bulk of the
                                                    card&apos;s content.
                                                </p>
                                                <a
                                                    className="btn btn-primary"
                                                    href="#"
                                                >
                                                    Go somewhere
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* /Cards */}
                    {/* Dropdowns */}
                    <section className="comp-section comp-dropdowns">
                        <div className="section-header">
                            <h3 className="section-title">Dropdowns</h3>
                            <div className="line" />
                        </div>
                        <div className="card bg-white">
                            <div className="card-body">
                                <h5 className="card-title">
                                    Dropdowns within Text
                                </h5>
                                <div className="dropdown">
                                    <a
                                        className="dropdown-toggle"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        {" "}
                                        Dropdown{" "}
                                    </a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                    </div>
                                </div>
                                <hr />
                                <h5 className="card-title">
                                    Dropdowns within Buttons
                                </h5>
                                <div className="btn-group">
                                    <button
                                        type="button"
                                        className="btn btn-primary dropdown-toggle mr-1"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        Action
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#">
                                            Separated link
                                        </a>
                                    </div>
                                </div>
                                <div className="btn-group">
                                    <button
                                        type="button"
                                        className="btn btn-secondary dropdown-toggle mr-1"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        Action
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#">
                                            Separated link
                                        </a>
                                    </div>
                                </div>
                                <div className="btn-group">
                                    <button
                                        type="button"
                                        className="btn btn-info dropdown-toggle mr-1"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        Action
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#">
                                            Separated link
                                        </a>
                                    </div>
                                </div>
                                <div className="btn-group">
                                    <button
                                        type="button"
                                        className="btn btn-success dropdown-toggle mr-1"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        Action
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#">
                                            Separated link
                                        </a>
                                    </div>
                                </div>
                                <div className="btn-group">
                                    <button
                                        type="button"
                                        className="btn btn-warning dropdown-toggle mr-1"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        Action
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#">
                                            Separated link
                                        </a>
                                    </div>
                                </div>
                                <div className="btn-group">
                                    <button
                                        type="button"
                                        className="btn btn-danger dropdown-toggle mr-1"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        Action
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#">
                                            Separated link
                                        </a>
                                    </div>
                                </div>
                                <hr />
                                <h5 className="card-title">
                                    Split button dropdowns
                                </h5>
                                <div className="btn-group">
                                    <button
                                        type="button"
                                        className="btn btn-primary mr-1"
                                    >
                                        Action
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <span className="sr-only">
                                            Toggle Dropdown
                                        </span>
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#">
                                            Separated link
                                        </a>
                                    </div>
                                </div>
                                <div className="btn-group">
                                    <button
                                        type="button"
                                        className="btn btn-secondary mr-1"
                                    >
                                        Action
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <span className="sr-only">
                                            Toggle Dropdown
                                        </span>
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#">
                                            Separated link
                                        </a>
                                    </div>
                                </div>
                                <div className="btn-group">
                                    <button
                                        type="button"
                                        className="btn btn-info mr-1"
                                    >
                                        Action
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-info dropdown-toggle dropdown-toggle-split"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <span className="sr-only">
                                            Toggle Dropdown
                                        </span>
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#">
                                            Separated link
                                        </a>
                                    </div>
                                </div>
                                <div className="btn-group">
                                    <button
                                        type="button"
                                        className="btn btn-success mr-1"
                                    >
                                        Action
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-success dropdown-toggle dropdown-toggle-split"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <span className="sr-only">
                                            Toggle Dropdown
                                        </span>
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#">
                                            Separated link
                                        </a>
                                    </div>
                                </div>
                                <div className="btn-group">
                                    <button
                                        type="button"
                                        className="btn btn-warning mr-1"
                                    >
                                        Action
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-warning dropdown-toggle dropdown-toggle-split"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <span className="sr-only">
                                            Toggle Dropdown
                                        </span>
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#">
                                            Separated link
                                        </a>
                                    </div>
                                </div>
                                <div className="btn-group">
                                    <button
                                        type="button"
                                        className="btn btn-danger mr-1"
                                    >
                                        Action
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-danger dropdown-toggle dropdown-toggle-split"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <span className="sr-only">
                                            Toggle Dropdown
                                        </span>
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#">
                                            Separated link
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* /Dropdowns */}
                    {/* Pagination */}
                    <section className="comp-section">
                        <div className="section-header">
                            <h3 className="section-title">Pagination</h3>
                            <div className="line" />
                        </div>
                        <div className="card bg-white">
                            <div className="card-body">
                                <div>
                                    <ul className="pagination mb-4">
                                        <li className="page-item disabled">
                                            <a
                                                className="page-link"
                                                href="#"
                                                tabIndex={-1}
                                            >
                                                Previous
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                1
                                            </a>
                                        </li>
                                        <li className="page-item active">
                                            <a className="page-link" href="#">
                                                2{" "}
                                                <span className="sr-only">
                                                    (current)
                                                </span>
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                3
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                Next
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <ul className="pagination mb-4">
                                        <li className="page-item">
                                            <a
                                                className="page-link"
                                                href="#"
                                                aria-label="Previous"
                                            >
                                                <span aria-hidden="true">
                                                    «
                                                </span>
                                                <span className="sr-only">
                                                    Previous
                                                </span>
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                1
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                2
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                3
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a
                                                className="page-link"
                                                href="#"
                                                aria-label="Next"
                                            >
                                                <span aria-hidden="true">
                                                    »
                                                </span>
                                                <span className="sr-only">
                                                    Next
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <ul className="pagination pagination-lg mb-4">
                                        <li className="page-item disabled">
                                            <a
                                                className="page-link"
                                                href="#"
                                                tabIndex={-1}
                                            >
                                                Previous
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                1
                                            </a>
                                        </li>
                                        <li className="page-item active">
                                            <a className="page-link" href="#">
                                                2{" "}
                                                <span className="sr-only">
                                                    (current)
                                                </span>
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                3
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                Next
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <ul className="pagination pagination-sm mb-0">
                                        <li className="page-item disabled">
                                            <a
                                                className="page-link"
                                                href="#"
                                                tabIndex={-1}
                                            >
                                                Previous
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                1
                                            </a>
                                        </li>
                                        <li className="page-item active">
                                            <a className="page-link" href="#">
                                                2{" "}
                                                <span className="sr-only">
                                                    (current)
                                                </span>
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                3
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                Next
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* /Pagination */}
                    {/* Progress */}
                    <section className="comp-section">
                        <div className="section-header">
                            <h3 className="section-title">Progress</h3>
                            <div className="line" />
                        </div>
                        <div className="progress-example card bg-white">
                            <div className="card-header">
                                <h5 className="card-title">
                                    Large Progress Bars
                                </h5>
                            </div>
                            <div className="card-body pb-0">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div>
                                            <div className="progress progress-lg">
                                                <div
                                                    className="progress-bar"
                                                    role="progressbar"
                                                    style={{ width: "10%" }}
                                                    aria-valuenow={75}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                />
                                            </div>
                                            <div className="progress progress-lg">
                                                <div
                                                    className="progress-bar bg-success"
                                                    role="progressbar"
                                                    style={{ width: "25%" }}
                                                    aria-valuenow={25}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                />
                                            </div>
                                            <div className="progress progress-lg">
                                                <div
                                                    className="progress-bar bg-info"
                                                    role="progressbar"
                                                    style={{ width: "50%" }}
                                                    aria-valuenow={50}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                />
                                            </div>
                                            <div className="progress progress-lg">
                                                <div
                                                    className="progress-bar bg-warning"
                                                    role="progressbar"
                                                    style={{ width: "75%" }}
                                                    aria-valuenow={75}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                />
                                            </div>
                                            <div className="progress progress-lg">
                                                <div
                                                    className="progress-bar bg-danger"
                                                    role="progressbar"
                                                    style={{
                                                        width: "100%",
                                                    }}
                                                    aria-valuenow={100}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="progress progress-lg">
                                            <div
                                                className="progress-bar progress-bar-striped"
                                                role="progressbar"
                                                style={{ width: "10%" }}
                                                aria-valuenow={10}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <div className="progress progress-lg">
                                            <div
                                                className="progress-bar progress-bar-striped bg-success"
                                                role="progressbar"
                                                style={{ width: "25%" }}
                                                aria-valuenow={25}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <div className="progress progress-lg">
                                            <div
                                                className="progress-bar progress-bar-striped bg-info"
                                                role="progressbar"
                                                style={{ width: "50%" }}
                                                aria-valuenow={50}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <div className="progress progress-lg">
                                            <div
                                                className="progress-bar progress-bar-striped bg-warning"
                                                role="progressbar"
                                                style={{ width: "75%" }}
                                                aria-valuenow={75}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <div className="progress progress-lg">
                                            <div
                                                className="progress-bar progress-bar-striped bg-danger"
                                                role="progressbar"
                                                style={{ width: "100%" }}
                                                aria-valuenow={100}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="progress-example card bg-white">
                            <div className="card-header">
                                <h5 className="card-title">
                                    Default Progress Bars
                                </h5>
                            </div>
                            <div className="card-body pb-0">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="progress">
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                style={{ width: "10%" }}
                                                aria-valuenow={75}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <div className="progress">
                                            <div
                                                className="progress-bar bg-success"
                                                role="progressbar"
                                                style={{ width: "25%" }}
                                                aria-valuenow={25}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <div className="progress">
                                            <div
                                                className="progress-bar bg-info"
                                                role="progressbar"
                                                style={{ width: "50%" }}
                                                aria-valuenow={50}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <div className="progress">
                                            <div
                                                className="progress-bar bg-warning"
                                                role="progressbar"
                                                style={{ width: "75%" }}
                                                aria-valuenow={75}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <div className="progress">
                                            <div
                                                className="progress-bar bg-danger"
                                                role="progressbar"
                                                style={{ width: "100%" }}
                                                aria-valuenow={100}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="progress">
                                            <div
                                                className="progress-bar progress-bar-striped"
                                                role="progressbar"
                                                style={{ width: "10%" }}
                                                aria-valuenow={10}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <div className="progress">
                                            <div
                                                className="progress-bar progress-bar-striped bg-success"
                                                role="progressbar"
                                                style={{ width: "25%" }}
                                                aria-valuenow={25}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <div className="progress">
                                            <div
                                                className="progress-bar progress-bar-striped bg-info"
                                                role="progressbar"
                                                style={{ width: "50%" }}
                                                aria-valuenow={50}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <div className="progress">
                                            <div
                                                className="progress-bar progress-bar-striped bg-warning"
                                                role="progressbar"
                                                style={{ width: "75%" }}
                                                aria-valuenow={75}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <div className="progress">
                                            <div
                                                className="progress-bar progress-bar-striped bg-danger"
                                                role="progressbar"
                                                style={{ width: "100%" }}
                                                aria-valuenow={100}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="progress-example card bg-white">
                            <div className="card-header">
                                <h5 className="card-title">
                                    Medium Progress Bars
                                </h5>
                            </div>
                            <div className="card-body pb-0">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div>
                                            <div className="progress progress-md">
                                                <div
                                                    className="progress-bar"
                                                    role="progressbar"
                                                    style={{ width: "10%" }}
                                                    aria-valuenow={75}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                />
                                            </div>
                                            <div className="progress progress-md">
                                                <div
                                                    className="progress-bar bg-success"
                                                    role="progressbar"
                                                    style={{ width: "25%" }}
                                                    aria-valuenow={25}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                />
                                            </div>
                                            <div className="progress progress-md">
                                                <div
                                                    className="progress-bar bg-info"
                                                    role="progressbar"
                                                    style={{ width: "50%" }}
                                                    aria-valuenow={50}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                />
                                            </div>
                                            <div className="progress progress-md">
                                                <div
                                                    className="progress-bar bg-warning"
                                                    role="progressbar"
                                                    style={{ width: "75%" }}
                                                    aria-valuenow={75}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                />
                                            </div>
                                            <div className="progress progress-md">
                                                <div
                                                    className="progress-bar bg-danger"
                                                    role="progressbar"
                                                    style={{
                                                        width: "100%",
                                                    }}
                                                    aria-valuenow={100}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="progress progress-md">
                                            <div
                                                className="progress-bar progress-bar-striped"
                                                role="progressbar"
                                                style={{ width: "10%" }}
                                                aria-valuenow={10}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <div className="progress progress-md">
                                            <div
                                                className="progress-bar progress-bar-striped bg-success"
                                                role="progressbar"
                                                style={{ width: "25%" }}
                                                aria-valuenow={25}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <div className="progress progress-md">
                                            <div
                                                className="progress-bar progress-bar-striped bg-info"
                                                role="progressbar"
                                                style={{ width: "50%" }}
                                                aria-valuenow={50}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <div className="progress progress-md">
                                            <div
                                                className="progress-bar progress-bar-striped bg-warning"
                                                role="progressbar"
                                                style={{ width: "75%" }}
                                                aria-valuenow={75}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <div className="progress progress-md">
                                            <div
                                                className="progress-bar progress-bar-striped bg-danger"
                                                role="progressbar"
                                                style={{ width: "100%" }}
                                                aria-valuenow={100}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="progress-example card bg-white">
                            <div className="card-header">
                                <h5 className="card-title">
                                    Small Progress Bars
                                </h5>
                            </div>
                            <div className="card-body pb-0">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div>
                                            <div className="progress progress-sm">
                                                <div
                                                    className="progress-bar"
                                                    role="progressbar"
                                                    style={{ width: "10%" }}
                                                    aria-valuenow={75}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                />
                                            </div>
                                            <div className="progress progress-sm">
                                                <div
                                                    className="progress-bar bg-success"
                                                    role="progressbar"
                                                    style={{ width: "25%" }}
                                                    aria-valuenow={25}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                />
                                            </div>
                                            <div className="progress progress-sm">
                                                <div
                                                    className="progress-bar bg-info"
                                                    role="progressbar"
                                                    style={{ width: "50%" }}
                                                    aria-valuenow={50}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                />
                                            </div>
                                            <div className="progress progress-sm">
                                                <div
                                                    className="progress-bar bg-warning"
                                                    role="progressbar"
                                                    style={{ width: "75%" }}
                                                    aria-valuenow={75}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                />
                                            </div>
                                            <div className="progress progress-sm">
                                                <div
                                                    className="progress-bar bg-danger"
                                                    role="progressbar"
                                                    style={{
                                                        width: "100%",
                                                    }}
                                                    aria-valuenow={100}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="progress progress-sm">
                                            <div
                                                className="progress-bar progress-bar-striped"
                                                role="progressbar"
                                                style={{ width: "10%" }}
                                                aria-valuenow={10}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <div className="progress progress-sm">
                                            <div
                                                className="progress-bar progress-bar-striped bg-success"
                                                role="progressbar"
                                                style={{ width: "25%" }}
                                                aria-valuenow={25}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <div className="progress progress-sm">
                                            <div
                                                className="progress-bar progress-bar-striped bg-info"
                                                role="progressbar"
                                                style={{ width: "50%" }}
                                                aria-valuenow={50}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <div className="progress progress-sm">
                                            <div
                                                className="progress-bar progress-bar-striped bg-warning"
                                                role="progressbar"
                                                style={{ width: "75%" }}
                                                aria-valuenow={75}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <div className="progress progress-sm">
                                            <div
                                                className="progress-bar progress-bar-striped bg-danger"
                                                role="progressbar"
                                                style={{ width: "100%" }}
                                                aria-valuenow={100}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="progress-example card bg-white">
                            <div className="card-header">
                                <h5 className="card-title">
                                    Extra Small Progress Bars
                                </h5>
                            </div>
                            <div className="card-body pb-0">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div>
                                            <div className="progress progress-xs">
                                                <div
                                                    className="progress-bar w-75"
                                                    role="progressbar"
                                                    style={{ width: "10%" }}
                                                    aria-valuenow={75}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                />
                                            </div>
                                            <div className="progress progress-xs">
                                                <div
                                                    className="progress-bar bg-success"
                                                    role="progressbar"
                                                    style={{ width: "25%" }}
                                                    aria-valuenow={25}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                />
                                            </div>
                                            <div className="progress progress-xs">
                                                <div
                                                    className="progress-bar bg-info"
                                                    role="progressbar"
                                                    style={{ width: "50%" }}
                                                    aria-valuenow={50}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                />
                                            </div>
                                            <div className="progress progress-xs">
                                                <div
                                                    className="progress-bar bg-warning"
                                                    role="progressbar"
                                                    style={{ width: "75%" }}
                                                    aria-valuenow={75}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                />
                                            </div>
                                            <div className="progress progress-xs">
                                                <div
                                                    className="progress-bar bg-danger"
                                                    role="progressbar"
                                                    style={{
                                                        width: "100%",
                                                    }}
                                                    aria-valuenow={100}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="progress progress-xs">
                                            <div
                                                className="progress-bar progress-bar-striped"
                                                role="progressbar"
                                                style={{ width: "10%" }}
                                                aria-valuenow={10}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <div className="progress progress-xs">
                                            <div
                                                className="progress-bar progress-bar-striped bg-success"
                                                role="progressbar"
                                                style={{ width: "25%" }}
                                                aria-valuenow={25}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <div className="progress progress-xs">
                                            <div
                                                className="progress-bar progress-bar-striped bg-info"
                                                role="progressbar"
                                                style={{ width: "50%" }}
                                                aria-valuenow={50}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <div className="progress progress-xs">
                                            <div
                                                className="progress-bar progress-bar-striped bg-warning"
                                                role="progressbar"
                                                style={{ width: "75%" }}
                                                aria-valuenow={75}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <div className="progress progress-xs">
                                            <div
                                                className="progress-bar progress-bar-striped bg-danger"
                                                role="progressbar"
                                                style={{ width: "100%" }}
                                                aria-valuenow={100}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* /Progress */}
                    {/* Tabs */}
                    <section className="comp-section">
                        <div className="section-header">
                            <h3 className="section-title">Tabs</h3>
                            <div className="line" />
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card bg-white">
                                    <div className="card-header">
                                        <h5 className="card-title">
                                            Basic tabs
                                        </h5>
                                    </div>
                                    <div className="card-body">
                                        <ul className="nav nav-tabs">
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link active"
                                                    href="#basictab1"
                                                    data-bs-toggle="tab"
                                                >
                                                    Home
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="#basictab2"
                                                    data-bs-toggle="tab"
                                                >
                                                    Profile
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="#basictab3"
                                                    data-bs-toggle="tab"
                                                >
                                                    Messages
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="tab-content">
                                            <div
                                                className="tab-pane show active"
                                                id="basictab1"
                                            >
                                                Tab content 1
                                            </div>
                                            <div
                                                className="tab-pane"
                                                id="basictab2"
                                            >
                                                Tab content 2
                                            </div>
                                            <div
                                                className="tab-pane"
                                                id="basictab3"
                                            >
                                                Tab content 3
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card bg-white">
                                    <div className="card-header">
                                        <h5 className="card-title">
                                            Basic justified tabs
                                        </h5>
                                    </div>
                                    <div className="card-body">
                                        <ul className="nav nav-tabs nav-justified">
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link active"
                                                    href="#basic-justified-tab1"
                                                    data-bs-toggle="tab"
                                                >
                                                    Home
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="#basic-justified-tab2"
                                                    data-bs-toggle="tab"
                                                >
                                                    Profile
                                                </a>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a
                                                    href="#"
                                                    className="dropdown-toggle nav-link"
                                                    data-bs-toggle="dropdown"
                                                >
                                                    Dropdown
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a
                                                        className="dropdown-item"
                                                        href="#basic-justified-tab3"
                                                        data-bs-toggle="tab"
                                                    >
                                                        Dropdown 1
                                                    </a>
                                                    <a
                                                        className="dropdown-item"
                                                        href="#basic-justified-tab4"
                                                        data-bs-toggle="tab"
                                                    >
                                                        Dropdown 2
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="tab-content">
                                            <div
                                                className="tab-pane show active"
                                                id="basic-justified-tab1"
                                            >
                                                Tab content 1
                                            </div>
                                            <div
                                                className="tab-pane"
                                                id="basic-justified-tab2"
                                            >
                                                Tab content 2
                                            </div>
                                            <div
                                                className="tab-pane"
                                                id="basic-justified-tab3"
                                            >
                                                Tab content 3
                                            </div>
                                            <div
                                                className="tab-pane"
                                                id="basic-justified-tab4"
                                            >
                                                Tab content 4
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card bg-white">
                                    <div className="card-header">
                                        <h5 className="card-title">
                                            Top line tabs
                                        </h5>
                                    </div>
                                    <div className="card-body">
                                        <ul className="nav nav-tabs nav-tabs-top">
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link active"
                                                    href="#top-tab1"
                                                    data-bs-toggle="tab"
                                                >
                                                    Home
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="#top-tab2"
                                                    data-bs-toggle="tab"
                                                >
                                                    Profile
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="#top-tab3"
                                                    data-bs-toggle="tab"
                                                >
                                                    Messages
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="tab-content">
                                            <div
                                                className="tab-pane show active"
                                                id="top-tab1"
                                            >
                                                Tab content 1
                                            </div>
                                            <div
                                                className="tab-pane"
                                                id="top-tab2"
                                            >
                                                Tab content 2
                                            </div>
                                            <div
                                                className="tab-pane"
                                                id="top-tab3"
                                            >
                                                Tab content 3
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card bg-white">
                                    <div className="card-header">
                                        <h5 className="card-title">
                                            Top line justified
                                        </h5>
                                    </div>
                                    <div className="card-body">
                                        <ul className="nav nav-tabs nav-tabs-top nav-justified">
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link active"
                                                    href="#top-justified-tab1"
                                                    data-bs-toggle="tab"
                                                >
                                                    Home
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="#top-justified-tab2"
                                                    data-bs-toggle="tab"
                                                >
                                                    Profile
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="#top-justified-tab3"
                                                    data-bs-toggle="tab"
                                                >
                                                    Messages
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="tab-content">
                                            <div
                                                className="tab-pane show active"
                                                id="top-justified-tab1"
                                            >
                                                Tab content 1
                                            </div>
                                            <div
                                                className="tab-pane"
                                                id="top-justified-tab2"
                                            >
                                                Tab content 2
                                            </div>
                                            <div
                                                className="tab-pane"
                                                id="top-justified-tab3"
                                            >
                                                Tab content 3
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card bg-white">
                                    <div className="card-header">
                                        <h5 className="card-title">
                                            Bottom line tabs
                                        </h5>
                                    </div>
                                    <div className="card-body">
                                        <ul className="nav nav-tabs nav-tabs-bottom">
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link active"
                                                    href="#bottom-tab1"
                                                    data-bs-toggle="tab"
                                                >
                                                    Home
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="#bottom-tab2"
                                                    data-bs-toggle="tab"
                                                >
                                                    Profile
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="#bottom-tab3"
                                                    data-bs-toggle="tab"
                                                >
                                                    Messages
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="tab-content">
                                            <div
                                                className="tab-pane show active"
                                                id="bottom-tab1"
                                            >
                                                Tab content 1
                                            </div>
                                            <div
                                                className="tab-pane"
                                                id="bottom-tab2"
                                            >
                                                Tab content 2
                                            </div>
                                            <div
                                                className="tab-pane"
                                                id="bottom-tab3"
                                            >
                                                Tab content 3
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card bg-white">
                                    <div className="card-header">
                                        <h5 className="card-title">
                                            Bottom line justified
                                        </h5>
                                    </div>
                                    <div className="card-body">
                                        <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link active"
                                                    href="#bottom-justified-tab1"
                                                    data-bs-toggle="tab"
                                                >
                                                    Home
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="#bottom-justified-tab2"
                                                    data-bs-toggle="tab"
                                                >
                                                    Profile
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="#bottom-justified-tab3"
                                                    data-bs-toggle="tab"
                                                >
                                                    Messages
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="tab-content">
                                            <div
                                                className="tab-pane show active"
                                                id="bottom-justified-tab1"
                                            >
                                                Tab content 1
                                            </div>
                                            <div
                                                className="tab-pane"
                                                id="bottom-justified-tab2"
                                            >
                                                Tab content 2
                                            </div>
                                            <div
                                                className="tab-pane"
                                                id="bottom-justified-tab3"
                                            >
                                                Tab content 3
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card bg-white">
                                    <div className="card-header">
                                        <h5 className="card-title">
                                            Solid tabs
                                        </h5>
                                    </div>
                                    <div className="card-body">
                                        <ul className="nav nav-tabs nav-tabs-solid">
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link active"
                                                    href="#solid-tab1"
                                                    data-bs-toggle="tab"
                                                >
                                                    Home
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="#solid-tab2"
                                                    data-bs-toggle="tab"
                                                >
                                                    Profile
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="#solid-tab3"
                                                    data-bs-toggle="tab"
                                                >
                                                    Messages
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="tab-content">
                                            <div
                                                className="tab-pane show active"
                                                id="solid-tab1"
                                            >
                                                Tab content 1
                                            </div>
                                            <div
                                                className="tab-pane"
                                                id="solid-tab2"
                                            >
                                                Tab content 2
                                            </div>
                                            <div
                                                className="tab-pane"
                                                id="solid-tab3"
                                            >
                                                Tab content 3
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card bg-white">
                                    <div className="card-header">
                                        <h5 className="card-title">
                                            Solid justified
                                        </h5>
                                    </div>
                                    <div className="card-body">
                                        <ul className="nav nav-tabs nav-tabs-solid nav-justified">
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link active"
                                                    href="#solid-justified-tab1"
                                                    data-bs-toggle="tab"
                                                >
                                                    Home
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="#solid-justified-tab2"
                                                    data-bs-toggle="tab"
                                                >
                                                    Profile
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="#solid-justified-tab3"
                                                    data-bs-toggle="tab"
                                                >
                                                    Messages
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="tab-content">
                                            <div
                                                className="tab-pane show active"
                                                id="solid-justified-tab1"
                                            >
                                                Tab content 1
                                            </div>
                                            <div
                                                className="tab-pane"
                                                id="solid-justified-tab2"
                                            >
                                                Tab content 2
                                            </div>
                                            <div
                                                className="tab-pane"
                                                id="solid-justified-tab3"
                                            >
                                                Tab content 3
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card bg-white">
                                    <div className="card-header">
                                        <h5 className="card-title">
                                            Solid Rounded
                                        </h5>
                                    </div>
                                    <div className="card-body">
                                        <ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded">
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link active"
                                                    href="#solid-rounded-tab1"
                                                    data-bs-toggle="tab"
                                                >
                                                    Home
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="#solid-rounded-tab2"
                                                    data-bs-toggle="tab"
                                                >
                                                    Profile
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="#solid-rounded-tab3"
                                                    data-bs-toggle="tab"
                                                >
                                                    Messages
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="tab-content">
                                            <div
                                                className="tab-pane show active"
                                                id="solid-rounded-tab1"
                                            >
                                                Tab content 1
                                            </div>
                                            <div
                                                className="tab-pane"
                                                id="solid-rounded-tab2"
                                            >
                                                Tab content 2
                                            </div>
                                            <div
                                                className="tab-pane"
                                                id="solid-rounded-tab3"
                                            >
                                                Tab content 3
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card bg-white">
                                    <div className="card-header">
                                        <h5 className="card-title">
                                            Rounded justified
                                        </h5>
                                    </div>
                                    <div className="card-body">
                                        <ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded nav-justified">
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link active"
                                                    href="#solid-rounded-justified-tab1"
                                                    data-bs-toggle="tab"
                                                >
                                                    Home
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="#solid-rounded-justified-tab2"
                                                    data-bs-toggle="tab"
                                                >
                                                    Profile
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="#solid-rounded-justified-tab3"
                                                    data-bs-toggle="tab"
                                                >
                                                    Messages
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="tab-content">
                                            <div
                                                className="tab-pane show active"
                                                id="solid-rounded-justified-tab1"
                                            >
                                                Tab content 1
                                            </div>
                                            <div
                                                className="tab-pane"
                                                id="solid-rounded-justified-tab2"
                                            >
                                                Tab content 2
                                            </div>
                                            <div
                                                className="tab-pane"
                                                id="solid-rounded-justified-tab3"
                                            >
                                                Tab content 3
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* /Tabs */}
                    {/* Typography */}
                    <section className="comp-section">
                        <div className="section-header">
                            <h3 className="section-title">Typography</h3>
                            <div className="line" />
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card bg-white">
                                    <div className="card-header">
                                        <h5 className="card-title">Headings</h5>
                                    </div>
                                    <div className="card-body">
                                        <h1>h1. Bootstrap heading</h1>
                                        <h2>h2. Bootstrap heading</h2>
                                        <h3>h3. Bootstrap heading</h3>
                                        <h4>h4. Bootstrap heading</h4>
                                        <h5>h5. Bootstrap heading</h5>
                                        <h6>h6. Bootstrap heading</h6>
                                    </div>
                                </div>
                                <div className="card bg-white">
                                    <div className="card-header">
                                        <h5 className="card-title">
                                            Blockquotes
                                        </h5>
                                    </div>
                                    <div className="card-body">
                                        <blockquote>
                                            <p className="mb-0">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.
                                                Integer posuere erat a ante.
                                            </p>
                                        </blockquote>
                                        <blockquote className="blockquote mb-0">
                                            <p className="mb-0">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.
                                                Integer posuere erat a ante.
                                            </p>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 d-flex">
                                <div className="card flex-fill bg-white">
                                    <div className="card-header">
                                        <h5 className="card-title">
                                            Text element
                                        </h5>
                                    </div>
                                    <div className="card-body">
                                        <p>
                                            You can use the mark tag to{" "}
                                            <mark>highlight</mark> text.
                                        </p>
                                        <p>
                                            <del>
                                                This line of text is meant to be
                                                treated as deleted text.
                                            </del>
                                        </p>
                                        <p>
                                            <s>
                                                This line of text is meant to be
                                                treated as no longer accurate.
                                            </s>
                                        </p>
                                        <p>
                                            <ins>
                                                This line of text is meant to be
                                                treated as an addition to the
                                                document.
                                            </ins>
                                        </p>
                                        <p>
                                            <u>
                                                This line of text will render as
                                                underlined
                                            </u>
                                        </p>
                                        <p>
                                            <small>
                                                This line of text is meant to be
                                                treated as fine print.
                                            </small>
                                        </p>
                                        <p>
                                            <strong>
                                                This line rendered as bold text.
                                            </strong>
                                        </p>
                                        <p>
                                            <em>
                                                This line rendered as italicized
                                                text.
                                            </em>
                                        </p>
                                        <p className="text-monospace mb-0">
                                            This is in monospace
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 d-flex">
                                <div className="card flex-fill bg-white">
                                    <div className="card-header">
                                        <h5 className="card-title">
                                            Coloured Link
                                        </h5>
                                    </div>
                                    <div className="card-body">
                                        <p className="text-primary">
                                            .text-primary
                                        </p>
                                        <p className="text-secondary">
                                            .text-secondary
                                        </p>
                                        <p className="text-success">
                                            .text-success
                                        </p>
                                        <p className="text-danger">
                                            .text-danger
                                        </p>
                                        <p className="text-warning">
                                            .text-warning
                                        </p>
                                        <p className="text-info">.text-info</p>
                                        <p className="text-light bg-dark">
                                            .text-light
                                        </p>
                                        <p className="text-dark">.text-dark</p>
                                        <p className="text-muted">
                                            .text-muted
                                        </p>
                                        <p className="text-white bg-dark mb-0">
                                            .text-white
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 d-flex">
                                <div className="card flex-fill bg-white">
                                    <div className="card-header">
                                        <h5 className="card-title">
                                            Coloured text
                                        </h5>
                                    </div>
                                    <div className="card-body">
                                        <p>
                                            <a
                                                href="#"
                                                className="text-primary"
                                            >
                                                Primary link
                                            </a>
                                        </p>
                                        <p>
                                            <a
                                                href="#"
                                                className="text-secondary"
                                            >
                                                Secondary link
                                            </a>
                                        </p>
                                        <p>
                                            <a
                                                href="#"
                                                className="text-success"
                                            >
                                                Success link
                                            </a>
                                        </p>
                                        <p>
                                            <a href="#" className="text-danger">
                                                Danger link
                                            </a>
                                        </p>
                                        <p>
                                            <a
                                                href="#"
                                                className="text-warning"
                                            >
                                                Warning link
                                            </a>
                                        </p>
                                        <p>
                                            <a href="#" className="text-info">
                                                Info link
                                            </a>
                                        </p>
                                        <p>
                                            <a
                                                href="#"
                                                className="text-light bg-dark"
                                            >
                                                Light link
                                            </a>
                                        </p>
                                        <p>
                                            <a href="#" className="text-dark">
                                                Dark link
                                            </a>
                                        </p>
                                        <p>
                                            <a href="#" className="text-muted">
                                                Muted link
                                            </a>
                                        </p>
                                        <p>
                                            <a
                                                href="#"
                                                className="text-white bg-dark mb-0"
                                            >
                                                White link
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 d-flex">
                                <div className="card flex-fill bg-white">
                                    <div className="card-header">
                                        <h5 className="card-title">
                                            Bullet Lists
                                        </h5>
                                    </div>
                                    <div className="card-body">
                                        <ul className="mb-0 bullets">
                                            <li>Lorem ipsum dolor sit amet</li>
                                            <li>Consectetur adipiscing elit</li>
                                            <li>
                                                Integer molestie lorem at massa
                                            </li>
                                            <li>
                                                Facilisis in pretium nisl
                                                aliquet
                                            </li>
                                            <li>
                                                Nulla volutpat aliquam velit
                                                <ul>
                                                    <li>
                                                        Phasellus iaculis neque
                                                    </li>
                                                    <li>
                                                        Purus sodales ultricies
                                                    </li>
                                                    <li>
                                                        Vestibulum laoreet
                                                        porttitor sem
                                                    </li>
                                                    <li>
                                                        Ac tristique libero
                                                        volutpat at
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                Faucibus porta lacus fringilla
                                                vel
                                            </li>
                                            <li>Aenean sit amet erat nunc</li>
                                            <li>Eget porttitor lorem</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 d-flex">
                                <div className="card flex-fill bg-white">
                                    <div className="card-header">
                                        <h5 className="card-title">
                                            Bullet Lists
                                        </h5>
                                    </div>
                                    <div className="card-body">
                                        <ol className="mb-0">
                                            <li>Lorem ipsum dolor sit amet</li>
                                            <li>Consectetur adipiscing elit</li>
                                            <li>
                                                Integer molestie lorem at massa
                                            </li>
                                            <li>
                                                Facilisis in pretium nisl
                                                aliquet
                                            </li>
                                            <li>
                                                Nulla volutpat aliquam velit
                                                <ul>
                                                    <li>
                                                        Phasellus iaculis neque
                                                    </li>
                                                    <li>
                                                        Purus sodales ultricies
                                                    </li>
                                                    <li>
                                                        Vestibulum laoreet
                                                        porttitor sem
                                                    </li>
                                                    <li>
                                                        Ac tristique libero
                                                        volutpat at
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                Faucibus porta lacus fringilla
                                                vel
                                            </li>
                                            <li>Aenean sit amet erat nunc</li>
                                            <li>Eget porttitor lorem</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 d-flex">
                                <div className="card flex-fill bg-white">
                                    <div className="card-header">
                                        <h5 className="card-title">
                                            Unstyled Lists
                                        </h5>
                                    </div>
                                    <div className="card-body">
                                        <ul className="list-unstyled mb-0">
                                            <li>Lorem ipsum dolor sit amet</li>
                                            <li>Consectetur adipiscing elit</li>
                                            <li>
                                                Integer molestie lorem at massa
                                            </li>
                                            <li>
                                                Facilisis in pretium nisl
                                                aliquet
                                            </li>
                                            <li>
                                                Nulla volutpat aliquam velit
                                                <ul>
                                                    <li>
                                                        Phasellus iaculis neque
                                                    </li>
                                                    <li>
                                                        Purus sodales ultricies
                                                    </li>
                                                    <li>
                                                        Vestibulum laoreet
                                                        porttitor sem
                                                    </li>
                                                    <li>
                                                        Ac tristique libero
                                                        volutpat at
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                Faucibus porta lacus fringilla
                                                vel
                                            </li>
                                            <li>Aenean sit amet erat nunc</li>
                                            <li>Eget porttitor lorem</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* /Typography */}
                </div>
            </div>
        </div>
    );
};
export default Components;
