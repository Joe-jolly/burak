import express from "express";
import path from "path";
import router from "./router";

/** 1-INTRO **/
const app = express();
console.log("__dirname:", __dirname);
app.use(express.static(path.join()));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

/** 2-SESSIONS **/

/** 3-VIEWS **/
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs")

/** 4-ROUTERS **/
app.use("/", router);


export default app;