import { leetcode } from "controllers/leetcode";
import { Router } from "express";

const router = Router();

router.post("/scrap/leetcode", leetcode)

export default router
