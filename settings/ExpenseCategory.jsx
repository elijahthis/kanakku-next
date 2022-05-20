import React, { useState, useEffect } from "react";
import Link from "next/link";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import SettingSidebar from "../layouts/SettingsSidebar";
import Select2 from "react-select2-wrapper";

const ExpenseCategory = () => {
    const [status, setStatus] = useState([
            { id: 1, text: "Active" },
            { id: 2, text: "Inactive" },
        ]),
        [pendingStatus, setPendingStatus] = useState([
            { id: 1, text: "Pending" },
            { id: 2, text: "Approved" },
        ]);

    useEffect(() => {
        let elements = Array.from(
            document.getElementsByClassName("select2-container")
        );
        elements.map((element) => element.classList.add("width-100"));
    }, []);

    const formHandler = (e) => {
        console.log(e);
    };

    return (
        <>
            <div className="col-xl-9 col-md-8">
                <div className="card card-table">
                    <div className="card-header">
                        <div className="row">
                            <div className="col">
                                <h5 className="card-title">Expense Category</h5>
                            </div>
                            <div className="col-auto">
                                <a
                                    href="#"
                                    className="btn btn-outline-primary btn-sm"
                                    data-toggle="modal"
                                    data-target="#add_category"
                                >
                                    Add New Category
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-striped custom-table mb-0">
                                <thead>
                                    <tr>
                                        <th>Category</th>
                                        <th>Description</th>
                                        <th>Status</th>
                                        <th className="text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Accounts</td>
                                        <td>Lorem ipsum dollar</td>
                                        <td>
                                            <span className="badge bg-success-light">
                                                Active
                                            </span>
                                        </td>
                                        <td className="text-right">
                                            <a
                                                href="#"
                                                data-toggle="modal"
                                                data-target="#edit_category"
                                                className="btn btn-sm btn-white text-success mr-2"
                                            >
                                                <i className="far fa-edit mr-1"></i>{" "}
                                                Edit
                                            </a>
                                            <a
                                                href="#"
                                                data-toggle="modal"
                                                data-target="#delete_category"
                                                className="btn btn-sm btn-white text-danger mr-2"
                                            >
                                                <i className="far fa-trash-alt mr-1"></i>
                                                Delete
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Sales</td>
                                        <td>Lorem ipsum dollar</td>
                                        <td>
                                            <span className="badge bg-danger-light">
                                                Inactive
                                            </span>
                                        </td>
                                        <td className="text-right">
                                            <a
                                                href="#"
                                                data-toggle="modal"
                                                data-target="#edit_category"
                                                className="btn btn-sm btn-white text-success mr-2"
                                            >
                                                <i className="far fa-edit mr-1"></i>{" "}
                                                Edit
                                            </a>
                                            <a
                                                href="#"
                                                data-toggle="modal"
                                                data-target="#delete_category"
                                                className="btn btn-sm btn-white text-danger mr-2"
                                            >
                                                <i className="far fa-trash-alt mr-1"></i>
                                                Delete
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div
                id="add_category"
                className="modal custom-modal fade"
                role="dialog"
            >
                <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                Add Expense Category
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label>
                                        Category{" "}
                                        <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>
                                        Description{" "}
                                        <span className="text-danger">*</span>
                                    </label>
                                    <textarea className="form-control"></textarea>
                                </div>
                                <div className="form-group">
                                    <label>
                                        Status{" "}
                                        <span className="text-danger">*</span>
                                    </label>
                                    <Select2
                                        defaultValue={1}
                                        className="w-100"
                                        data={pendingStatus}
                                        options={{
                                            placeholder: "Select Status",
                                        }}
                                    />
                                </div>
                                <div className="submit-section">
                                    <button className="btn btn-primary submit-btn">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div
                id="edit_category"
                className="modal custom-modal fade"
                role="dialog"
            >
                <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                Edit Expense Category
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label>
                                        Category{" "}
                                        <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        className="form-control"
                                        value="VAT"
                                        type="text"
                                        onChange={formHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>
                                        Description{" "}
                                        <span className="text-danger">*</span>
                                    </label>
                                    <textarea className="form-control"></textarea>
                                </div>
                                <div className="form-group">
                                    <label>
                                        Status{" "}
                                        <span className="text-danger">*</span>
                                    </label>
                                    <Select2
                                        defaultValue={1}
                                        className="w-100"
                                        data={status}
                                        options={{
                                            placeholder: "Select Status",
                                        }}
                                    />
                                </div>
                                <div className="submit-section">
                                    <button className="btn btn-primary submit-btn">
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="modal custom-modal fade"
                id="delete_category"
                role="dialog"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="modal-icon text-center mb-3">
                                <i className="fas fa-trash-alt text-danger"></i>
                            </div>
                            <div className="modal-text text-center">
                                <h3>Delete Expense Category</h3>
                                <p>Are you sure want to delete?</p>
                            </div>
                        </div>
                        <div className="modal-footer text-center">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                            >
                                Cancel
                            </button>
                            <button type="button" className="btn btn-primary">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ExpenseCategory;
