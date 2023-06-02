const {Favorite} = require('../DB_connection');


module.exports = postFav=async (id,name, origin, status, image, species,gender)=>{
    
    if(!id||!name|| !origin|| !status|| !image|| !species||!gender) throw Error('Faltan datos')

   await  Favorite.create({id,name, origin, status, image, species,gender})
    const favorites = await Favorite.findAll()
    return favorites
}