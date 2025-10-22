import Admin, { AdminDocument } from "../models/admin.model";
import { BaseRepository } from "./baseRepositories";
import { IAdminRepository } from "../interfaces/repositoryInterfaces/admin.repository.interface";

class AdminRepository extends BaseRepository<AdminDocument> implements IAdminRepository {
  constructor() {
    super(Admin);
  }

  // Used for login authentication
  async findByEmail(email: string): Promise<AdminDocument | null> {
    return await Admin.findOne({ email });
  }
}

export default AdminRepository;
