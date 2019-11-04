import keys from "./keys"
import mysql from "promise-mysql"
const pool = mysql.createPool(keys.database)

pool.getConnection()
    .then((connection: any) => {
        pool.releaseConnection(connection)
        console.log("conectado")
    })

export default pool