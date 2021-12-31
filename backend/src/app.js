import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import helmet from "helmet";

import indexRouter from "./routes/index";

let app = express();

app.use("/", (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);

    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.use(helmet());
app.use(logger("dev"));
app.use(cookieParser());

app.use("/", indexRouter);

export default app;
