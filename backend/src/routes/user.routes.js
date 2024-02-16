import express from 'express';
import protectRoutes from '../middlewares/protectRoutes.js';
import userControllers from '../controllers/user.controllers.js';

const router = express.Router();

router.get('/', protectRoutes, userControllers.getUserForSideBar);

export default router;