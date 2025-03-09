import { Router } from "express";
import { updateUserDataController, fetchUserDataController } from "../controller/api";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();

router.post("/update-user-data", authMiddleware as any, updateUserDataController);
router.get("/fetch-user-data", authMiddleware as any, fetchUserDataController as any);

export default router;