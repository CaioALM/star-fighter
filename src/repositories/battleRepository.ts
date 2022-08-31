import connection from "../../database.js";


async function getFighters(firstUser: string, secondUser: string) {
    return connection.query(`SELECT * FROM `);
}


const battleRepository = {
    getFighters,

}

export default battleRepository;
