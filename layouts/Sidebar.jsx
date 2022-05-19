import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import Link from "next/link";
import FeatherIcon from "feather-icons-react";

const Sidebar = (props) => {
    useEffect(() => {
        var $this = $("#sidebar-menu a");
        var $wrapper = $(".main-wrapper");
        var $slimScrolls = $(".slimscroll");

        // Sidebar Slimscroll
        if ($slimScrolls.length > 0) {
            $slimScrolls.slimScroll({
                height: "auto",
                width: "100%",
                position: "right",
                size: "7px",
                color: "#ccc",
                allowPageScroll: false,
                wheelStep: 10,
                touchScrollStep: 100,
            });
            var wHeight = $(window).height() - 60;
            $slimScrolls.height(wHeight);
            $(".sidebar .slimScrollDiv").height(wHeight);
            $(window).resize(function () {
                var rHeight = $(window).height() - 60;
                $slimScrolls.height(rHeight);
                $(".sidebar .slimScrollDiv").height(rHeight);
            });
        }
        $("#sidebar-menu a").on("click", function (e) {
            if ($(this).parent().hasClass("submenu")) {
                e.preventDefault();
            }
            if (!$(this).parent().hasClass("submenu")) {
                $(".sidebar-overlay").trigger("click");
            }
            if (!$(this).hasClass("subdrop")) {
                $("ul", $(this).parents("ul:first")).slideUp(350);
                $("a", $(this).parents("ul:first")).removeClass("subdrop");
                $(this).next("ul").slideDown(350);
                $(this).addClass("subdrop");
            } else if ($(this).hasClass("subdrop")) {
                $(this).removeClass("subdrop");
                $(this).next("ul").slideUp(350);
            }
        });

        $("body").append('<div class="sidebar-overlay"></div>');
        $(document).on("click", "#mobile_btn", function () {
            $wrapper.toggleClass("slide-nav");
            $(".sidebar-overlay").toggleClass("opened");
            $("html").addClass("menu-opened");
            return false;
        });
        // Sidebar overlay
        $(".sidebar-overlay").on("click", function () {
            $wrapper.removeClass("slide-nav");
            $(".sidebar-overlay").removeClass("opened");
            $("html").removeClass("menu-opened");
        });
        $("#sidebar-menu ul li.submenu a.active")
            .parents("li:last")
            .children("a:first")
            .addClass("active")
            .trigger("click");

        if ($(".page-wrapper").length > 0) {
            var height = $(window).height();
            $(".page-wrapper").css("min-height", height);
        }

        // Page Content Height Resize
        $(window).resize(function () {
            if ($(".page-wrapper").length > 0) {
                var height = $(window).height();
                $(".page-wrapper").css("min-height", height);
            }
        });

        $(document).on("mouseover", function (e) {
            e.stopPropagation();
            if (
                $("body").hasClass("mini-sidebar") &&
                $("#toggle_btn").is(":visible")
            ) {
                var targ = $(e.target).closest(".sidebar").length;
                if (targ) {
                    $("body").addClass("expand-menu");
                    $(".subdrop + ul").slideDown();
                } else {
                    $("body").removeClass("expand-menu");
                    $(".subdrop + ul").slideUp();
                }
                return false;
            }
        });
    }, []);

    // let pathName = props.location.pathname;
    let pathName = {};
    return (
        <div className="sidebar" id="sidebar">
            <div className="sidebar-inner slimscroll">
                <div id="sidebar-menu" className="sidebar-menu">
                    <ul>
                        <li className="menu-title">
                            <span>Main</span>
                        </li>
                        <li
                            className={`${
                                "/index" === pathName ? "active" : ""
                            }`}
                        >
                            <Link href="/index">
                                <a>
                                    <FeatherIcon icon="home" />{" "}
                                    <span>Dashboard</span>
                                </a>
                            </Link>
                        </li>
                        <li
                            className={`${
                                "/customers" === pathName ||
                                "/add-customer" === pathName ||
                                "/add-customer" === pathName
                                    ? "active"
                                    : ""
                            }`}
                        >
                            <Link href="/customers">
                                <a>
                                    <FeatherIcon icon="users" />
                                    <span>Customers</span>
                                </a>
                            </Link>
                        </li>
                        <li
                            className={`${
                                "/estimates" === pathName ||
                                "/add-estimate" === pathName ||
                                "/edit-estimate" === pathName ||
                                "/view-estimate" === pathName
                                    ? "active"
                                    : ""
                            }`}
                        >
                            <Link href="/estimates">
                                <a>
                                    <FeatherIcon icon="file-text" />
                                    <span>Estimates</span>
                                </a>
                            </Link>
                        </li>
                        <li
                            className={`${
                                "/invoices" === pathName ||
                                "/add-invoice" === pathName ||
                                "/edit-invoice" === pathName
                                    ? "active"
                                    : ""
                            }`}
                        >
                            <Link href="/invoices">
                                <a>
                                    <FeatherIcon icon="clipboard" />{" "}
                                    <span>Invoices</span>
                                </a>
                            </Link>
                        </li>
                        <li
                            className={`${
                                "/payments" === pathName ||
                                "/add-payments" === pathName
                                    ? "active"
                                    : ""
                            }`}
                        >
                            <Link href="/payments">
                                <a>
                                    <FeatherIcon icon="credit-card" />{" "}
                                    <span>Payments</span>
                                </a>
                            </Link>
                        </li>
                        <li
                            className={`${
                                "/expenses" === pathName ||
                                "/add-expenses" === pathName ||
                                "/edit-expenses" === pathName
                                    ? "active"
                                    : ""
                            }`}
                        >
                            <Link href="/expenses">
                                <a>
                                    <FeatherIcon icon="package" />{" "}
                                    <span>Expenses</span>
                                </a>
                            </Link>
                        </li>
                        <li
                            className={`${
                                "/sales-report" === pathName ||
                                "/expenses-report" === pathName ||
                                "/profit-loss-report" === pathName ||
                                "/taxs-report" === pathName
                                    ? "active submenu"
                                    : "submenu"
                            }`}
                        >
                            <a href="#">
                                <FeatherIcon icon="pie-chart" />{" "}
                                <span> Reports</span>{" "}
                                <span className="menu-arrow"></span>
                            </a>
                            <ul>
                                <li
                                    className={`${
                                        "/sales-report" === pathName
                                            ? "active"
                                            : ""
                                    }`}
                                >
                                    <Link href="/sales-report">
                                        <a>Sales Report</a>
                                    </Link>
                                </li>
                                <li
                                    className={`${
                                        "/expenses-report" === pathName
                                            ? "active"
                                            : ""
                                    }`}
                                >
                                    <Link href="/expenses-report">
                                        <a>Expenses Report</a>
                                    </Link>
                                </li>
                                <li
                                    className={`${
                                        "/profit-loss-report" === pathName
                                            ? "active"
                                            : ""
                                    }`}
                                >
                                    <Link href="/profit-loss-report">
                                        <a>Profit &amp; Loss Report</a>
                                    </Link>
                                </li>
                                <li
                                    className={`${
                                        "/taxs-report" === pathName
                                            ? "active"
                                            : ""
                                    }`}
                                >
                                    <Link href="/taxs-report">
                                        <a>Taxs Report</a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li
                            className={`${
                                "/settings" === pathName ||
                                "/preferences" === pathName ||
                                "/tax-types" === pathName ||
                                "/expense-category" === pathName ||
                                "/notifications" === pathName ||
                                "/change-password" === pathName ||
                                "/delete-account" === pathName
                                    ? "active"
                                    : ""
                            }`}
                        >
                            <Link href="/settings">
                                <a>
                                    <FeatherIcon icon="settings" />{" "}
                                    <span>Settings</span>
                                </a>
                            </Link>
                        </li>
                        <li
                            className={`${
                                "/chat" === pathName ||
                                "/calendar" === pathName ||
                                "/inbox" === pathName
                                    ? "active submenu"
                                    : "submenu"
                            }`}
                        >
                            <a href="#">
                                <FeatherIcon icon="grid" />{" "}
                                <span> Application</span>{" "}
                                <span className="menu-arrow"></span>
                            </a>
                            <ul>
                                <li
                                    className={`${
                                        "/chat" === pathName ? "active" : ""
                                    }`}
                                >
                                    <Link href="/chat">
                                        <a>Chat</a>
                                    </Link>
                                </li>
                                <li
                                    className={`${
                                        "/calendar" === pathName ? "active" : ""
                                    }`}
                                >
                                    <Link href="/calendar">Calendar</Link>
                                </li>
                                <li
                                    className={`${
                                        "/inbox" === pathName ? "active" : ""
                                    }`}
                                >
                                    <Link href="/inbox">Email</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-title">
                            <span>Pages</span>
                        </li>
                        <li
                            className={`${
                                "/profile" === pathName ? "active" : ""
                            }`}
                        >
                            <Link href="/profile">
                                <a>
                                    <FeatherIcon icon="user-plus" />{" "}
                                    <span>Profile</span>
                                </a>
                            </Link>
                        </li>
                        <li
                            className={`${
                                "/login" === pathName ||
                                "/register" === pathName ||
                                "/forgot-password" === pathName ||
                                "/lock-screen" === pathName
                                    ? "active submenu"
                                    : "submenu"
                            }`}
                        >
                            <a href="#">
                                <FeatherIcon icon="lock" />{" "}
                                <span> Authentication </span>{" "}
                                <span className="menu-arrow"></span>
                            </a>
                            <ul>
                                <li
                                    className={`${
                                        "/login" === pathName ? "active" : ""
                                    }`}
                                >
                                    <Link href="/login"> Login </Link>
                                </li>
                                <li
                                    className={`${
                                        "/register" === pathName ? "active" : ""
                                    }`}
                                >
                                    <Link href="/register"> Register </Link>
                                </li>
                                <li
                                    className={`${
                                        "/forgot-password" === pathName
                                            ? "active"
                                            : ""
                                    }`}
                                >
                                    <Link href="/forgot-password">
                                        <a> Forgot Password </a>
                                    </Link>
                                </li>
                                <li
                                    className={`${
                                        "/lock-screen" === pathName
                                            ? "active"
                                            : ""
                                    }`}
                                >
                                    <Link href="/lock-screen">
                                        <a> Lock Screen </a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li
                            className={`${
                                "/error-404" === pathName ||
                                "/error-500" === pathName
                                    ? "active submenu"
                                    : "submenu"
                            }`}
                        >
                            <a href="#">
                                <FeatherIcon icon="alert-octagon" />{" "}
                                <span> Error Pages </span>{" "}
                                <span className="menu-arrow"></span>
                            </a>
                            <ul>
                                <li
                                    className={`${
                                        "/error-404" === pathName
                                            ? "active"
                                            : ""
                                    }`}
                                >
                                    <Link href="/error-404">404 Error </Link>
                                </li>
                                <li
                                    className={`${
                                        "/error-500" === pathName
                                            ? "active"
                                            : ""
                                    }`}
                                >
                                    <Link href="/error-500">500 Error </Link>
                                </li>
                            </ul>
                        </li>
                        <li
                            className={`${
                                "/users" === pathName ? "active" : ""
                            }`}
                        >
                            <Link href="/users">
                                <a>
                                    <FeatherIcon icon="users" />{" "}
                                    <span>Users</span>
                                </a>
                            </Link>
                        </li>
                        <li
                            className={`${
                                "/blank-page" === pathName ? "active" : ""
                            }`}
                        >
                            <Link href="/blank-page">
                                <a>
                                    <FeatherIcon icon="file" />{" "}
                                    <span>Blank Page</span>
                                </a>
                            </Link>
                        </li>
                        <li
                            className={`${
                                "/maps-vector" === pathName ? "active" : ""
                            }`}
                        >
                            <Link href="/maps-vector">
                                <a>
                                    <FeatherIcon icon="map-pin" />{" "}
                                    <span>Vector Maps</span>
                                </a>
                            </Link>
                        </li>
                        <li className="menu-title">
                            <span>UI Interface</span>
                        </li>
                        <li
                            className={`${
                                "/components" === pathName ? "active" : ""
                            }`}
                        >
                            <Link href="/components">
                                <a>
                                    <FeatherIcon icon="layers" />{" "}
                                    <span>Components</span>
                                </a>
                            </Link>
                        </li>
                        <li
                            className={`${
                                "/form-basic-inputs" === pathName ||
                                "/form-input-groups" === pathName ||
                                "/form-horizontal" === pathName ||
                                "/form-vertical" === pathName ||
                                "/form-mask" === pathName ||
                                "/form-validation" === pathName
                                    ? "active submenu"
                                    : "submenu"
                            }`}
                        >
                            <a href="#">
                                <FeatherIcon icon="file-minus" />{" "}
                                <span> Forms </span>{" "}
                                <span className="menu-arrow"></span>
                            </a>
                            <ul>
                                <li
                                    className={`${
                                        "/form-basic-inputs" === pathName
                                            ? "active"
                                            : ""
                                    }`}
                                >
                                    <Link href="/form-basic-inputs">
                                        Basic Inputs
                                    </Link>
                                </li>
                                <li
                                    className={`${
                                        "/form-input-groups" === pathName
                                            ? "active"
                                            : ""
                                    }`}
                                >
                                    <Link href="/form-input-groups">
                                        Input Groups
                                    </Link>
                                </li>
                                <li
                                    className={`${
                                        "/form-horizontal" === pathName
                                            ? "active"
                                            : ""
                                    }`}
                                >
                                    <Link href="/form-horizontal">
                                        Horizontal Form
                                    </Link>
                                </li>
                                <li
                                    className={`${
                                        "/form-vertical" === pathName
                                            ? "active"
                                            : ""
                                    }`}
                                >
                                    <Link href="/form-vertical">
                                        Vertical Form
                                    </Link>
                                </li>
                                <li
                                    className={`${
                                        "/form-mask" === pathName
                                            ? "active"
                                            : ""
                                    }`}
                                >
                                    <Link href="/form-mask"> Form Mask </Link>
                                </li>
                                <li
                                    className={`${
                                        "/form-validation" === pathName
                                            ? "active"
                                            : ""
                                    }`}
                                >
                                    <Link href="/form-validation">
                                        Form Validation
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li
                            className={`${
                                "/tables-basic" === pathName ||
                                "/data-tables" === pathName
                                    ? "active submenu"
                                    : "submenu"
                            }`}
                        >
                            <a href="#">
                                <FeatherIcon icon="layout" />{" "}
                                <span> Tables </span>{" "}
                                <span className="menu-arrow"></span>
                            </a>
                            <ul>
                                <li
                                    className={`${
                                        "/tables-basic" === pathName
                                            ? "active"
                                            : ""
                                    }`}
                                >
                                    <Link href="/tables-basic">
                                        Basic Tables
                                    </Link>
                                </li>
                                <li
                                    className={`${
                                        "/data-tables" === pathName
                                            ? "active"
                                            : ""
                                    }`}
                                >
                                    <Link href="/data-tables">Data Table </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
// export default withRouter(Sidebar);
export default Sidebar;
