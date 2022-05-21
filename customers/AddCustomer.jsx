import React, { useEffect, useState } from "react";
import Link from "next/link";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import Select2 from "react-select2-wrapper";

const AddCustomer = () => {
    const [date, setDate] = useState(new Date());
    const [currencyOptions, setcurrencyOptions] = useState([
        { id: 1, text: "Select Currency" },
        { id: 2, text: "EUR Euro" },
        { id: 3, text: "INR Indoan Rupee" },
        { id: 4, text: "USD- US Dollar" },
    ]);
    const [countryOptions, setcountryOptions] = useState([
        { id: 1, text: "Select Country" },
        { id: 2, text: "Afghanistan" },
        { id: 3, text: "Albania" },
        { id: 4, text: "American Samoa" },
        { id: 5, text: "Algeria" },
        { id: 6, text: "Andorra" },
        { id: 7, text: "Angola" },
        { id: 8, text: "Anguilla" },
        { id: 9, text: "United States" },
    ]);

    return (
        <div className="page-wrapper">
            <div className="content container-fluid">
                <div className="page-header">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="page-title">Customers</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link href="/">
                                        <a>Dashboard</a>
                                    </Link>
                                </li>
                                <li className="breadcrumb-item">
                                    <Link href="/customers">
                                        <a>Customers</a>
                                    </Link>
                                </li>
                                <li className="breadcrumb-item active">
                                    Add Customers
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Basic Info</h4>
                                <form action="#">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Email</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Primary Currency</label>
                                                <Select2
                                                    className="w-100"
                                                    data={currencyOptions}
                                                    options={{
                                                        placeholder: "Currency",
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>
                                                    Primary Contact Name
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Phone</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Website</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <h4 className="card-title mt-4">
                                    Billing Address
                                </h4>
                                <form action="#">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>State</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Address</label>
                                                <textarea
                                                    rows="5"
                                                    cols="5"
                                                    className="form-control"
                                                    placeholder="Enter Address"
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Country</label>
                                                <Select2
                                                    className="w-100"
                                                    data={countryOptions}
                                                    options={{
                                                        placeholder: "Country",
                                                    }}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>City</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Phone</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Zip Code</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <h4 className="card-title mt-4">
                                    Shipping Address
                                </h4>
                                <form action="#">
                                    <div className="text-right">
                                        <button
                                            type="submit"
                                            className="btn btn-outline-primary btn-sm"
                                        >
                                            Copy from Billing
                                        </button>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Name:</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>State:</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Address:</label>
                                                <textarea
                                                    rows="5"
                                                    cols="5"
                                                    className="form-control"
                                                    placeholder="Enter Address"
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Country:</label>
                                                <Select2
                                                    className="w-100"
                                                    data={countryOptions}
                                                    options={{
                                                        placeholder: "Country",
                                                    }}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>City:</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Phone:</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Zip Code:</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-right mt-4">
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                        >
                                            Add Customer
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AddCustomer;
