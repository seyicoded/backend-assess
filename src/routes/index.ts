import express from 'express'
import { loginController, registerController } from '../controllers/authController';
import { createGroup, inviteGroup, myCreatedGroup } from '../controllers/groupController';
import { authMiddleWare } from '../middleware/auth';


const router = express.Router()

// guest route
router.post("/register", registerController)
router.post("/login", loginController)

// auth route
router.post("/group/create", authMiddleWare, createGroup)
router.post("/group/invite-user", authMiddleWare, inviteGroup)
router.get("/group/my-created-groups", authMiddleWare, myCreatedGroup)

export default router;