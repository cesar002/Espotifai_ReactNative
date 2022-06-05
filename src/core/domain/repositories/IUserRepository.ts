import User from "@core/data/models/User";

interface IUserRepository {
    getUser(email: string): Promise<User | undefined>;
    createUser(user: User): Promise<User | undefined>;
}

export default IUserRepository;