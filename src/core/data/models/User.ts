import Biblioteca from "./Biblioteca";

interface User {
    uui: string;
    email: string;
    nombre: string;
    apellido: string;
    biblioteca: Biblioteca[];
    passowrd: string;
}

export default User;