const rolRepository = require('../repositories/rolRepository');
class RolService {

    getAllRols(){
        return rolRepository.findAll();
    }

    getRolsById(id){
        return rolRepository.findById(id);
    }

    createRol(rolData){
        return rolRepository.create(rolData);
    }

    updateRol(id, rolData){
        return rolRepository.update(id, rolData);
    }

    deleteRol(id){
        return rolRepository.delete(id);
    }

    async getUsersByRolId(rolId) {
        const rol= await rolRepository.findById(rolId);
        if(!rol){
            throw new Error('Rol not found');
        }
        const users = await rolRepository.findUserByIdRol2(rolId);
        const usersbyrol = {
            data:{
                ...rol,
                usuarios: users
            }
        }

        return usersbyrol;
    }
    
}

module.exports = new RolService();