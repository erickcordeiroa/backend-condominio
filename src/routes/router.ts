import { Request, Response, Router } from 'express';
import { authenticateToken } from '../middleware/auth';

const router = Router();

router.get('/', authenticateToken, (req: Request, res: Response) => {
  res.send('Hello, world!');
});

export default router;