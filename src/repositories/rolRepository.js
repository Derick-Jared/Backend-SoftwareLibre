const CrudRepository = require("../lib/crudRepositorio");

const Rol = require('../models/Rol');

class RolRepository extends CrudRepository {
    constructor(){
        super(Rol);
    }

    //Add any user-specific repository methods here

    async findUserByIdRol(rolId) {
        const [rows] = await this.pool.query(`select * from rol r inner join usuario u on r.id = u.idRol where r.id=?`, [rolId]);
        return rows;
    }

    async findUserByIdRol2(rolId) {
        const [rows] = await this.pool.query(`select * from usuario where idRol=?`, [rolId]);
        return rows;
    }
}

module.exports = new RolRepository();