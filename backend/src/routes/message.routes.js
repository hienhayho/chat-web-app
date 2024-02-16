import express from 'express';
import messageControllers from '../controllers/message.controllers.js';
import protectRoutes from '../middlewares/protectRoutes.js';

const router = express.Router();

router.post('/send/:id', protectRoutes, messageControllers.sendMessage);
router.get('/:id', protectRoutes, messageControllers.getMessages);

export default router;