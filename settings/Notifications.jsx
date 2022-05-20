import React, { useEffect } from "react";

const Notifications = () => {
    useEffect(() => {
        let elements = Array.from(
            document.getElementsByClassName("select2-container")
        );
        elements.map((element) => element.classList.add("width-100"));
    }, []);

    return (
        <div className="col-xl-9 col-md-8">
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title">Notifications</h5>
                    <p>
                        Which email notifications would you like to receive when
                        something changes?
                    </p>
                </div>
                <div className="card-body">
                    <form>
                        <div className="row form-group">
                            <label className="col-sm-3 col-form-label input-label">
                                Send Notifications to
                            </label>
                            <div className="col-sm-9">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="notificationmail"
                                />
                            </div>
                        </div>

                        <label className="row form-group toggle-switch">
                            <span className="col-8 col-sm-9 toggle-switch-content ml-0">
                                <span className="d-block text-dark">
                                    Invoice viewed
                                </span>
                                <span className="d-block text-muted">
                                    When your customer views the invoice sent
                                    via dashboard.
                                </span>
                            </span>
                            <span className="col-4 col-sm-3">
                                <input
                                    type="checkbox"
                                    className="toggle-switch-input"
                                    id="notification_switch1"
                                />
                                <span className="toggle-switch-label ml-auto">
                                    <span className="toggle-switch-indicator"></span>
                                </span>
                            </span>
                        </label>

                        <label className="row form-group toggle-switch">
                            <span className="col-8 col-sm-9 toggle-switch-content ml-0">
                                <span className="d-block text-dark">
                                    Estimate viewed
                                </span>
                                <span className="d-block text-muted">
                                    When your customer views the estimate sent
                                    via dashboard.
                                </span>
                            </span>
                            <span className="col-4 col-sm-3">
                                <input
                                    type="checkbox"
                                    className="toggle-switch-input"
                                    id="notification_switch2"
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
export default Notifications;
