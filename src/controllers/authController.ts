import { Request, Response } from 'express';
import { AuthService } from '../services/authService';

export class AuthController {
  static async register(req: Request, res: Response) {
    const { name, email, password } = req.body;

    try {
      const result = await AuthService.register(name, email, password);
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  static async login(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const result = await AuthService.login(email, password);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }
}
