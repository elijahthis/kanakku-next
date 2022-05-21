import React from "react";
import Link from "next/link";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";

const Inbox = (props) => {
    return (
        <div className="page-wrapper">
            <div className="content container-fluid">
                {/* Page Header */}
                <div className="page-header">
                    <div className="row">
                        <div className="col">
                            <h3 className="page-title">Inbox</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link href="/">Dashboard</Link>
                                </li>
                                <li className="breadcrumb-item active">
                                    Inbox
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* /Page Header */}

                <div className="row">
                    <div className="col-lg-3 col-md-4">
                        <div className="compose-btn">
                            <a href="#" className="btn btn-primary btn-block">
                                Compose
                            </a>
                        </div>
                        <ul className="inbox-menu">
                            <li className="active">
                                <a href="#">
                                    <i className="fas fa-download"></i> Inbox{" "}
                                    <span className="mail-count">(5)</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="far fa-star"></i> Important
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="far fa-paper-plane"></i> Sent
                                    Mail
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="far fa-file-alt"></i> Drafts{" "}
                                    <span className="mail-count">(13)</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="far fa-trash-alt"></i> Trash
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-9 col-md-8">
                        <div className="card bg-white">
                            <div className="card-body">
                                <div className="email-header">
                                    <div className="row">
                                        <div className="col top-action-left">
                                            <div className="float-left">
                                                <div className="btn-group dropdown-action">
                                                    <button
                                                        type="button"
                                                        className="btn btn-white dropdown-toggle"
                                                        data-toggle="dropdown"
                                                    >
                                                        Select{" "}
                                                        <i className="fas fa-angle-down"></i>
                                                    </button>
                                                    <div className="dropdown-menu">
                                                        <a
                                                            className="dropdown-item"
                                                            href="#"
                                                        >
                                                            All
                                                        </a>
                                                        <a
                                                            className="dropdown-item"
                                                            href="#"
                                                        >
                                                            None
                                                        </a>
                                                        <div className="dropdown-divider"></div>
                                                        <a
                                                            className="dropdown-item"
                                                            href="#"
                                                        >
                                                            Read
                                                        </a>
                                                        <a
                                                            className="dropdown-item"
                                                            href="#"
                                                        >
                                                            Unread
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="btn-group dropdown-action">
                                                    <button
                                                        type="button"
                                                        className="btn btn-white dropdown-toggle"
                                                        data-toggle="dropdown"
                                                    >
                                                        Actions{" "}
                                                        <i className="fas fa-angle-down"></i>
                                                    </button>
                                                    <div className="dropdown-menu">
                                                        <a
                                                            className="dropdown-item"
                                                            href="#"
                                                        >
                                                            Reply
                                                        </a>
                                                        <a
                                                            className="dropdown-item"
                                                            href="#"
                                                        >
                                                            Forward
                                                        </a>
                                                        <a
                                                            className="dropdown-item"
                                                            href="#"
                                                        >
                                                            Archive
                                                        </a>
                                                        <div className="dropdown-divider"></div>
                                                        <a
                                                            className="dropdown-item"
                                                            href="#"
                                                        >
                                                            Mark As Read
                                                        </a>
                                                        <a
                                                            className="dropdown-item"
                                                            href="#"
                                                        >
                                                            Mark As Unread
                                                        </a>
                                                        <div className="dropdown-divider"></div>
                                                        <a
                                                            className="dropdown-item"
                                                            href="#"
                                                        >
                                                            Delete
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="btn-group dropdown-action">
                                                    <button
                                                        type="button"
                                                        className="btn btn-white dropdown-toggle"
                                                        data-toggle="dropdown"
                                                    >
                                                        <i className="fas fa-folder"></i>{" "}
                                                        <i className="fas fa-angle-down"></i>
                                                    </button>
                                                    <div
                                                        role="menu"
                                                        className="dropdown-menu"
                                                    >
                                                        <a
                                                            className="dropdown-item"
                                                            href="#"
                                                        >
                                                            Social
                                                        </a>
                                                        <a
                                                            className="dropdown-item"
                                                            href="#"
                                                        >
                                                            Forums
                                                        </a>
                                                        <a
                                                            className="dropdown-item"
                                                            href="#"
                                                        >
                                                            Updates
                                                        </a>
                                                        <div className="dropdown-divider"></div>
                                                        <a
                                                            className="dropdown-item"
                                                            href="#"
                                                        >
                                                            Spam
                                                        </a>
                                                        <a
                                                            className="dropdown-item"
                                                            href="#"
                                                        >
                                                            Trash
                                                        </a>
                                                        <div className="dropdown-divider"></div>
                                                        <a
                                                            className="dropdown-item"
                                                            href="#"
                                                        >
                                                            New
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="btn-group dropdown-action">
                                                    <button
                                                        type="button"
                                                        data-toggle="dropdown"
                                                        className="btn btn-white dropdown-toggle"
                                                    >
                                                        <i className="fas fa-tags"></i>{" "}
                                                        <i className="fas fa-angle-down"></i>
                                                    </button>
                                                    <div
                                                        role="menu"
                                                        className="dropdown-menu"
                                                    >
                                                        <a
                                                            className="dropdown-item"
                                                            href="#"
                                                        >
                                                            Work
                                                        </a>
                                                        <a
                                                            className="dropdown-item"
                                                            href="#"
                                                        >
                                                            Family
                                                        </a>
                                                        <a
                                                            className="dropdown-item"
                                                            href="#"
                                                        >
                                                            Social
                                                        </a>
                                                        <div className="dropdown-divider"></div>
                                                        <a
                                                            className="dropdown-item"
                                                            href="#"
                                                        >
                                                            Primary
                                                        </a>
                                                        <a
                                                            className="dropdown-item"
                                                            href="#"
                                                        >
                                                            Promotions
                                                        </a>
                                                        <a
                                                            className="dropdown-item"
                                                            href="#"
                                                        >
                                                            Forums
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="btn-group dropdown-action mail-search">
                                                    <input
                                                        type="text"
                                                        placeholder="Search Messages"
                                                        className="form-control search-message"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-auto top-action-right">
                                            <div className="text-right">
                                                <button
                                                    type="button"
                                                    title="Refresh"
                                                    data-toggle="tooltip"
                                                    className="btn btn-white d-none d-md-inline-block"
                                                >
                                                    <i className="fas fa-sync-alt"></i>
                                                </button>
                                                <div className="btn-group">
                                                    <a className="btn btn-white">
                                                        <i className="fas fa-angle-left"></i>
                                                    </a>
                                                    <a className="btn btn-white">
                                                        <i className="fas fa-angle-right"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <span className="text-muted d-none d-md-inline-block">
                                                    Showing 10 of 112{" "}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="email-content">
                                    <div className="table-responsive">
                                        <table className="table table-inbox table-hover">
                                            <thead>
                                                <tr>
                                                    <th colSpan={6}>
                                                        <input
                                                            type="checkbox"
                                                            className="checkbox-all"
                                                        />
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="unread clickable-row">
                                                    <td>
                                                        <input
                                                            type="checkbox"
                                                            className="checkmail"
                                                        />
                                                    </td>
                                                    <td>
                                                        <span className="mail-important">
                                                            <i className="fas fa-star starred"></i>
                                                        </span>
                                                    </td>
                                                    <td className="name">
                                                        John Doe
                                                    </td>
                                                    <td className="subject">
                                                        Lorem ipsum dolor sit
                                                        amet, consectetuer
                                                        adipiscing elit
                                                    </td>
                                                    <td>
                                                        <i className="fas fa-paperclip"></i>
                                                    </td>
                                                    <td className="mail-date">
                                                        13:14
                                                    </td>
                                                </tr>
                                                <tr className="unread clickable-row">
                                                    <td>
                                                        <input
                                                            type="checkbox"
                                                            className="checkmail"
                                                        />
                                                    </td>
                                                    <td>
                                                        <span className="mail-important">
                                                            <i className="far fa-star"></i>
                                                        </span>
                                                    </td>
                                                    <td className="name">
                                                        Envato Account
                                                    </td>
                                                    <td className="subject">
                                                        Important account
                                                        security update from
                                                        Envato
                                                    </td>
                                                    <td></td>
                                                    <td className="mail-date">
                                                        8:42
                                                    </td>
                                                </tr>
                                                <tr className="clickable-row">
                                                    <td>
                                                        <input
                                                            type="checkbox"
                                                            className="checkmail"
                                                        />
                                                    </td>
                                                    <td>
                                                        <span className="mail-important">
                                                            <i className="far fa-star"></i>
                                                        </span>
                                                    </td>
                                                    <td className="name">
                                                        Twitter
                                                    </td>
                                                    <td className="subject">
                                                        HRMS Bootstrap Admin
                                                        Template
                                                    </td>
                                                    <td></td>
                                                    <td className="mail-date">
                                                        30 Nov
                                                    </td>
                                                </tr>
                                                <tr className="unread clickable-row">
                                                    <td>
                                                        <input
                                                            type="checkbox"
                                                            className="checkmail"
                                                        />
                                                    </td>
                                                    <td>
                                                        <span className="mail-important">
                                                            <i className="far fa-star"></i>
                                                        </span>
                                                    </td>
                                                    <td className="name">
                                                        Richard Parker
                                                    </td>
                                                    <td className="subject">
                                                        Lorem ipsum dolor sit
                                                        amet, consectetuer
                                                        adipiscing elit
                                                    </td>
                                                    <td></td>
                                                    <td className="mail-date">
                                                        18 Sep
                                                    </td>
                                                </tr>
                                                <tr className="clickable-row">
                                                    <td>
                                                        <input
                                                            type="checkbox"
                                                            className="checkmail"
                                                        />
                                                    </td>
                                                    <td>
                                                        <span className="mail-important">
                                                            <i className="far fa-star"></i>
                                                        </span>
                                                    </td>
                                                    <td className="name">
                                                        John Smith
                                                    </td>
                                                    <td className="subject">
                                                        Lorem ipsum dolor sit
                                                        amet, consectetuer
                                                        adipiscing elit
                                                    </td>
                                                    <td></td>
                                                    <td className="mail-date">
                                                        21 Aug
                                                    </td>
                                                </tr>
                                                <tr className="clickable-row">
                                                    <td>
                                                        <input
                                                            type="checkbox"
                                                            className="checkmail"
                                                        />
                                                    </td>
                                                    <td>
                                                        <span className="mail-important">
                                                            <i className="far fa-star"></i>
                                                        </span>
                                                    </td>
                                                    <td className="name">
                                                        me, Robert Smith (3)
                                                    </td>
                                                    <td className="subject">
                                                        Lorem ipsum dolor sit
                                                        amet, consectetuer
                                                        adipiscing elit
                                                    </td>
                                                    <td></td>
                                                    <td className="mail-date">
                                                        1 Aug
                                                    </td>
                                                </tr>
                                                <tr className="unread clickable-row">
                                                    <td>
                                                        <input
                                                            type="checkbox"
                                                            className="checkmail"
                                                        />
                                                    </td>
                                                    <td>
                                                        <span className="mail-important">
                                                            <i className="far fa-star"></i>
                                                        </span>
                                                    </td>
                                                    <td className="name">
                                                        Codecanyon
                                                    </td>
                                                    <td className="subject">
                                                        Welcome To Codecanyon
                                                    </td>
                                                    <td></td>
                                                    <td className="mail-date">
                                                        Jul 13
                                                    </td>
                                                </tr>
                                                <tr className="clickable-row">
                                                    <td>
                                                        <input
                                                            type="checkbox"
                                                            className="checkmail"
                                                        />
                                                    </td>
                                                    <td>
                                                        <span className="mail-important">
                                                            <i className="far fa-star"></i>
                                                        </span>
                                                    </td>
                                                    <td className="name">
                                                        Richard Miles
                                                    </td>
                                                    <td className="subject">
                                                        Lorem ipsum dolor sit
                                                        amet, consectetuer
                                                        adipiscing elit
                                                    </td>
                                                    <td>
                                                        <i className="fas fa-paperclip"></i>
                                                    </td>
                                                    <td className="mail-date">
                                                        May 14
                                                    </td>
                                                </tr>
                                                <tr className="unread clickable-row">
                                                    <td>
                                                        <input
                                                            type="checkbox"
                                                            className="checkmail"
                                                        />
                                                    </td>
                                                    <td>
                                                        <span className="mail-important">
                                                            <i className="far fa-star"></i>
                                                        </span>
                                                    </td>
                                                    <td className="name">
                                                        John Smith
                                                    </td>
                                                    <td className="subject">
                                                        Lorem ipsum dolor sit
                                                        amet, consectetuer
                                                        adipiscing elit
                                                    </td>
                                                    <td></td>
                                                    <td className="mail-date">
                                                        11/11/16
                                                    </td>
                                                </tr>
                                                <tr className="clickable-row">
                                                    <td>
                                                        <input
                                                            type="checkbox"
                                                            className="checkmail"
                                                        />
                                                    </td>
                                                    <td>
                                                        <span className="mail-important">
                                                            <i className="far fa-star starred"></i>
                                                        </span>
                                                    </td>
                                                    <td className="name">
                                                        Mike Litorus
                                                    </td>
                                                    <td className="subject">
                                                        Lorem ipsum dolor sit
                                                        amet, consectetuer
                                                        adipiscing elit
                                                    </td>
                                                    <td></td>
                                                    <td className="mail-date">
                                                        10/31/16
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Inbox;
