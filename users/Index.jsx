import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import $ from "jquery";
import users from "../json/users";

const Users = () => {
    useEffect(() => {
        $("#userstable").DataTable({
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
                            <h3 className="page-title">Users</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link href="/">Dashboard</Link>
                                </li>
                                <li className="breadcrumb-item active">
                                    Users
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <div className="card card-table">
                            <div className="card-header">
                                <h4 className="card-title">List of Users</h4>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table
                                        className="table table-stripped table-center table-hover datatable"
                                        id="userstable"
                                    >
                                        <thead className="thead-light">
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Registered On</th>
                                                <th>Role</th>
                                                <th>Status</th>
                                                <th className="text-right">
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users.map((item, index) => {
                                                let status;
                                                let role;
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

                                                if (item.role === "Admin") {
                                                    role = (
                                                        <span className="text-success">
                                                            Admin
                                                        </span>
                                                    );
                                                } else {
                                                    role = (
                                                        <span className="text-info">
                                                            Customer
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
                                                        <td>{item.email}</td>
                                                        <td>
                                                            {item.registered_on}
                                                        </td>
                                                        <td>{role}</td>
                                                        <td>{status}</td>
                                                        <td className="text-right">
                                                            <a
                                                                href="#"
                                                                className="btn btn-sm btn-white text-success mr-2"
                                                            >
                                                                <i className="far fa-edit mr-1"></i>{" "}
                                                                Edit
                                                            </a>
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
export default Users;
