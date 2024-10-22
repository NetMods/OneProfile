import { leetcode } from "controllers/leetcode";
import geeksforgeek  from "../controllers/geeksforgeek"
import { Router } from "express";

const router = Router();

router.post("/scrap/leetcode", leetcode)

router.post("/scrap/geeksforgeek", geeksforgeek);

export default router
