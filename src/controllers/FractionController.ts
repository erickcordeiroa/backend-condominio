import { Request, Response } from 'express';
import { FractionService } from '../services/FractionService';

export class FractionController {
  static async create(req: Request, res: Response) {
    try {
      const fraction = await FractionService.createFraction(req.body);
      res.status(201).json(fraction);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const fractions = await FractionService.getAllFractions();
      res.json(fractions);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const fraction = await FractionService.updateFraction(Number(id), req.body);
      res.json(fraction);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await FractionService.deleteFraction(Number(id));
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }
}
