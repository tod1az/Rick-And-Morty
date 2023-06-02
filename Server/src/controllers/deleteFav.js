const {Favorite} = require('../DB_connection');


module.exports = deleteFav = async(id)=>{
   await  Favorite.destroy({where:{id}})
    return await Favorite.findAll()
}