import User from "@core/data/models/User";

interface IAuthService {

    loginUser(user: User): Promise<void>;

    registerUser(user: User):  Promise<void>;


}

export default IAuthService;