const express = require('express')
const router = express.Router()
const getCharById = require('../controllers/getCharByid')
const login = require('../controllers/login')
const postUser = require('../controllers/postUser')
const postFav = require('../controllers/postFav')
const deleteFav = require('../controllers/deleteFav')


router.get('/character/:id',getCharById)
router.get('/login',async(req,res)=>{
    const {email,password} = req.query
    try {
        const access = await login(email,password) 
        return res.status(200).json(access)
    } catch (error) {
        if(error.message==='Faltan datos')return res.status(400).json(error.message)
        if(error.message==='Usuario no encontrado')return res.status(404).json(error.message) 
        if(error.message==='Contraseña incorrecta')return res.status(403).json(error.message)
        return res.status(500).json(error.message) 
    }
})


router.post('/login', async(req,res)=>{
    const {email,password} = req.body
    try {
        const created = await postUser(email,password)
        return res.status(200).json(created)
    } catch (error) {
        if(error.message==='Faltan datos') return res.status(400).json(error.message)
        if(error.message==='El email ya se encuentra registrado') return res.status(404).json(error.message)
        return res.status(500).json(error.message)
    }
})
router.post('/fav',async(req,res)=>{
   const {id,name, origin, status, image, species,gender} = req.body
   try {
    const favorites = await postFav(id,name, origin, status, image, species,gender) 
    return res.status(200).json(favorites)
   } catch (error) {
    if(error.message==='Faltan datos') return res.status(401).json(error.message)
    return res.status(500).json(error.message)
   } 
})
router.delete('/fav/:id',async(req,res)=>{
    const{id} = req.params
    try {
        const favorites = await deleteFav(Number(id))
        return res.status(200).json(favorites)
    } catch (error) {
        return res.status(500).json(error.message)
    }
})

module.exports = router;