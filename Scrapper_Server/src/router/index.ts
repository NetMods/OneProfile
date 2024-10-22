import { codechef } from "controllers/codechef";
import { codeforces } from "controllers/codeforces";
import { leetcode } from "controllers/leetcode";
import { striver } from "controllers/striver";
import geeksforgeek  from "../controllers/geeksforgeek"
import { Router } from "express";

const router = Router();

router.post("/scrap/leetcode", leetcode)
router.post("/scrap/codeforces", codeforces)
router.post("/scrap/striver", striver)
router.post("/scrap/codechef", codechef)
router.post("/scrap/geeksforgeek", geeksforgeek);

export default router
