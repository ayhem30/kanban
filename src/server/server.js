import express from "express";
import passport from "passport";
import compression from "compression";
import helmet from "helmet";
import logger from "morgan";
import ServePage from "./ServePage";
import BoardData from "./BoardData";

const app = express();

app.use(helmet());
app.use(logger("tiny"));
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// aggressive cache static assets (1 year)
app.use("/static", express.static("dist/public", { maxAge: "1y" }));

app.use(passport.initialize());
app.use(passport.session());
app.use(BoardData());
app.get("*", ServePage);

const port = process.env.PORT || "1337";
/* eslint-disable no-console */
app.listen(port, () => console.log(`Server listening on port ${port}`));
