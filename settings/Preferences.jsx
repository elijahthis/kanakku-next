import React, { useState } from "react";
import Link from "next/link";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import SettingSidebar from "../layouts/SettingsSidebar";
import Select2 from "react-select2-wrapper";

const Preferences = () => {
    const [currencyOptions, setcurrencyOptions] = useState([
            { id: 1, text: "USD - US Dollar" },
            { id: 2, text: "GBP - British Pound" },
            { id: 3, text: "EUR - Euro" },
            { id: 4, text: "INR - Indian Rupee" },
            { id: 5, text: "AUD - Australian Dollar" },
        ]),
        [languageOptions, setlanguageOptions] = useState([
            { id: 1, text: "English" },
            { id: 2, text: "French" },
            { id: 3, text: "German" },
            { id: 4, text: "Italian" },
            { id: 5, text: "Spanish" },
        ]),
        [dateOptions, setdateOptions] = useState([
            { id: 1, text: "2020 Nov 09" },
            { id: 2, text: "09 Nov 2020" },
            { id: 3, text: "09/11/2020" },
            { id: 4, text: "09.11.2020" },
            { id: 5, text: "09-11-2020" },
            { id: 6, text: "11/09/2020" },
        ]),
        [monthOptions, setmonthOptions] = useState([
            { id: 1, text: "january-december" },
            { id: 2, text: "february-january" },
            { id: 3, text: "march-february " },
            { id: 4, text: "april-march" },
            { id: 5, text: "may-april" },
            { id: 6, text: "june-may" },
            { id: 7, text: "july-june" },
            { id: 8, text: "august-july" },
            { id: 9, text: "september-august" },
            { id: 10, text: "october-september" },
            { id: 11, text: "november-october" },
            { id: 12, text: "december-november" },
        ]);

    return (
        <div className="col-xl-9 col-md-8">
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title">Preferences</h5>
                </div>
                <div className="card-body">
                    <form>
                        <div className="row form-group">
                            <label className="col-sm-3 col-form-label input-label">
                                Currency
                            </label>
                            <div className="col-sm-9">
                                <Select2
                                    defaultValue={1}
                                    className="w-100"
                                    data={currencyOptions}
                                    options={{
                                        placeholder: "Select Currency",
                                    }}
                                />
                            </div>
                        </div>
                        <div className="row form-group">
                            <label className="col-sm-3 col-form-label input-label">
                                Language
                            </label>
                            <div className="col-sm-9">
                                <Select2
                                    defaultValue={1}
                                    className="w-100"
                                    data={languageOptions}
                                    options={{
                                        placeholder: "Select Currency",
                                    }}
                                />
                            </div>
                        </div>
                        <div className="row form-group">
                            <label className="col-sm-3 col-form-label input-label">
                                Time Zone
                            </label>
                            <div className="col-sm-9">
                                <Select2
                                    defaultValue={1}
                                    className="w-100"
                                    data={languageOptions}
                                    options={{
                                        placeholder: "Select Date",
                                    }}
                                />
                            </div>
                        </div>
                        <div className="row form-group">
                            <label className="col-sm-3 col-form-label input-label">
                                Date Format
                            </label>
                            <div className="col-sm-9">
                                <Select2
                                    defaultValue={1}
                                    className="w-100"
                                    data={dateOptions}
                                    options={{
                                        placeholder: "Select Date",
                                    }}
                                />
                            </div>
                        </div>
                        <div className="row form-group">
                            <label className="col-sm-3 col-form-label input-label">
                                Financial Year
                            </label>
                            <div className="col-sm-9">
                                <Select2
                                    defaultValue={1}
                                    className="w-100"
                                    data={monthOptions}
                                    options={{
                                        placeholder: "Select Date",
                                    }}
                                />
                            </div>
                        </div>

                        <label className="row form-group toggle-switch">
                            <span className="col-8 col-sm-9 toggle-switch-content ml-0">
                                <span className="d-block text-dark">
                                    Discount Per Item
                                </span>
                                <span className="d-block text-muted">
                                    Enable this if you want to add Discount to
                                    individual invoice items. By default,
                                    Discount is added directly to the invoice.
                                </span>
                            </span>
                            <span className="col-4 col-sm-3">
                                <input
                                    type="checkbox"
                                    className="toggle-switch-input"
                                    id="preferencesSwitch1"
                                />
                                <span className="toggle-switch-label ml-auto">
                                    <span className="toggle-switch-indicator"></span>
                                </span>
                            </span>
                        </label>

                        <div className="text-right">
                            <button type="submit" className="btn btn-primary">
                                Save Changes
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Preferences;
