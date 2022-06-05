import Favorito from "@core/data/models/Favorito"
import User from "@core/data/models/User"
import { DataSource } from "typeorm"

class DataBaseConnection {

    public static getConnection(): DataSource{
        const dataSource = new DataSource({
            type: "sqlite",
            database: "test",
            logging: true,
            entities: [ User, Favorito ],
        })

        return dataSource;
    }

}

export default DataBaseConnection;