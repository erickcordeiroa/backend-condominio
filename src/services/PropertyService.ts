import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class PropertyService {
    static async getAllProperties() {
        return await prisma.property.findMany({ include: { photos: true } });
    }
    
    static async getPropertyById(id: number) {
        return await prisma.property.findUnique({
        where: { id },
        include: { photos: true },
        });
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