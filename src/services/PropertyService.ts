import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();

const prisma = new PrismaClient();
const BASE_URL = process.env.BASE_URL || "";

export class PropertyService {
    static async getAllProperties() {
        const properties = await prisma.property.findMany({ include: { photos: true } });
        return properties.map(property => ({
            ...property,
            photos: property.photos.map(photo => ({
                ...photo,
                url: `http://147.93.36.206:3001${photo.url}`
            }))
        }));
    }

    static async getPropertyById(id: number) {
        const property = await prisma.property.findUnique({
            where: { id },
            include: { photos: true },
        });
        if (!property) return null;
        return {
            ...property,
            photos: property.photos.map(photo => ({
                ...photo,
                url: `http://147.93.36.206:3001${photo.url}`
            }))
        };
    }

    static async createProperty(data: any) {
        return await prisma.property.create({ data });
    }

    static async updateProperty(id: number, data: any) {
        return await prisma.property.update({
        where: { id },
        data,
        });
    }

    static async deleteProperty(id: number) {
        return await prisma.property.delete({ where: { id } });
    }
}
