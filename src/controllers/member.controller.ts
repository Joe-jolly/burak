import { Request, Response } from "express";
import {T} from "../libs/types/common"
import MemberService from "../models/Member.service";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import Errors from "../libs/errors";

const memeberController: T = {};
const memberService = new MemberService();

memeberController.signup = async (req: Request, res: Response) => {
    try {
        console.log("signup");
        const input: MemberInput = req.body;
        const result: Member = await memberService.signup(input);
        // TODO: TOKEN AUTHENTICATION

        res.json({ member: result });
    } catch (err) {
        console.log("ERROR, signup", err)
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
    }
};

memeberController.login = async (req: Request, res: Response) => {
    try {
        console.log("login");
        const input: LoginInput = req.body;
        const result = await memberService.login(input)
        // TODO: TOKEN AUTHENTICATION

        res.json({ member: result });
    } catch (err) {
        console.log("ERROR, login", err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
    }
};


export default memeberController;