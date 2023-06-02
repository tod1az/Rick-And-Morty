const axios = require('axios')


const URL = 'https://rickandmortyapi.com/api/character/'

const getCharById = async (req,res)=>{
    let id= req.params.id
    try {
       let {data} = await axios.get(`${URL}${id}`)
       if(data.name){
        const character = {
            id:Number(id),
            name:data.name,
            gender:data.gender,
            species:data.species,
            origin:data.origin,
            image:data.image,
            status:data.status
        }
        res.status(200).json(character)  
       }else res.status(404).send('Not found')
   } catch (error) {
    res.status(500).send(error.message)
   }
}





module.exports = getCharById;
