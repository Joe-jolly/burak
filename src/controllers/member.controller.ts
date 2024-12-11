import { Request, Response } from "express";

import {T} from "../libs/types/common"

const memeberController: T = {};

memeberController.goHomePage = (req: Request, res: Response) => {
    try {
        res.send('Home page')
    }
    catch (err) {
        console.log("ERROR, goHomePage", err)
    }
};

memeberController.getLogin = (req: Request, res: Response) => {
    try {
        res.send('Login page')
    }
    catch (err) {
        console.log("ERROR, getLogin", err)
    }
};

memeberController.getSignup = (req: Request, res: Response) => {
    try {
        res.send('Signup page')
    }
    catch (err) {
        console.log("ERROR, getSignup", err)
    }
};

export default memeberController;