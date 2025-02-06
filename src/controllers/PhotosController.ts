import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class PhotosController {
    static async uploadPhotos(req: Request, res: Response): Promise<void> {
        try {
            const propertyId = parseInt(req.params.id);
            const files = req.files as Express.Multer.File[];

            if (!files) res.status(400).json({ message: "Nenhuma imagem enviada" });

            const photos = await Promise.all(
                files.map((file) =>
                    prisma.photo.create({
                        data: {
                            url: `/uploads/${file.filename}`,
                            propertyId,
                        },
                    })
                )
            );

            res.status(201).json(photos);
        } catch (error) {
            res.status(500).json({ message: "Erro ao salvar fotos" });
        }
    }
}

