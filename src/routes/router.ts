import { Request, Response, Router } from 'express';
import { authenticateToken } from '../middleware/auth';
import { AuthController } from '../controllers/AuthController';
import { FractionController } from '../controllers/FractionController';
import { validateFraction, validateUser } from '../middleware/validate';

const router = Router();

router.get('/health', (req: Request, res: Response) => {
  res.send('Server is up and running');
});

//Authenticate
router.post('/register', validateUser, AuthController.register);
router.post('/login', AuthController.login);

//Fraction
router.post('/fraction/create', validateFraction, authenticateToken, FractionController.create);
router.get('/fractions', FractionController.getAll);
router.put('/fraction/update/:id', validateFraction, authenticateToken, FractionController.update);
router.delete('/fraction/delete/:id', authenticateToken, FractionController.delete);

export default router;