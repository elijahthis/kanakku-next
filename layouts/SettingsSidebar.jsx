import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const SettingsSidebar = (props) => {
    const router = useRouter();
    let pathName = router.pathname;
    return (
        <div className="widget settings-menu">
            <ul>
                <li className="nav-item">
                    <Link href="/settings">
                        <a
                            className={`${
                                "/settings" === pathName
                                    ? "active nav-link"
                                    : "nav-link"
                            }`}
                        >
                            <i className="far fa-user"></i>{" "}
                            <span>Profile Settings</span>
                        </a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/preferences">
                        <a
                            className={`${
                                "/preferences" === pathName
                                    ? "active nav-link"
                                    : "nav-link"
                            }`}
                        >
                            <i className="fas fa-cog"></i>{" "}
                            <span>Preferences</span>
                        </a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/tax-types">
                        <a
                            className={`${
                                "/tax-types" === pathName
                                    ? "active nav-link"
                                    : "nav-link"
                            }`}
                        >
                            <i className="far fa-check-square"></i>{" "}
                            <span>Tax Types</span>
                        </a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/expense-category">
                        <a
                            className={`${
                                "/expense-category" === pathName
                                    ? "active nav-link"
                                    : "nav-link"
                            }`}
                        >
                            <i className="far fa-list-alt"></i>{" "}
                            <span>Expense Category</span>
                        </a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/notifications">
                        <a
                            className={`${
                                "/notifications" === pathName
                                    ? "active nav-link"
                                    : "nav-link"
                            }`}
                        >
                            <i className="far fa-bell"></i>{" "}
                            <span>Notifications</span>
                        </a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/change-password">
                        <a
                            className={`${
                                "/change-password" === pathName
                                    ? "active nav-link"
                                    : "nav-link"
                            }`}
                        >
                            <i className="fas fa-unlock-alt"></i>{" "}
                            <span>Change Password</span>
                        </a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/delete-account">
                        <a
                            className={`${
                                "/delete-account" === pathName
                                    ? "active nav-link"
                                    : "nav-link"
                            }`}
                        >
                            <i className="fas fa-ban"></i>{" "}
                            <span>Delete Account</span>
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    );
};
export default SettingsSidebar;
