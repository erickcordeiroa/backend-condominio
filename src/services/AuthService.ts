import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { generateToken } from '../utils/generateToken';

const prisma = new PrismaClient();

export class AuthService {
  static async register(name: string, email: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword },
    });

    const token = generateToken({ id: user.id, email: user.email });

    return { user, token };
  }

  static async login(email: string, password: string) {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) throw new Error('Usuário não encontrado.');

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) throw new Error('Senha inválida.');

    const token = generateToken({ id: user.id, email: user.email });

    return { user, token };
  }
}
