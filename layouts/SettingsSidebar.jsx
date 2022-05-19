import React from 'react';
import { Link, withRouter } from 'react-router-dom';


const SettingsSidebar = (props) => {
    
        let pathName = props.location.pathname;
        return (
            <div className="widget settings-menu">
                <ul>
                    <li className="nav-item">
                        <Link to="/settings" className={`${'/settings' === pathName ? 'active nav-link' : 'nav-link' }`}>
                            <i className="far fa-user"></i> <span>Profile Settings</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/preferences" className={`${'/preferences' === pathName ? 'active nav-link' : 'nav-link' }`}>
                            <i className="fas fa-cog"></i> <span>Preferences</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/tax-types" className={`${'/tax-types' === pathName ? 'active nav-link' : 'nav-link' }`}>
                            <i className="far fa-check-square"></i> <span>Tax Types</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/expense-category" className={`${'/expense-category' === pathName ? 'active nav-link' : 'nav-link' }`}>
                            <i className="far fa-list-alt"></i> <span>Expense Category</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/notifications" className={`${'/notifications' === pathName ? 'active nav-link' : 'nav-link' }`}>
                            <i className="far fa-bell"></i> <span>Notifications</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/change-password" className={`${'/change-password' === pathName ? 'active nav-link' : 'nav-link' }`}>
                            <i className="fas fa-unlock-alt"></i> <span>Change Password</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/delete-account" className={`${'/delete-account' === pathName ? 'active nav-link' : 'nav-link' }`}>
                            <i className="fas fa-ban"></i> <span>Delete Account</span>
                        </Link>
                    </li>
                </ul>
            </div>
        );
    
}
export default withRouter(SettingsSidebar);