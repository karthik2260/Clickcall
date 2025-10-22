// src/repositories/vendorRepository.ts
import Vendor, { VendorDocument } from "../models/vendor.model";
import { BaseRepository } from "./baseRepositories";
import { CustomError } from "../error/customError";
import HTTP_statusCode from "../enums/httpStatusCode";
import mongoose from "mongoose";

class VendorRepository extends BaseRepository<VendorDocument> {
  constructor() {
    super(Vendor);
  }

 
  async createVendor(data: Partial<VendorDocument>): Promise<VendorDocument> {
    try {
      const vendor = await Vendor.create(data);
      return vendor;
    } catch (error) {
      console.error("Error creating vendor:", error);
      throw new CustomError("Failed to create vendor", HTTP_statusCode.InternalServerError);
    }
  }

 
  async findByEmail(email: string): Promise<VendorDocument | null> {
    try {
      const vendor = await Vendor.findOne({ email });
      return vendor;
    } catch (error) {
      console.error("Error finding vendor by email:", error);
      throw new CustomError("Failed to find vendor", HTTP_statusCode.InternalServerError);
    }
  }
}

export default VendorRepository;
