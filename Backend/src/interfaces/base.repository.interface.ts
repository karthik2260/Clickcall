

import mongoose from "mongoose";

export interface IBaseRepository<T extends mongoose.Document> {
    create(data: Partial<T>): Promise<T>;               
    findByEmail(email: string): Promise<T | null>;     
    findByToken(resetPasswordToken: string): Promise<T | null>; 
    getById(id: string): Promise<T | null>;           
}
