import { Request, Response } from "express";
import { PhotosService } from "../services/PhotoService";

export class PhotosController {
  static async uploadPhotos(req: Request, res: Response): Promise<void> {
    try {
      const propertyId = parseInt(req.params.id);
      const files = req.files as Express.Multer.File[];

      if (!files || files.length === 0) {
        res.status(400).json({ message: "Nenhuma imagem enviada" });
        return;
      }

      await PhotosService.savePhotos(propertyId, files);

      res.status(201).json({ message: "Fotos salvas com sucesso" });
    } catch (error: any) {
      res.status(500).json({ message: error.message || "Erro ao salvar fotos" });
    }
  }

  static async deletePhoto(req: Request, res: Response): Promise<void> {
    try {
      const photoId = parseInt(req.params.photoId);

      await PhotosService.deletePhoto(photoId);

      res.status(200).json({ message: "Imagem excluída com sucesso" });
    } catch (error: any) {
      res.status(500).json({ message: error.message || "Erro ao excluir imagem" });
    }
  }

  static async deleteAllPhotos(req: Request, res: Response): Promise<void> {
    try {
      const propertyId = parseInt(req.params.id);

      await PhotosService.deleteAllPhotos(propertyId);

      res.status(200).json({ message: "Todas as imagens excluídas com sucesso" });
    } catch (error: any) {
      res.status(500).json({ message: error.message || "Erro ao excluir todas as imagens" });
    }
  }
}