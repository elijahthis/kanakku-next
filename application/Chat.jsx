import React from "react";
import Image from "next/image";
import img1 from "../assets/img/img-01.jpg";
import img2 from "../assets/img/profiles/avatar-02.jpg";
import img3 from "../assets/img/profiles/avatar-03.jpg";
import img4 from "../assets/img/profiles/avatar-04.jpg";
import img5 from "../assets/img/profiles/avatar-05.jpg";
import img6 from "../assets/img/profiles/avatar-06.jpg";
import img7 from "../assets/img/profiles/avatar-07.jpg";
import img8 from "../assets/img/profiles/avatar-08.jpg";
import img9 from "../assets/img/profiles/avatar-09.jpg";
import img10 from "../assets/img/profiles/avatar-10.jpg";
import img11 from "../assets/img/profiles/avatar-11.jpg";
import img12 from "../assets/img/profiles/avatar-12.jpg";

const Chat = (props) => {
    return (
        <div className="page-wrapper">
            <div className="content container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="chat-window">
                            <div className="chat-cont-left">
                                <div className="chat-header">
                                    <span>Chats</span>
                                    <a
                                        href="javascript:void(0)"
                                        className="chat-compose"
                                    >
                                        <i className="material-icons">
                                            control_point
                                        </i>
                                    </a>
                                </div>
                                <form className="chat-search">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <i className="fas fa-search" />
                                        </div>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search"
                                        />
                                    </div>
                                </form>
                                <div className="chat-users-list">
                                    <div className="chat-scroll">
                                        <a
                                            href="javascript:void(0);"
                                            className="media d-flex"
                                        >
                                            <div className="media-img-wrap">
                                                <div className="avatar avatar-away">
                                                    <Image
                                                        src={img3}
                                                        alt="User Image"
                                                        className="avatar-img rounded-circle"
                                                    />
                                                </div>
                                            </div>
                                            <div className="media-body">
                                                <div>
                                                    <div className="user-name">
                                                        Marie Canales
                                                    </div>
                                                    <div className="user-last-chat">
                                                        Hey, How are you?
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="last-chat-time block">
                                                        2 min
                                                    </div>
                                                    <div className="badge badge-success badge-pill">
                                                        15
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <a
                                            href="javascript:void(0);"
                                            className="media read-chat active d-flex"
                                        >
                                            <div className="media-img-wrap">
                                                <div className="avatar avatar-online">
                                                    <Image
                                                        src={img4}
                                                        alt="User Image"
                                                        className="avatar-img rounded-circle"
                                                    />
                                                </div>
                                            </div>
                                            <div className="media-body">
                                                <div>
                                                    <div className="user-name">
                                                        Barbara Moore
                                                    </div>
                                                    <div className="user-last-chat">
                                                        I'll call you later{" "}
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="last-chat-time block">
                                                        8:01 PM
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <a
                                            href="javascript:void(0);"
                                            className="media d-flex"
                                        >
                                            <div className="media-img-wrap">
                                                <div className="avatar avatar-away">
                                                    <Image
                                                        src={img5}
                                                        alt="User Image"
                                                        className="avatar-img rounded-circle"
                                                    />
                                                </div>
                                            </div>
                                            <div className="media-body">
                                                <div>
                                                    <div className="user-name">
                                                        Greg Lynch
                                                    </div>
                                                    <div className="user-last-chat">
                                                        Give me a full
                                                        explanation about our
                                                        project
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="last-chat-time block">
                                                        7:30 PM
                                                    </div>
                                                    <div className="badge badge-success badge-pill">
                                                        3
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <a
                                            href="javascript:void(0);"
                                            className="media read-chat d-flex"
                                        >
                                            <div className="media-img-wrap">
                                                <div className="avatar avatar-online">
                                                    <Image
                                                        src={img6}
                                                        alt="User Image"
                                                        className="avatar-img rounded-circle"
                                                    />
                                                </div>
                                            </div>
                                            <div className="media-body">
                                                <div>
                                                    <div className="user-name">
                                                        Karlene Chaidez
                                                    </div>
                                                    <div className="user-last-chat">
                                                        That's very good UI
                                                        design
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="last-chat-time block">
                                                        6:59 PM
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <a
                                            href="javascript:void(0);"
                                            className="media read-chat d-flex"
                                        >
                                            <div className="media-img-wrap">
                                                <div className="avatar avatar-offline">
                                                    <Image
                                                        src={img7}
                                                        alt="User Image"
                                                        className="avatar-img rounded-circle"
                                                    />
                                                </div>
                                            </div>
                                            <div className="media-body">
                                                <div>
                                                    <div className="user-name">
                                                        John Blair
                                                    </div>
                                                    <div className="user-last-chat">
                                                        Yesterday i completed
                                                        the task
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="last-chat-time block">
                                                        11:21 AM
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <a
                                            href="javascript:void(0);"
                                            className="media read-chat d-flex"
                                        >
                                            <div className="media-img-wrap">
                                                <div className="avatar avatar-online">
                                                    <Image
                                                        src={img8}
                                                        alt="User Image"
                                                        className="avatar-img rounded-circle"
                                                    />
                                                </div>
                                            </div>
                                            <div className="media-body">
                                                <div>
                                                    <div className="user-name">
                                                        Russell Copeland
                                                    </div>
                                                    <div className="user-last-chat">
                                                        What is the major
                                                        functionality?
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="last-chat-time block">
                                                        10:05 AM
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <a
                                            href="javascript:void(0);"
                                            className="media read-chat d-flex"
                                        >
                                            <div className="media-img-wrap">
                                                <div className="avatar avatar-away">
                                                    <Image
                                                        src={img9}
                                                        alt="User Image"
                                                        className="avatar-img rounded-circle"
                                                    />
                                                </div>
                                            </div>
                                            <div className="media-body">
                                                <div>
                                                    <div className="user-name">
                                                        Leatha Bailey
                                                    </div>
                                                    <div className="user-last-chat">
                                                        This has allowed me to
                                                        showcase not only my
                                                        technical skills
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="last-chat-time block">
                                                        Yesterday
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <a
                                            href="javascript:void(0);"
                                            className="media read-chat d-flex"
                                        >
                                            <div className="media-img-wrap">
                                                <div className="avatar avatar-offline">
                                                    <Image
                                                        src={img10}
                                                        alt="User Image"
                                                        className="avatar-img rounded-circle"
                                                    />
                                                </div>
                                            </div>
                                            <div className="media-body">
                                                <div>
                                                    <div className="user-name">
                                                        Joseph Collins
                                                    </div>
                                                    <div className="user-last-chat">
                                                        Let's talk briefly in
                                                        the evening.{" "}
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="last-chat-time block">
                                                        Sunday
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <a
                                            href="javascript:void(0);"
                                            className="media read-chat d-flex"
                                        >
                                            <div className="media-img-wrap">
                                                <div className="avatar avatar-online">
                                                    <Image
                                                        src={img11}
                                                        alt="User Image"
                                                        className="avatar-img rounded-circle"
                                                    />
                                                </div>
                                            </div>
                                            <div className="media-body">
                                                <div>
                                                    <div className="user-name">
                                                        Jennifer Floyd
                                                    </div>
                                                    <div className="user-last-chat">
                                                        Do you have any
                                                        collections? If so, what
                                                        of?
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="last-chat-time block">
                                                        Saturday
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <a
                                            href="javascript:void(0);"
                                            className="media read-chat d-flex"
                                        >
                                            <div className="media-img-wrap">
                                                <div className="avatar avatar-away">
                                                    <Image
                                                        src={img12}
                                                        alt="User Image"
                                                        className="avatar-img rounded-circle"
                                                    />
                                                </div>
                                            </div>
                                            <div className="media-body">
                                                <div>
                                                    <div className="user-name">
                                                        Alex Campbell
                                                    </div>
                                                    <div className="user-last-chat">
                                                        Connect the two modules
                                                        with in 1 day.
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="last-chat-time block">
                                                        Friday
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="chat-cont-right">
                                <div className="chat-header">
                                    <a
                                        id="back_user_list"
                                        href="javascript:void(0)"
                                        className="back-user-list"
                                    >
                                        <i className="material-icons">
                                            chevron_left
                                        </i>
                                    </a>
                                    <div className="media d-flex">
                                        <div className="media-img-wrap">
                                            <div className="avatar avatar-online">
                                                <Image
                                                    src={img2}
                                                    alt="User Image"
                                                    className="avatar-img rounded-circle"
                                                />
                                            </div>
                                        </div>
                                        <div className="media-body">
                                            <div className="user-name">
                                                Brian Johnson
                                            </div>
                                            <div className="user-status">
                                                online
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chat-options">
                                        <a href="javascript:void(0)">
                                            <i className="material-icons">
                                                local_phone
                                            </i>
                                        </a>
                                        <a href="javascript:void(0)">
                                            <i className="material-icons">
                                                videocam
                                            </i>
                                        </a>
                                        <a href="javascript:void(0)">
                                            <i className="material-icons">
                                                more_vert
                                            </i>
                                        </a>
                                    </div>
                                </div>
                                <div className="chat-body">
                                    <div className="chat-scroll">
                                        <ul className="list-unstyled">
                                            <li className="media sent">
                                                <div className="media-body">
                                                    <div className="msg-box">
                                                        <div>
                                                            <p>
                                                                Hello. What can
                                                                I do for you?
                                                            </p>
                                                            <ul className="chat-msg-info">
                                                                <li>
                                                                    <div className="chat-time">
                                                                        <span>
                                                                            8:30
                                                                            AM
                                                                        </span>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="media d-flex received">
                                                <div className="avatar">
                                                    <Image
                                                        src={img2}
                                                        alt="User Image"
                                                        className="avatar-img rounded-circle"
                                                    />
                                                </div>
                                                <div className="media-body">
                                                    <div className="msg-box">
                                                        <div>
                                                            <p>
                                                                I'm just looking
                                                                around.
                                                            </p>
                                                            <p>
                                                                Will you tell me
                                                                something about
                                                                yourself?
                                                            </p>
                                                            <ul className="chat-msg-info">
                                                                <li>
                                                                    <div className="chat-time">
                                                                        <span>
                                                                            8:35
                                                                            AM
                                                                        </span>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="msg-box">
                                                        <div>
                                                            <p>
                                                                Are you there?
                                                                That time!
                                                            </p>
                                                            <ul className="chat-msg-info">
                                                                <li>
                                                                    <div className="chat-time">
                                                                        <span>
                                                                            8:40
                                                                            AM
                                                                        </span>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="msg-box">
                                                        <div>
                                                            <div className="chat-msg-attachments">
                                                                <div className="chat-attachment">
                                                                    <Image
                                                                        src={
                                                                            img1
                                                                        }
                                                                        alt
                                                                    />
                                                                    <div className="chat-attach-caption">
                                                                        placeholder.jpg
                                                                    </div>
                                                                    <a
                                                                        href
                                                                        className="chat-attach-download"
                                                                    >
                                                                        <i className="fas fa-download" />
                                                                    </a>
                                                                </div>
                                                                <div className="chat-attachment">
                                                                    <Image
                                                                        src={
                                                                            img1
                                                                        }
                                                                        alt
                                                                    />
                                                                    <div className="chat-attach-caption">
                                                                        placeholder.jpg
                                                                    </div>
                                                                    <a
                                                                        href
                                                                        className="chat-attach-download"
                                                                    >
                                                                        <i className="fas fa-download" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <ul className="chat-msg-info">
                                                                <li>
                                                                    <div className="chat-time">
                                                                        <span>
                                                                            8:41
                                                                            AM
                                                                        </span>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="media sent">
                                                <div className="media-body">
                                                    <div className="msg-box">
                                                        <div>
                                                            <p>Where?</p>
                                                            <ul className="chat-msg-info">
                                                                <li>
                                                                    <div className="chat-time">
                                                                        <span>
                                                                            8:42
                                                                            AM
                                                                        </span>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="msg-box">
                                                        <div>
                                                            <p>
                                                                OK, my name is
                                                                Limingqiang. I
                                                                like singing,
                                                                playing
                                                                basketballand so
                                                                on.
                                                            </p>
                                                            <ul className="chat-msg-info">
                                                                <li>
                                                                    <div className="chat-time">
                                                                        <span>
                                                                            8:42
                                                                            AM
                                                                        </span>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="msg-box">
                                                        <div>
                                                            <div className="chat-msg-attachments">
                                                                <div className="chat-attachment">
                                                                    <Image
                                                                        src={
                                                                            img1
                                                                        }
                                                                        alt
                                                                    />
                                                                    <div className="chat-attach-caption">
                                                                        placeholder.jpg
                                                                    </div>
                                                                    <a
                                                                        href
                                                                        className="chat-attach-download"
                                                                    >
                                                                        <i className="fas fa-download" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <ul className="chat-msg-info">
                                                                <li>
                                                                    <div className="chat-time">
                                                                        <span>
                                                                            8:50
                                                                            AM
                                                                        </span>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="media d-flex received">
                                                <div className="avatar">
                                                    <Image
                                                        src={img2}
                                                        alt="User Image"
                                                        className="avatar-img rounded-circle"
                                                    />
                                                </div>
                                                <div className="media-body">
                                                    <div className="msg-box">
                                                        <div>
                                                            <p>
                                                                You wait for
                                                                notice.
                                                            </p>
                                                            <p>
                                                                Consectetuorem
                                                                ipsum dolor sit?
                                                            </p>
                                                            <p>Ok?</p>
                                                            <ul className="chat-msg-info">
                                                                <li>
                                                                    <div className="chat-time">
                                                                        <span>
                                                                            8:55
                                                                            PM
                                                                        </span>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="chat-date">Today</li>
                                            <li className="media d-flex received">
                                                <div className="avatar">
                                                    <Image
                                                        src={img2}
                                                        alt="User Image"
                                                        className="avatar-img rounded-circle"
                                                    />
                                                </div>
                                                <div className="media-body">
                                                    <div className="msg-box">
                                                        <div>
                                                            <p>
                                                                Lorem ipsum
                                                                dolor sit amet,
                                                                consectetur
                                                                adipiscing elit,
                                                            </p>
                                                            <ul className="chat-msg-info">
                                                                <li>
                                                                    <div className="chat-time">
                                                                        <span>
                                                                            10:17
                                                                            AM
                                                                        </span>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Edit
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="media sent">
                                                <div className="media-body">
                                                    <div className="msg-box">
                                                        <div>
                                                            <p>
                                                                Lorem ipsum
                                                                dollar sit
                                                            </p>
                                                            <div className="chat-msg-actions dropdown">
                                                                <a
                                                                    href="#"
                                                                    data-toggle="dropdown"
                                                                    aria-haspopup="true"
                                                                    aria-expanded="false"
                                                                >
                                                                    <i className="fe fe-elipsis-v" />
                                                                </a>
                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="#"
                                                                    >
                                                                        Delete
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <ul className="chat-msg-info">
                                                                <li>
                                                                    <div className="chat-time">
                                                                        <span>
                                                                            10:19
                                                                            AM
                                                                        </span>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Edit
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="media d-flex received">
                                                <div className="avatar">
                                                    <Image
                                                        src={img2}
                                                        alt="User Image"
                                                        className="avatar-img rounded-circle"
                                                    />
                                                </div>
                                                <div className="media-body">
                                                    <div className="msg-box">
                                                        <div>
                                                            <div className="msg-typing">
                                                                <span />
                                                                <span />
                                                                <span />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="chat-footer">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <div className="btn-file btn">
                                                <i className="fas fa-paperclip" />
                                                <input type="file" />
                                            </div>
                                        </div>
                                        <input
                                            type="text"
                                            className="input-msg-send form-control"
                                            placeholder="Type something"
                                        />
                                        <div className="input-group-append">
                                            <button
                                                type="button"
                                                className="btn msg-send-btn"
                                            >
                                                <i className="fas fa-paper-plane" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Row */}
            </div>
        </div>
    );
};
export default Chat;
