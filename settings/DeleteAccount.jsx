import React from "react";
import { Link } from "react-router-dom";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import SettingSidebar from "../layouts/SettingsSidebar";

const DeleteAccount = () => {
    return (
        <div className="col-xl-9 col-md-8">
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title">Delete your account</h5>
                </div>
                <div className="card-body">
                    <form>
                        <p className="card-text">
                            When you delete your account, you lose access to
                            Kanakku account services, and we permanently delete
                            your personal data.
                        </p>
                        <p className="card-text">
                            Are you sure you want to close your account?
                        </p>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="delete_account"
                                />
                                <label className="custom-control-label text-danger">
                                    Confirm that I want to delete my account.
                                </label>
                            </div>
                        </div>

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
export default DeleteAccount;
