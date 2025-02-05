import { Request, Response, Router } from 'express';
import { authenticateToken } from '../middleware/auth';
import { AuthController } from '../controllers/AuthController';
import { FractionController } from '../controllers/FractionController';

const router = Router();

router.get('/', authenticateToken, (req: Request, res: Response) => {
  res.send('Hello, world!');
});

//Authenticate
router.post('/register', AuthController.register);
router.post('/login', AuthController.login);

//Fraction
router.post('/fraction/create', FractionController.create);
router.get('/fractions', FractionController.getAll);
router.put('/fraction/update/:id', FractionController.update);
router.delete('/fraction/delete/:id', FractionController.delete);

export default router;