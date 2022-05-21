import React, { useState, useEffect } from "react";
import Link from "next/link";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import DatePicker from "react-datepicker";
import Modal from "react-bootstrap/Modal";

const Calendar = (props) => {
    const [startDate, setDate] = useState(new Date()),
        [showCategory, setshowCategory] = useState(false),
        [showEvents, setshowEvents] = useState(false),
        [show, setshow] = useState(false),
        [iseditdelete, setiseditdelete] = useState(false),
        [addneweventobj, setaddneweventobj] = useState(null),
        [isnewevent, setisnewevent] = useState(false),
        [event_title, setevent_title] = useState(""),
        [category_color, setcategory_color] = useState(""),
        [calenderevent, setcalenderevent] = useState(""),
        [weekendsVisible, setweekendsVisible] = useState(true),
        [currentEvents, setscurrentEvents] = useState([]),
        defaultEvents = [
            {
                title: "Event Name 4",
                start: Date.now() + 148000000,
                className: "bg-purple",
            },
            {
                title: "Test Event 1",
                start: Date.now(),
                end: Date.now(),
                className: "bg-success",
            },
            {
                title: "Test Event 2",
                start: Date.now() + 168000000,
                className: "bg-info",
            },
            {
                title: "Test Event 3",
                start: Date.now() + 338000000,
                className: "bg-primary",
            },
        ];
    useEffect(() => {
        let elements = Array.from(
            document.getElementsByClassName("react-datepicker-wrapper")
        );
        elements.map((element) => element.classList.add("width-100"));
    }, []);

    const handleChange = (date) => {
        setDate(date);
    };
    const addEvent = () => {
        setshowEvents(true);
    };
    const categoryHandler = () => {
        setshowCategory(true);
    };

    const handleClose = () => {
        setisnewevent(false);
        setiseditdelete(false);
        setshow(false);
        setshowCategory(false);
        setshowEvents(false);
    };
    const handleEventClick = (clickInfo) => {
        setiseditdelete(false);
        setevent_title(clickInfo.event.title);
        setcalenderevent(clickInfo.event);
    };

    const handleDateSelect = (selectInfo) => {
        setisnewevent(true);
        setaddneweventobj(selectInfo);
    };
    const addnewevent = () => {
        let calendarApi = addneweventobj.view.calendar;

        calendarApi.unselect(); // clear date selection

        if (event_title) {
            calendarApi.addEvent({
                id: 10,
                title: event_title,
                className: category_color,
                start: addneweventobj.startStr,
                end: addneweventobj.endStr,
                allDay: addneweventobj.allDay,
            });
        }
        setisnewevent(false);
    };

    const onupdateModalClose = () => {
        setiseditdelete(false);
        setevent_title("");
    };
    const oncreateeventModalClose = () => {
        setevent_title("");
        setisnewevent(false);
    };
    const removeevent = () => {
        calenderevent.remove();
        setiseditdelete(false);
    };
    const clickupdateevent = () => {
        const newArray = defaultEvents;
        for (let i = 0; i < newArray.length; i++) {
            if (newArray[i].id === parseInt(calenderevent.id)) {
                newArray[i].title = event_title;
            }
        }
        defaultEvents = newArray;
        setiseditdelete(false);
    };

    const handleClick = () => {
        setshow(true);
    };

    const rendereventclick = () => {
        return (
            <form className="event-form">
                <label>Change event name</label>
                <div className="input-group">
                    <input
                        className="form-control"
                        type="text"
                        value={event_title}
                        onChange={(event) => setevent_title(event.target.value)}
                    />
                    <span className="input-group-append">
                        <button
                            type="button"
                            className="btn btn-success btn-md"
                            onClick={() => clickupdateevent}
                        >
                            Save
                        </button>
                    </span>
                </div>
            </form>
        );
    };
    const renderaddnewevent = () => {
        return (
            <form>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label className="control-label">Event Name</label>
                            <input
                                className="form-control"
                                type="text"
                                name="title"
                                value={event_title}
                                onChange={(event) =>
                                    setevent_title(event.target.value)
                                }
                            />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <label className="control-label">Category</label>
                            <select
                                className="select form-control"
                                name="category"
                                onChange={(event) =>
                                    setcategory_color(event.target.value)
                                }
                            >
                                <option value="bg-danger">Danger</option>
                                <option value="bg-success">Success</option>
                                <option value="bg-purple">Purple</option>
                                <option value="bg-primary">Primary</option>
                                <option value="bg-pink">Pink</option>
                                <option value="bg-info">Info</option>
                                <option value="bg-inverse">Inverse</option>
                                <option value="bg-orange">Orange</option>
                                <option value="bg-brown">Brown</option>
                                <option value="bg-teal">Teal</option>
                                <option value="bg-warning">Warning</option>
                            </select>
                        </div>
                    </div>
                </div>
            </form>
        );
    };
    return (
        <div className="page-wrapper">
            <div className="content container-fluid">
                {/* Page Header */}
                <div className="page-header">
                    <div className="row align-items-center">
                        <div className="col">
                            <h3 className="page-title">Calendar</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link href="/">Dashboard</Link>
                                </li>
                                <li className="breadcrumb-item active">
                                    Calendar
                                </li>
                            </ul>
                        </div>
                        <div className="col-auto text-right float-right ml-auto">
                            <a
                                href="#"
                                onClick={addEvent}
                                className="btn btn-primary"
                            >
                                Create Event
                            </a>
                        </div>
                    </div>
                </div>
                {/*  /Page Header */}

                <div className="row">
                    <div className="col-lg-3 col-md-4">
                        <h4 className="card-title">Drag & Drop Event</h4>
                        <div id="calendar-events" className="mb-3">
                            <div className="calendar-events">
                                <i className="fas fa-circle text-info"></i> My
                                Event One
                            </div>
                            <div className="calendar-events">
                                <i className="fas fa-circle text-success"></i>{" "}
                                My Event Two
                            </div>
                            <div className="calendar-events">
                                <i className="fas fa-circle text-danger"></i> My
                                Event Three
                            </div>
                            <div className="calendar-events">
                                <i className="fas fa-circle text-warning"></i>{" "}
                                My Event Four
                            </div>
                        </div>
                        <div className="checkbox  mb-3">
                            <input id="drop-remove" type="checkbox" />
                            <label>Remove after drop</label>
                        </div>
                        <a
                            href="#0"
                            onClick={categoryHandler}
                            className="btn mb-3 btn-primary btn-block"
                        >
                            <i className="fas fa-plus"></i> Add Category
                        </a>
                    </div>
                    <div className="col-lg-9 col-md-8">
                        <div className="card bg-white calendarIndex">
                            <div className="card-body">
                                <FullCalendar
                                    plugins={[
                                        dayGridPlugin,
                                        timeGridPlugin,
                                        interactionPlugin,
                                    ]}
                                    headerToolbar={{
                                        left: "prev,next today",
                                        center: "title",
                                        right: "dayGridMonth,timeGridWeek,timeGridDay",
                                    }}
                                    initialView="dayGridMonth"
                                    editable={true}
                                    selectable={true}
                                    selectMirror={true}
                                    dayMaxEvents={true}
                                    weekends={weekendsVisible}
                                    initialEvents={defaultEvents} // alternatively, use the `events` setting to fetch from a feed
                                    select={handleDateSelect}
                                    // eventContent={renderEventContent} // custom render function
                                    eventClick={(clickInfo) =>
                                        handleEventClick(clickInfo)
                                    }
                                    // eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
                                    /* you can update a remote database when these fire:
                                    eventAdd={function(){}}
                                    eventChange={function(){}}
                                    eventRemove={function(){}}
                                    */
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/*  Add Event modal */}
                <div
                    id="add_event"
                    className="modal custom-modal fade"
                    role="dialog"
                >
                    <div
                        className="modal-dialog modal-dialog-centered"
                        role="document"
                    >
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add Event</h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label>
                                            Event Name{" "}
                                            <span className="text-danger">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            className="form-control"
                                            type="text"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>
                                            Event Date{" "}
                                            <span className="text-danger">
                                                *
                                            </span>
                                        </label>
                                        <div className="cal-icon">
                                            <input
                                                className="form-control"
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                    <div className="submit-section">
                                        <button className="btn btn-primary submit-btn">
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  /Add Event modal */}

                {/*  Create Event modal */}
                <div
                    className="modal custom-modal fade none-border"
                    id="my_event"
                >
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Add Event</h4>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-hidden="true"
                                >
                                    &times;
                                </button>
                            </div>
                            <div className="modal-body"></div>
                            <div className="modal-footer justify-content-center">
                                <button
                                    type="button"
                                    className="btn btn-success save-event submit-btn"
                                >
                                    Create event
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-danger delete-event submit-btn"
                                    data-dismiss="modal"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  /Create Event modal */}

                <Modal centered show={showEvents} onHide={handleClose}>
                    <Modal.Header>
                        <h5 className="modal-title">Add Event</h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <div className="form-group">
                                <label>
                                    Event Name{" "}
                                    <span className="text-danger">*</span>
                                </label>
                                <input className="form-control" type="text" />
                            </div>
                            <div className="form-group">
                                <label>
                                    Event Date{" "}
                                    <span className="text-danger">*</span>
                                </label>
                                <div className="cal-icon">
                                    <DatePicker
                                        selected={startDate}
                                        onChange={handleChange}
                                        className="form-control datetimepicker"
                                    />
                                </div>
                            </div>
                            <div className="submit-section">
                                <button className="btn btn-primary submit-btn">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>

                <Modal centered show={showCategory} onHide={handleClose}>
                    <Modal.Header>
                        <h4 className="modal-title">Add Category</h4>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            onClick={handleClose}
                            aria-hidden="true"
                        >
                            &times;
                        </button>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <div className="form-group">
                                <label>Category Name</label>
                                <input
                                    className="form-control form-white"
                                    placeholder="Enter name"
                                    type="text"
                                    name="category-name"
                                />
                            </div>
                            <div className="form-group mb-0">
                                <label>Choose Category Color</label>
                                <select
                                    className="form-control form-white"
                                    data-placeholder="Choose a color..."
                                    name="category-color"
                                >
                                    <option value="success">Success</option>
                                    <option value="danger">Danger</option>
                                    <option value="info">Info</option>
                                    <option value="primary">Primary</option>
                                    <option value="warning">Warning</option>
                                    <option value="inverse">Inverse</option>
                                </select>
                            </div>
                            <div className="submit-section">
                                <button
                                    type="button"
                                    className="btn btn-primary save-category submit-btn"
                                    data-dismiss="modal"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>
                {/*  /Add Category modal */}

                {/* {Event Click} */}
                <Modal centered show={iseditdelete} onHide={handleClose}>
                    <Modal.Header>Event</Modal.Header>
                    <Modal.Body>{rendereventclick()}</Modal.Body>
                    <Modal.Footer>
                        <button
                            type="button"
                            className="btn btn-danger submit-btn delete-event"
                            data-dismiss="modal"
                            onClick={() => removeevent()}
                        >
                            Delete
                        </button>
                    </Modal.Footer>
                </Modal>
                <Modal centered show={isnewevent} onHide={handleClose}>
                    <Modal.Header>Event</Modal.Header>
                    <Modal.Body>{renderaddnewevent()}</Modal.Body>
                    <Modal.Footer>
                        <button
                            type="button"
                            className="btn btn-success submit-btn delete-event"
                            data-dismiss="modal"
                            onClick={() => addnewevent()}
                        >
                            Create event
                        </button>
                    </Modal.Footer>
                </Modal>

                <Modal show={show} onHide={handleClose} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Create Event</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <div className="form-group">
                                <label>
                                    Event Name{" "}
                                    <span className="text-danger">*</span>
                                </label>
                                <input className="form-control" type="text" />
                            </div>
                            <div className="form-group">
                                <label>
                                    Event Date{" "}
                                    <span className="text-danger">*</span>
                                </label>
                                <DatePicker
                                    selected={startDate}
                                    onChange={handleChange}
                                    className="form-control datetimepicker w-100"
                                />
                            </div>
                            <div className="submit-section">
                                <button className="btn btn-primary submit-btn">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    );
};
export default Calendar;
