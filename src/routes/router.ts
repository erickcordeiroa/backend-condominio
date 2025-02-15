import { Request, Response, Router } from 'express';
import { authenticateToken } from '../middleware/auth';
import { AuthController } from '../controllers/AuthController';
import { FractionController } from '../controllers/FractionController';
import { validateFraction, validateUser } from '../middleware/validate';
import { PropertyController } from '../controllers/PropertyController';
import { PhotosController } from '../controllers/PhotosController';
import upload from '../middleware/upload'; // Importa o middleware de upload configurado

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
router.get("/fraction/:id", FractionController.getById);
router.put('/fraction/update/:id', validateFraction, authenticateToken, FractionController.update);
router.delete('/fraction/delete/:id', authenticateToken, FractionController.delete);

//Property
router.get("/properties", PropertyController.getAll);
router.post("/property", authenticateToken, PropertyController.create);
router.get("/property/:id", PropertyController.getById);
router.put("/property/:id", authenticateToken, PropertyController.update);
router.delete("/property/:id", authenticateToken, PropertyController.remove);

router.post("/property/:id/photos", authenticateToken, upload.array("photos", 5), PhotosController.uploadPhotos);
router.delete("/property/photo/:photoId", PhotosController.deletePhoto);
router.delete("/property/:id/photos", PhotosController.deleteAllPhotos);

export default router;