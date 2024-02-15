import express from 'express';
import authController from '../controllers/auth.controllers.js';

const router = express.Router();

router.post('/signup', authController.signupUser);
router.post('/login', authController.loginUser);
router.post('/logout', authController.logoutUser);

export default router;