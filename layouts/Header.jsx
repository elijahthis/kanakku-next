import React from "react";
import Link from "next/link";
import FeatherIcon from "feather-icons-react";
import Image from "next/image";
import img1 from "../assets/img/profiles/avatar-01.jpg";
import img2 from "../assets/img/profiles/avatar-02.jpg";
import img3 from "../assets/img/profiles/avatar-03.jpg";
import img4 from "../assets/img/profiles/avatar-04.jpg";
import LogoImg from "../assets/img/logo.png";
import LogoSmallImg from "../assets/img/logo-small.png";
import UsFlag from "../assets/img/flags/us.png";
import FrFlag from "../assets/img/flags/fr.png";
import EsFlag from "../assets/img/flags/es.png";
import DeFlag from "../assets/img/flags/de.png";
import $ from "jquery";

const Header = () => {
    const handlesidebar = () => {
        document.body.classList.toggle("mini-sidebar");
    };

    return (
        <div className="header">
            <div className="header-left">
                <Link href="/">
                    <a className="logo">
                        <Image
                            src={LogoImg}
                            alt="Logo"
                            width="175"
                            height="45"
                        />
                    </a>
                </Link>
                <Link href="/">
                    <a className="logo logo-small">
                        <Image
                            src={LogoSmallImg}
                            alt="Logo"
                            width="30"
                            height="30"
                        />
                    </a>
                </Link>
            </div>

            <a href="#" id="toggle_btn" onClick={handlesidebar}>
                <i className="fas fa-bars"></i>
            </a>

            <div className="top-nav-search">
                <form>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search here"
                    />
                    <button className="btn" type="submit">
                        <i className="fas fa-search"></i>
                    </button>
                </form>
            </div>

            <a className="mobile_btn" id="mobile_btn">
                <i className="fas fa-bars"></i>
            </a>

            <ul className="nav user-menu">
                <li className="nav-item dropdown has-arrow flag-nav">
                    <a
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        href="#"
                        role="button"
                    >
                        <span className="flag-img">
                            <Image src={UsFlag} alt="" height="20" width="20" />
                        </span>{" "}
                        <span>English</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                        <a href="#" className="dropdown-item">
                            <div className="img-div">
                                <Image
                                    src={UsFlag}
                                    alt=""
                                    height="16"
                                    width="16"
                                />
                            </div>{" "}
                            English
                        </a>
                        <a href="#" className="dropdown-item">
                            <div className="img-div">
                                <Image
                                    src={FrFlag}
                                    alt=""
                                    height="16"
                                    width="16"
                                />
                            </div>{" "}
                            French
                        </a>
                        <a href="#" className="dropdown-item">
                            <div className="img-div">
                                <Image
                                    src={EsFlag}
                                    alt=""
                                    height="16"
                                    width="16"
                                />
                            </div>{" "}
                            Spanish
                        </a>
                        <a href="#" className="dropdown-item">
                            <div className="img-div">
                                <Image
                                    src={DeFlag}
                                    alt=""
                                    height="16"
                                    width="16"
                                />
                            </div>{" "}
                            German
                        </a>
                    </div>
                </li>

                <li className="nav-item dropdown">
                    <a
                        href="#"
                        className="dropdown-toggle nav-link"
                        data-toggle="dropdown"
                    >
                        <FeatherIcon icon="bell" />{" "}
                        <span className="badge badge-pill">5</span>
                    </a>
                    <div className="dropdown-menu notifications">
                        <div className="topnav-dropdown-header">
                            <span className="notification-title">
                                Notifications
                            </span>
                            <a href="#" className="clear-noti">
                                {" "}
                                Clear All
                            </a>
                        </div>
                        <div className="noti-content">
                            <ul className="notification-list">
                                <li className="notification-message">
                                    <a href="#">
                                        <div className="media">
                                            <span className="avatar avatar-sm">
                                                <img
                                                    className="avatar-img rounded-circle"
                                                    alt=""
                                                    src={img2}
                                                />
                                            </span>
                                            <div className="media-body">
                                                <p className="noti-details">
                                                    <span className="noti-title">
                                                        Brian Johnson
                                                    </span>{" "}
                                                    paid the invoice{" "}
                                                    <span className="noti-title">
                                                        #DF65485
                                                    </span>
                                                </p>
                                                <p className="noti-time">
                                                    <span className="notification-time">
                                                        4 mins ago
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="notification-message">
                                    <a href="#">
                                        <div className="media">
                                            <span className="avatar avatar-sm">
                                                <img
                                                    className="avatar-img rounded-circle"
                                                    alt=""
                                                    src={img3}
                                                />
                                            </span>
                                            <div className="media-body">
                                                <p className="noti-details">
                                                    <span className="noti-title">
                                                        Marie Canales
                                                    </span>{" "}
                                                    has accepted your estimate{" "}
                                                    <span className="noti-title">
                                                        #GTR458789
                                                    </span>
                                                </p>
                                                <p className="noti-time">
                                                    <span className="notification-time">
                                                        6 mins ago
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="notification-message">
                                    <a href="#">
                                        <div className="media">
                                            <div className="avatar avatar-sm">
                                                <span className="avatar-title rounded-circle bg-primary-light">
                                                    <i className="far fa-user"></i>
                                                </span>
                                            </div>
                                            <div className="media-body">
                                                <p className="noti-details">
                                                    <span className="noti-title">
                                                        New user registered
                                                    </span>
                                                </p>
                                                <p className="noti-time">
                                                    <span className="notification-time">
                                                        8 mins ago
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="notification-message">
                                    <a href="#">
                                        <div className="media">
                                            <span className="avatar avatar-sm">
                                                <img
                                                    className="avatar-img rounded-circle"
                                                    alt=""
                                                    src={img4}
                                                />
                                            </span>
                                            <div className="media-body">
                                                <p className="noti-details">
                                                    <span className="noti-title">
                                                        Barbara Moore
                                                    </span>{" "}
                                                    declined the invoice{" "}
                                                    <span className="noti-title">
                                                        #RDW026896
                                                    </span>
                                                </p>
                                                <p className="noti-time">
                                                    <span className="notification-time">
                                                        12 mins ago
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="notification-message">
                                    <a href="#">
                                        <div className="media">
                                            <div className="avatar avatar-sm">
                                                <span className="avatar-title rounded-circle bg-info-light">
                                                    <i className="far fa-comment"></i>
                                                </span>
                                            </div>
                                            <div className="media-body">
                                                <p className="noti-details">
                                                    <span className="noti-title">
                                                        You have received a new
                                                        message
                                                    </span>
                                                </p>
                                                <p className="noti-time">
                                                    <span className="notification-time">
                                                        2 days ago
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="topnav-dropdown-footer">
                            <a href="#">View all Notifications</a>
                        </div>
                    </div>
                </li>

                <li className="nav-item dropdown has-arrow main-drop">
                    <a
                        href="#"
                        className="dropdown-toggle nav-link"
                        data-toggle="dropdown"
                    >
                        <span className="user-img">
                            <Image width="32" height="32" src={img1} alt="" />
                            <span className="status online"></span>
                        </span>
                        <span>Admin</span>
                    </a>
                    <div className="dropdown-menu">
                        <Link href="/profile">
                            <a className="dropdown-item">
                                <FeatherIcon icon="user" className="mr-1" />{" "}
                                Profile
                            </a>
                        </Link>
                        <Link href="/settings">
                            <a className="dropdown-item">
                                <FeatherIcon icon="settings" className="mr-1" />
                                Settings
                            </a>
                        </Link>
                        <Link href="/login">
                            <a className="dropdown-item">
                                <FeatherIcon icon="log-out" className="mr-1" />
                                Logout
                            </a>
                        </Link>
                    </div>
                </li>
            </ul>
        </div>
    );
};
export default Header;
