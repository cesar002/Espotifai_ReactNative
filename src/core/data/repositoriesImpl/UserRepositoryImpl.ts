import IUserRepository from "@core/domain/repositories/IUserRepository";
import store, { RootState } from '@redux/store';
import { addUser } from '@redux/slices/usersSlice';
import User from "../models/User";

class UserRepositoryImpl implements IUserRepository {

    public async getUser(email: string): Promise<User | undefined> {
        return new Promise((resolve, reject) =>{
            const state: RootState = store.getState();
            const user = state.user.users.find((u: User) => u.email == email);

            resolve(user);
        });
    }

    public async createUser(user: User): Promise<User | undefined> {
        return new Promise((resolve, reject) =>{
            resolve(user);
        });
    }
    
}

export default UserRepositoryImpl;