import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserDocument } from '../models/user.model';
import { CustomError } from '../error/customError';
import UserRepository from '../repositories/userRepository';
import { Response } from 'express';
import { ILoginResponse, User } from '../interfaces/commoninterfaces';
import { IUserService } from '../interfaces/serviceInterfaces/user.service.interface';

