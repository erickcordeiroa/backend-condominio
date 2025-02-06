import { Request, Response } from "express";
import { PropertyService } from "../services/PropertyService";


export class PropertyController {
  static async getAll(req: Request, res: Response) {
    try {
      const properties = await PropertyService.getAllProperties();
      res.json(properties);
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar imóveis" });
    }
  }

  static async getById (req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const property = await PropertyService.getPropertyById(id);
      if (!property) return res.status(404).json({ message: "Imóvel não encontrado" });
  
      res.json(property);
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar imóvel" });
    }
  }

  static async create(req: Request, res: Response) {
    try {
      const property = await PropertyService.createProperty(req.body);
      res.status(201).json(property);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Erro ao criar imóvel" });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const property = await PropertyService.updateProperty(id, req.body);
      res.json(property);
    } catch (error) {
      res.status(500).json({ message: "Erro ao atualizar imóvel" });
    }
  }

  static async remove(req: Request, res: Response){
    try {
      const id = parseInt(req.params.id);
      await PropertyService.deleteProperty(id);
      res.json({ message: "Imóvel removido com sucesso" });
    } catch (error) {
      res.status(500).json({ message: "Erro ao remover imóvel" });
    }
  };
}
