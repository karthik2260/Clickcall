import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET_KEY!;
const REFRESH_SECRET_KEY = process.env.JWT_REFRESH_SECRET_KEY!;

export const createAccessToken = (userId: string) => {
    return jwt.sign({ id: userId }, SECRET_KEY, { expiresIn: '1h' });
}

export const createRefreshToken = (userId: string) => {
    return jwt.sign({ id: userId }, REFRESH_SECRET_KEY, { expiresIn: '7d' });
}

export const verifyToken = (token: string) => {
    return jwt.verify(token, SECRET_KEY);
}
