import { Request, Response, Router } from 'express';
import { authenticateToken } from '../middleware/auth';
import { AuthController } from '../controllers/authController';

const router = Router();

router.get('/', authenticateToken, (req: Request, res: Response) => {
  res.send('Hello, world!');
});

//Authenticate
router.post('/register', AuthController.register);
router.post('/login', AuthController.login);

export default router;