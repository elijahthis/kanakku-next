import React, { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Header from "../layouts/Header";
// import { VectorMap } from "react-jvectormap";
import Sidebar from "../layouts/Sidebar";

const VectorMap = dynamic(
    () => import("react-jvectormap").then((m) => m.VectorMap),
    { ssr: false }
);

const VectorMaps = () => {
    const [options, setOptions] = useState({
        initial: {
            fill: "#7638ff",
        },
        hover: {
            "fill-opacity": 0.7,
            cursor: "pointer",
        },
        selected: {
            fill: "#FFFFFF",
        },
    });

    return (
        <div className="page-wrapper">
            <div className="content container-fluid">
                {/*Page Header */}
                <div className="page-header">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="page-title">Vector Maps</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link href="/">Dashboard</Link>
                                </li>
                                <li className="breadcrumb-item active">
                                    Vector Maps
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* /Page Header */}

                {/* World map */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">World Map</h5>
                            </div>
                            <div className="card-body">
                                <VectorMap
                                    map={"world_mill"}
                                    backgroundColor={"#FFFF"}
                                    regionStyle={options}
                                    containerStyle={{
                                        height: "400px",
                                    }}
                                    containerClassName="map"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* /World map */}

                <div className="row">
                    <div className="col-lg-6">
                        {/* USA map */}
                        <div className="card bg-white">
                            <div className="card-header">
                                <h5 className="card-title">USA Map</h5>
                            </div>
                            <div className="card-body">
                                <VectorMap
                                    map={"us_aea"}
                                    backgroundColor={"#FFFF"}
                                    regionStyle={options}
                                    containerStyle={{
                                        height: "400px",
                                    }}
                                    containerClassName="map"
                                />
                            </div>
                        </div>
                        {/* /USA map */}
                    </div>
                    <div className="col-lg-6">
                        {/* UK map */}
                        <div className="card bg-white">
                            <div className="card-header">
                                <h5 className="card-title">UK Map</h5>
                            </div>
                            <div className="card-body">
                                <VectorMap
                                    map={"europe_mill"}
                                    backgroundColor={"#FFFF"}
                                    regionStyle={options}
                                    containerStyle={{
                                        height: "400px",
                                    }}
                                    containerClassName="map"
                                />
                            </div>
                        </div>
                        {/* /UK map */}
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        {/* India map */}
                        <div className="card bg-white">
                            <div className="card-header">
                                <h5 className="card-title">India Map</h5>
                            </div>
                            <div className="card-body">
                                <VectorMap
                                    map={"in_mill"}
                                    backgroundColor={"#FFFF"}
                                    regionStyle={options}
                                    containerStyle={{
                                        height: "400px",
                                    }}
                                    containerClassName="map"
                                />
                            </div>
                        </div>
                        {/* /India map */}
                    </div>
                    <div className="col-lg-6">
                        {/* Russia map */}
                        <div className="card bg-white">
                            <div className="card-header">
                                <h5 className="card-title">Russia Map</h5>
                            </div>
                            <div className="card-body">
                                <VectorMap
                                    map={"ru_mill"}
                                    backgroundColor={"#FFFF"}
                                    regionStyle={options}
                                    containerStyle={{
                                        height: "400px",
                                    }}
                                    containerClassName="map"
                                />
                            </div>
                        </div>
                        {/* /Russia map */}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default VectorMaps;
