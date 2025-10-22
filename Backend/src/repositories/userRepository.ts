import mongoose from "mongoose";
import User, {UserDocument} from "../models/user.model"
import { IUserRepository } from "../interfaces/repositoryInterfaces/user.repository.interface";
import {BaseRepository} from './baseRepositories'
import HTTP_statusCode from "../enums/httpStatusCode";
import { CustomError } from "../error/customError";




class UserRepository extends BaseRepository<UserDocument> implements IUserRepository {
    constructor() {
        super(User);
    }

    findByEmail = async (email: string): Promise<UserDocument | null> => {
        return User.findOne({ email });
    };

    getById = async (id: string): Promise<UserDocument | null> => {
        return User.findById(id);
    };

    findByToken = async (resetPasswordToken: string): Promise<UserDocument | null> => {
        return User.findOne({ resetPasswordToken });
    };

    clearResetToken = async (userId: mongoose.Types.ObjectId): Promise<void> => {
        try {
            await User.updateOne(
                { _id: userId },
                { $unset: { resetPasswordExpires: 1, resetPasswordToken: 1 } }
            );
        } catch (error) {
            console.error(error);
            throw new CustomError('Failed to clear reset token', HTTP_statusCode.InternalServerError);
        }
    };

    updatePassword = async (userId: mongoose.Types.ObjectId, hashedPassword: string): Promise<boolean> => {
        const result = await User.updateOne({ _id: userId }, { $set: { password: hashedPassword } });
        return result.modifiedCount > 0;
    };

    updatePasswordAndClearToken = async (userId: mongoose.Types.ObjectId, hashedPassword: string): Promise<boolean> => {
        const result = await User.updateOne(
            { _id: userId },
            {
                $set: { password: hashedPassword },
                $unset: { resetPasswordExpires: 1, resetPasswordToken: 1 }
            }
        );
        return result.modifiedCount > 0;
    };
}

export default UserRepository;