import * as express from "express";
import * as UserController from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", UserController.getAll);

export default router;
