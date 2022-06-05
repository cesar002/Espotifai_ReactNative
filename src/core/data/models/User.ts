import Favorito from "./Favorito";

interface User {
    uui?: string;
    email: string;
    nombre: string;
    apellido: string;
    favoritos?: Favorito[];
    password: string
}

export default User;