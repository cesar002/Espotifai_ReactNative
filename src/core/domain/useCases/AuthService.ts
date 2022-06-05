import store from '@redux/store';

import User from "@core/data/models/User";
import UserRepositoryImpl from "@core/data/repositoriesImpl/UserRepositoryImpl";
import IAuthService from "@core/domain/services/IAuthService";
import { addUser, setCurrentUser } from '@redux/slices/usersSlice';


class AuthService implements IAuthService{

    public userRepository: UserRepositoryImpl;

    constructor(userRepository: UserRepositoryImpl){
        this.userRepository = userRepository;
    }

    public async loginUser(user: User): Promise<void> {
        
        const _user = await this.userRepository.getUser(user.email);

        store.dispatch(setCurrentUser(_user));
        
    }
    public async registerUser(user: User): Promise<void> {
        let _user = await this.userRepository.getUser(user.email);
        if(_user){
            throw 'El usuario ya éxiste';
        }
        
        _user = await this.userRepository.createUser(user);

        store.dispatch(addUser(_user));
    }

}

export default AuthService;