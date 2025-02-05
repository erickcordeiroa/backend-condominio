import jwt, { SignOptions } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'default_secret';

export const generateToken = (payload: object, expiresIn = 3600) => {
  const options: SignOptions = { expiresIn };
  return jwt.sign(payload, JWT_SECRET, options);
};
