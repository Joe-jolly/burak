import { Request, Response } from "express";
import {T} from "../libs/types/common"
import MemberService from "../models/Member.service";
import { AdminReuqest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enum/member.enum";

const restaurantController: T = {};
const memberService = new MemberService();

restaurantController.goHome = (req: Request, res: Response) => {
    try {
        console.log("goHome");
        res.render("home");
    } catch (err) {
        console.log("ERROR, goHomePage", err)
    }
};

restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        console.log("getSignup");
        res.render("signup");
    } catch (err) {
        console.log("ERROR, getSignup", err)
    }
};

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        console.log("getLogin");
        res.render("login");
    } catch (err) {
        console.log("ERROR, getLogin", err)
    }
};

restaurantController.processSignup = async (
    req: AdminReuqest, 
    res: Response
) => {
    try {
        console.log("processSignup");

        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT;
        const result = await memberService.processSignup(newMember);

        req.session.member = result;
        req.session.save(function() {
        res.send(result);
        });
    } catch (err) {
        console.log("ERROR, processSignup", err)
        res.send(err);
    }
};

restaurantController.processLogin = async (
    req: AdminReuqest, 
    res: Response
) => {
    try {
        console.log("processLogin");
        
        const input: LoginInput = req.body;
        const result = await memberService.processLogin(input)

        req.session.member = result;
        req.session.save(function() {
        res.send(result);
        });
    } catch (err) {
        console.log("ERROR, processLogin", err);
        res.send(err);
    }
};

export default restaurantController;