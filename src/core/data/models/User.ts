import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
} from 'typeorm/browser';
import Favorito from "./Favorito";

@Entity('users')
class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    nombre: string;

    @Column()
    apellido: string;

    @Column()
    password: string;

    @OneToMany((type: any) => Favorito, (favorito) => favorito.user)
    favoritos: Favorito[];
}

export default User;
