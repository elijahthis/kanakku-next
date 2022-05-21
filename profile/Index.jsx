import React from "react";
import Link from "next/link";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import Image from "next/image";
import img2 from "../assets/img/profiles/avatar-02.jpg";
import FeatherIcon from "feather-icons-react";

const Profile = () => {
    return (
        <div className="page-wrapper">
            <div className="content container-fluid">
                <div className="row justify-content-lg-center">
                    <div className="col-lg-10">
                        {/* Page Header  */}
                        <div className="page-header">
                            <div className="row">
                                <div className="col">
                                    <h3 className="page-title">Profile</h3>
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link href="/">Dashboard</Link>
                                        </li>
                                        <li className="breadcrumb-item active">
                                            Profile
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/*  /Page Header  */}

                        <div className="profile-cover">
                            <div
                                className="profile-cover-wrap"
                                style={{ position: "relative" }}
                            >
                                <Image
                                    className="profile-cover-img"
                                    src={img2}
                                    alt="Profile Cover"
                                    layout="fill"
                                />

                                {/*  Custom File Cover  */}
                                <div className="cover-content">
                                    <div className="custom-file-btn">
                                        <input
                                            type="file"
                                            className="custom-file-btn-input"
                                            id="cover_upload"
                                        />
                                        <label
                                            className="custom-file-btn-label btn btn-sm btn-white"
                                            htmlFor="cover_upload"
                                        >
                                            <i className="fas fa-camera"></i>
                                            <span className="d-none d-sm-inline-block ml-1">
                                                Update Cover
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                {/*  /Custom File Cover  */}
                            </div>
                        </div>

                        <div className="text-center mb-5">
                            <label
                                className="avatar avatar-xxl profile-cover-avatar"
                                htmlFor="avatar_upload"
                            >
                                <Image
                                    className="avatar-img"
                                    src={img2}
                                    alt="Profile Image"
                                />
                                <input type="file" id="avatar_upload" />
                                <span className="avatar-edit">
                                    <FeatherIcon
                                        icon="edit-2"
                                        className="avatar-uploader-icon shadow-soft"
                                    />
                                </span>
                            </label>
                            <h2>
                                Charles Hafner{" "}
                                <i
                                    className="fas fa-certificate text-primary small"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    data-original-title="Verified"
                                ></i>
                            </h2>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <i className="far fa-building"></i>{" "}
                                    <span>Hafner Pvt Ltd.</span>
                                </li>
                                <li className="list-inline-item">
                                    <i className="fas fa-map-marker-alt"></i>{" "}
                                    West Virginia, US
                                </li>
                                <li className="list-inline-item">
                                    <i className="far fa-calendar-alt"></i>{" "}
                                    <span>Joined November 2017</span>
                                </li>
                            </ul>
                        </div>

                        <div className="row">
                            <div className="col-lg-4">
                                <div className="card card-body">
                                    <h5>Complete your profile</h5>

                                    {/*  Progress  */}
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="progress progress-md flex-grow-1">
                                            <div
                                                className="progress-bar bg-primary"
                                                role="progressbar"
                                                style={{ width: "30%" }}
                                                aria-valuenow="30"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                        <span className="ml-4">30%</span>
                                    </div>
                                    {/* /Progress  */}
                                </div>

                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title d-flex justify-content-between">
                                            <span>Profile</span>
                                            <Link href="/settings">
                                                <a className="btn btn-sm btn-white">
                                                    Edit
                                                </a>
                                            </Link>
                                        </h5>
                                    </div>
                                    <div className="card-body">
                                        <ul className="list-unstyled mb-0">
                                            <li className="py-0">
                                                <small className="text-dark">
                                                    About
                                                </small>
                                            </li>
                                            <li>Charles Hafner</li>
                                            <li>Hafner Pvt Ltd.</li>
                                            <li className="pt-2 pb-0">
                                                <small className="text-dark">
                                                    Contacts
                                                </small>
                                            </li>
                                            <li>charleshafner@example.com</li>
                                            <li>+1 (304) 499-13-66</li>
                                            <li className="pt-2 pb-0">
                                                <small className="text-dark">
                                                    Address
                                                </small>
                                            </li>
                                            <li>
                                                4663 Agriculture Lane,
                                                <br />
                                                Miami,
                                                <br />
                                                Florida - 33165,
                                                <br />
                                                United States.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-8">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title">Activity</h5>
                                    </div>
                                    <div className="card-body card-body-height">
                                        <ul className="activity-feed">
                                            <li className="feed-item">
                                                <div className="feed-date">
                                                    Nov 16
                                                </div>
                                                <span className="feed-text">
                                                    <Link href="/profile">
                                                        Brian Johnson
                                                    </Link>{" "}
                                                    has paid the invoice{" "}
                                                    <Link href="/view-invoice">
                                                        "#DF65485"
                                                    </Link>
                                                </span>
                                            </li>
                                            <li className="feed-item">
                                                <div className="feed-date">
                                                    Nov 7
                                                </div>
                                                <span className="feed-text">
                                                    <Link href="/profile">
                                                        Marie Canales
                                                    </Link>{" "}
                                                    has accepted your estimate{" "}
                                                    <Link href="/view-estimate">
                                                        #GTR458789
                                                    </Link>
                                                </span>
                                            </li>
                                            <li className="feed-item">
                                                <div className="feed-date">
                                                    Oct 24
                                                </div>
                                                <span className="feed-text">
                                                    New expenses added{" "}
                                                    <Link href="/expenses">
                                                        "#TR018756
                                                    </Link>
                                                </span>
                                            </li>
                                            <li className="feed-item">
                                                <div className="feed-date">
                                                    Oct 24
                                                </div>
                                                <span className="feed-text">
                                                    New expenses added{" "}
                                                    <Link href="/expenses">
                                                        "#TR018756
                                                    </Link>
                                                </span>
                                            </li>
                                            <li className="feed-item">
                                                <div className="feed-date">
                                                    Oct 24
                                                </div>
                                                <span className="feed-text">
                                                    New expenses added{" "}
                                                    <Link href="/expenses">
                                                        "#TR018756
                                                    </Link>
                                                </span>
                                            </li>
                                            <li className="feed-item">
                                                <div className="feed-date">
                                                    Oct 24
                                                </div>
                                                <span className="feed-text">
                                                    New expenses added{" "}
                                                    <Link href="/expenses">
                                                        "#TR018756
                                                    </Link>
                                                </span>
                                            </li>
                                            <li className="feed-item">
                                                <div className="feed-date">
                                                    Oct 24
                                                </div>
                                                <span className="feed-text">
                                                    New expenses added{" "}
                                                    <Link href="/expenses">
                                                        "#TR018756
                                                    </Link>
                                                </span>
                                            </li>
                                            <li className="feed-item">
                                                <div className="feed-date">
                                                    Jan 27
                                                </div>
                                                <span className="feed-text">
                                                    <Link href="/profile">
                                                        Robert Martin
                                                    </Link>{" "}
                                                    gave a review for{" "}
                                                    <Link href="/view-invoice">
                                                        "Dell Laptop"
                                                    </Link>
                                                </span>
                                            </li>
                                            <li className="feed-item">
                                                <div className="feed-date">
                                                    Jan 14
                                                </div>
                                                <span className="feed-text">
                                                    New customer registered{" "}
                                                    <Link href="/profile">
                                                        "Tori Carter"
                                                    </Link>
                                                </span>
                                            </li>
                                        </ul>
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
export default Profile;
