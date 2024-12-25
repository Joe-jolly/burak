import { MemberStatus, MemberType } from "../enum/member.enum";
import { ObjectId } from "mongoose";
import { Request } from "express";
import { Session } from "express-session";

export interface Member {
    _id: ObjectId;
    memberType: MemberType;
    memberStatus: MemberStatus;
    memberNick: string;
    memberPhone: string;
    memberPassword?: string;
    memberAddress?: string;
    memberDesc?: string;
    memberImage?: string;
    memberPoints: number;
    createdAt: Date;
    updatedAt: Date;    
}

export interface MemberInput {
    memberType?: MemberType;
    memberStatus?: MemberStatus;
    memberNick: string;
    memberPhone: string;
    memberPassword: string;
    memberAddress?: string;
    memberDesc?: string;
    memberImage?: string;
    memberPoints?: number;    
}

export interface LoginInput {
    memberNick: string;
    memberPassword: string;
}

export interface AdminReuqest extends Request {
    member: Member;
    session: Session & { member: Member };
}