const {User} = require('../DB_connection');

module.exports = postUser = async(email,password)=>{

    if(!email||!password)throw Error('Faltan datos')
    
    const [user, created] = await User.findOrCreate({where:{email,password}})
    if(created){
        return user
    }else throw Error('El email ya se encuentra registrado')
}
module.exports = postUser;