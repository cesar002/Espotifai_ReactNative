import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    JoinTable,
    ManyToOne,
} from 'typeorm/browser';
import User from './User';

@Entity('favoritos')
class Favorito {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    type: string;

    @Column()
    nombre: string;

    @Column()
    image: string;

    @Column()
    uuid: string;

    @ManyToOne((type) => User, (user) => user.favoritos, {
        cascade: ['insert'],
    })
    user: User;
}


export default Favorito;