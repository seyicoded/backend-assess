import express from 'express'
import { loginController, registerController } from '../controllers/authController';


const router = express.Router()

// guest route
router.post("/register", registerController)
router.post("/login", loginController)


export default router;