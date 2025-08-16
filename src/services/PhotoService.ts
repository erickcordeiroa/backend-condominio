import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();

export class PhotosService {
  static async savePhotos(propertyId: number, files: Express.Multer.File[]) {
    return prisma.photo.createMany({
      data: files.map((file) => ({
        url: `/uploads/${file.filename}`,
        propertyId,
      })),
    });
  }

  static async deletePhoto(photoId: number) {
    const photo = await prisma.photo.findUnique({
      where: { id: photoId },
    });

    if (!photo) {
      throw new Error("Imagem não encontrada");
    }

    const filePath = path.join(__dirname, "../uploads", path.basename(photo.url));
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    return prisma.photo.delete({
      where: { id: photoId },
    });
  }

  static async deleteAllPhotos(propertyId: number) {
    const photos = await prisma.photo.findMany({
      where: { 
	propertyId: propertyId },
    });

    if (photos.length === 0) {
      return;
    }

    photos.forEach((photo: any) => {
      const filePath = path.join(__dirname, "../uploads", path.basename(photo.url));
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    });

    return prisma.photo.deleteMany({
      where: { 
	propertyId: propertyId
	},
    });
  }
}
