import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const ALLOWED_TYPES = ['LOJA', 'APTO'];

export class FractionService {
  static async createFraction(data: { location: string; fraction: number; type: string }) {
    if (!ALLOWED_TYPES.includes(data.type)) {
      throw new Error('O campo "type" deve ser "LOJA" ou "APTO".');
    }

    return await prisma.fraction.create({
      data,
    });
  }

  static async getAllFractions() {
    return await prisma.fraction.findMany();
  }


  static async updateFraction(id: number, data: { location?: string; fraction?: number; type?: string }) {
    if (data.type && !ALLOWED_TYPES.includes(data.type)) {
      throw new Error('O campo "type" deve ser "LOJA" ou "APTO".');
    }

    return await prisma.fraction.update({
      where: { id },
      data,
    });
  }

  static async deleteFraction(id: number) {
    return await prisma.fraction.delete({
      where: { id },
    });
  }
}
