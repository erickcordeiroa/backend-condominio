import { Request, Response, NextFunction } from 'express';
import * as yup from 'yup';

// Validação para o schema de User
const userSchema = yup.object().shape({
    name: yup.string().required('Nome é obrigatório'),
    email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
    password: yup.string().min(6, 'Senha deve ter no mínimo 6 caracteres').required('Senha é obrigatória'),
    status: yup.string().oneOf(['ativo', 'inativo', 'pendente'], 'Status deve ser "ativo", "inativo" ou "pendente"').required('Status é obrigatório'),
    role: yup.string().oneOf(['admin', 'user'], 'Função deve ser "admin" ou "user"').required('Função é obrigatória'),
});

// Validação para o schema de Fraction
const fractionSchema = yup.object().shape({
    location: yup.string().required('Número do apartamento ou loja é obrigatório'),
    type: yup.string().oneOf(['LOJA', 'APTO'], 'Tipo deve ser "LOJA" ou "APTO"').required('Tipo é obrigatório'),
    fraction: yup.number().min(0).max(1, 'A fração deve estar entre 0 e 1').required('Fração é obrigatória'),
});

// Middleware para validar os dados do User
export const validateUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        await userSchema.validate(req.body, { abortEarly: false });
        next();
    } catch (err: any) {
        res.status(400).json({ errors: err.errors });
    }
};

// Middleware para validar os dados da Fraction
export const validateFraction = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        await fractionSchema.validate(req.body, { abortEarly: false });
        next();
    } catch (err: any) {
        res.status(400).json({ errors: err.errors });
    }
};
