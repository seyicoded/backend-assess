import express from 'express'
import { registerController } from '../controllers/authController';


const router = express.Router()

// guest route
router.post("/register", registerController)


export default router;