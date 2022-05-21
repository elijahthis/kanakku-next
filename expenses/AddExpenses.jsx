import React, { useState, useEffect } from "react";
import Link from "next/link";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import Select2 from "react-select2-wrapper";
import DatePicker from "react-datepicker";

const AddExpenses = () => {
    const [date, setDate] = useState(new Date());
    const [categoryOptions, setCategoryOptions] = useState([
        { id: 1, text: "Advertising" },
        { id: 2, text: "Marketing" },
        { id: 3, text: "Software" },
        { id: 4, text: "Travel" },
    ]);

    useEffect(() => {
        let elements = Array.from(
            document.getElementsByClassName("react-datepicker-wrapper")
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
                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="page-title">Expenses</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link href="/">
                                        <a>Dashboard</a>
                                    </Link>
                                </li>
                                <li className="breadcrumb-item">
                                    <Link href="/expenses">
                                        <a>Expenses</a>
                                    </Link>
                                </li>
                                <li className="breadcrumb-item active">
                                    Add Expenses
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <form action="#">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Category:</label>
                                                <Select2
                                                    className="w-100"
                                                    data={categoryOptions}
                                                    options={{
                                                        placeholder:
                                                            "Select Category",
                                                    }}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Note:</label>
                                                <textarea
                                                    rows="5"
                                                    cols="5"
                                                    className="form-control"
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Date:</label>
                                                <div className="cal-icon">
                                                    <DatePicker
                                                        selected={date}
                                                        onChange={handleChange}
                                                        className="form-control datetimepicker"
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Customer:</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Amount:</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                />
                                            </div>
                                            <div className="text-right mt-4">
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary"
                                                >
                                                    Add Expenses
                                                </button>
                                            </div>
                                        </div>
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
export default AddExpenses;
