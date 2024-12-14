import { Request, Response } from "express";
import {T} from "../libs/types/common"
import MemberService from "../models/Member.service";

const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) => {
    try {
        console.log("goHome");
        res.send('Home page')
    } catch (err) {
        console.log("ERROR, goHomePage", err)
    }
};

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        console.log("getLogin");
        res.send('Login page')
    } catch (err) {
        console.log("ERROR, getLogin", err)
    }
};

restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        console.log("getSignup");
        res.send('Signup page')
    } catch (err) {
        console.log("ERROR, getSignup", err)
    }
};

export default restaurantController;