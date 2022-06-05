import IUserRepository from "@core/domain/repositories/IUserRepository";
import { DataSource } from "typeorm";
import User from "../models/User";

class UserRepositoryImpl implements IUserRepository {

    public dbConnection: DataSource;

    constructor(dbConnection: DataSource){
        this.dbConnection = dbConnection;
    }

    public async getUser(email: string): Promise<User | null> {
        const user = await this.dbConnection.manager.findOneBy(User, {
            email: email,
        })

        return user;
    }

    public async createUser(user: User): Promise<User | null> {
        const _user = await this.dbConnection.manager.save(user);

        return _user;
    }
    
}

export default UserRepositoryImpl;