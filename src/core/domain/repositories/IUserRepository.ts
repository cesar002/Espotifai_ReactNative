import User from "@core/data/models/User";

interface IUserRepository {
    getUser(email: string): Promise<User | null>;
    createUser(user: User): Promise<User | null>;
}

export default IUserRepository;