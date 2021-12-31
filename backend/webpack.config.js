const path = require("path");
const nodeExternals = require("webpack-node-externals");

const mode =
    process.env.NODE_ENV === "production" ? "production" : "development";

module.exports = [
    {
        mode: mode,
        context: path.resolve(__dirname, "src"),
        output: {
            filename: "[name].[contenthash].js",
            path: path.resolve(__dirname, "dist"),
        },
        entry: {
            app: "./bin/www",
        },
        target: "node",
        externals: [nodeExternals()],
        optimization: {
            runtimeChunk: "single",
        },
    },
];
