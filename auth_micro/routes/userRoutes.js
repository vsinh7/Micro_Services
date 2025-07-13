import {Router} from "express"
import AuthController from "../controller/AuthController.js";
import authMiddleware from "../middleware/AuthMiddleware.js";
import UserController from "../controller/UserController.js";

const router = Router();

router.get("/getuser/:id",UserController.getUser);




export default router;