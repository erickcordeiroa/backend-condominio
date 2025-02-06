import { Request, Response, Router } from 'express';
import { authenticateToken } from '../middleware/auth';
import { AuthController } from '../controllers/AuthController';
import { FractionController } from '../controllers/FractionController';
import { validateFraction, validateUser } from '../middleware/validate';
import { PropertyController } from '../controllers/PropertyController';
import { PhotosController } from '../controllers/PhotosController';

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

//Property
router.get("/properties", authenticateToken, PropertyController.getAll);
router.post("/property", authenticateToken, PropertyController.create);
router.put("/property/:id", authenticateToken, PropertyController.update);
router.delete("/property/:id", authenticateToken, PropertyController.remove);

router.post("/property/:id/photos", authenticateToken, PhotosController.uploadPhotos);

export default router;