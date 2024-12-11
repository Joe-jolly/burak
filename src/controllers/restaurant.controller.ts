import { Request, Response } from "express";
import {T} from "../libs/types/common"
import MemberService from "../models/member.service";

const restaurantController: T = {};

restaurantController.goHomePage = (req: Request, res: Response) => {
    try {
        res.send('Home page')
    }
    catch (err) {
        console.log("ERROR, goHomePage", err)
    }
};

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        res.send('Login page')
    }
    catch (err) {
        console.log("ERROR, getLogin", err)
    }
};

restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        res.send('Signup page')
    }
    catch (err) {
        console.log("ERROR, getSignup", err)
    }
};

export default restaurantController;