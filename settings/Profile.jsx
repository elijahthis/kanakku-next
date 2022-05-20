import React from "react";
import Link from "next/link";
import Image from "next/image";
import img2 from "../assets/img/profiles/avatar-02.jpg";
import SettingSidebar from "../layouts/SettingsSidebar";
import FeatherIcon from "feather-icons-react";

const ProfileSettings = () => {
    const formHandler = (e) => {
        console.log(e);
    };
    return (
        <div className="col-xl-9 col-md-8">
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title">Basic information</h5>
                </div>
                <div className="card-body">
                    <form>
                        <div className="row form-group">
                            <label className="col-sm-3 col-form-label input-label">
                                Name
                            </label>
                            <div className="col-sm-9">
                                <div className="d-flex align-items-center">
                                    <label className="avatar avatar-xxl profile-cover-avatar m-0">
                                        <Image
                                            id="avatarImg"
                                            className="avatar-img"
                                            src={img2}
                                            alt="Profile Image"
                                        />
                                        <input type="file" id="edit_img" />
                                        <span className="avatar-edit">
                                            <FeatherIcon icon="edit-2" />
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row form-group">
                            <label className="col-sm-3 col-form-label input-label">
                                Name
                            </label>
                            <div className="col-sm-9">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="Your Name"
                                    value="Charles Hafner"
                                    onChange={formHandler}
                                />
                            </div>
                        </div>
                        <div className="row form-group">
                            <label className="col-sm-3 col-form-label input-label">
                                Email
                            </label>
                            <div className="col-sm-9">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Email"
                                    value="charleshafner@example.com"
                                    onChange={formHandler}
                                />
                            </div>
                        </div>
                        <div className="row form-group">
                            <label className="col-sm-3 col-form-label input-label">
                                Phone{" "}
                                <span className="text-muted">(Optional)</span>
                            </label>
                            <div className="col-sm-9">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="phone"
                                    placeholder="+x(xxx)xxx-xx-xx"
                                    value="+1 (304) 499-13-66"
                                    onChange={formHandler}
                                />
                            </div>
                        </div>
                        <div className="row form-group">
                            <label className="col-sm-3 col-form-label input-label">
                                Location
                            </label>
                            <div className="col-sm-9">
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="location"
                                        placeholder="Country"
                                        value="United States"
                                        onChange={formHandler}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="City"
                                        value="Charleston"
                                        onChange={formHandler}
                                    />
                                </div>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="State"
                                    value="West Virginia"
                                    onChange={formHandler}
                                />
                            </div>
                        </div>
                        <div className="row form-group">
                            <label className="col-sm-3 col-form-label input-label">
                                Address line 1
                            </label>
                            <div className="col-sm-9">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="addressline1"
                                    placeholder="Your address"
                                    value="2681  Columbia Mine Road"
                                    onChange={formHandler}
                                />
                            </div>
                        </div>
                        <div className="row form-group">
                            <label className="col-sm-3 col-form-label input-label">
                                Address line 2{" "}
                                <span className="text-muted">(Optional)</span>
                            </label>
                            <div className="col-sm-9">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="addressline2"
                                    placeholder="Your address"
                                    onChange={formHandler}
                                />
                            </div>
                        </div>
                        <div className="row form-group">
                            <label className="col-sm-3 col-form-label input-label">
                                Zip code
                            </label>
                            <div className="col-sm-9">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="zipcode"
                                    placeholder="Your zip code"
                                    value="25301"
                                    onChange={formHandler}
                                />
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
export default ProfileSettings;
