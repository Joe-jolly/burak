import express from "express";
const router = express.Router();
import memeberController from "./controllers/member.controller";


// router.get("/", memeberController.goHomePage);

// router.get("/login", memeberController.getLogin);

// router.get("/signup", memeberController.getSignup);

router.post("/login", memeberController.login);
router.post("/signup", memeberController.signup);

export default router;