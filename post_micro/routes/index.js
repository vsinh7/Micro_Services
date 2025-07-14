import {Router} from "express"
import PostRoute from "./postRoute.js"

const router = Router();

router.use("/api" ,PostRoute)

export default router;
