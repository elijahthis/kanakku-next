// @type {import('next').NextConfig}
const webpack = require("webpack");
const { parsed: myEnv } = require("dotenv").config();

const withTM = require("next-transpile-modules")([
    "@fullcalendar/common",
    "@babel/preset-react",
    "@fullcalendar/common",
    "@fullcalendar/daygrid",
    "@fullcalendar/interaction",
    "@fullcalendar/react",
    "@fullcalendar/timegrid",
]);

module.exports = withTM({
    webpack(config) {
        config.plugins.push(new webpack.EnvironmentPlugin(myEnv));
        return config;
    },
    reactStrictMode: true,
});
