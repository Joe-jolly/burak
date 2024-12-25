import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";

import session from "express-session";
import ConnectMongoDB from "connect-mongodb-session";

const MongoDBstore = ConnectMongoDB(session);

const store = new MongoDBstore({
    uri: String(process.env.MONGO_URL),
    collection: "sessions"
});

/** 1-INTRO **/
const app = express();
//console.log("__dirname:", __dirname);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan(MORGAN_FORMAT));

/** 2-SESSIONS **/
app.use(
    session({
        secret: 'This is a secret',
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7 // 1 weak
        },
        store: store,
        resave: true,
        saveUninitialized: true
    })
);


/** 3-VIEWS **/
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs")

/** 4-ROUTERS **/
app.use("/admin", routerAdmin); //SSR: EJS
app.use("/", router);           // SPA: REACT



export default app;