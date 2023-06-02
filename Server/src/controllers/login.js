const {User} = require('../DB_connection');

module.exports = login= async(email,password)=>{
if(!email||!password) throw Error('Faltan datos')

const user = await User.findOne({where:{email}})

if(!user) throw Error('Usuario no encontrado')

if(user.password===password){
    return {access:true}
}else throw Error('Contraseña incorrecta')
}