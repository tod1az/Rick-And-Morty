const app = require('../src/app')
const session = require('supertest');
const agent = session(app);
describe('Test de rutas',()=>{
    describe('GET /rickandmorty/character/:id',()=>{

        it('Responde con status: 200',async()=>{
            await agent.get('/rickandmorty/character/1').expect(200)
        })

        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"',async()=>{
            const response = (await agent.get('/rickandmorty/character/1')).body
            expect(response).toHaveProperty('id')
            expect(response).toHaveProperty('name')
            expect(response).toHaveProperty('species')
            expect(response).toHaveProperty('gender')
            expect(response).toHaveProperty('status')
            expect(response).toHaveProperty('origin')
            expect(response).toHaveProperty('image')
        })

        it('Si hay un error responde con un status: 500',async ()=>{
            await agent.get('/rickandmorty/character/999').expect(500)
        })
    })
    describe('GET /rickandmorty/login',()=>{
        
        it('Responde con {acces:true} si las credenciales NO estan registradas',async()=>{
           response = (await agent.get('/rickandmorty/login?email=t.diaz.soto@gmail.com&password=tomas123')).body
           expect(response.access).toEqual(true)
        })

        it('Responde con {acces:false} si las credenciales estan registradas',async()=>{
            response = (await agent.get('/rickandmorty/login?email=tsoto@gmail.com&password=123')).body
            expect(response.access).toEqual(false)
         })
    })
    describe('POST /rickandmorty/fav',()=>{
        const character ={
            id:1,
            name:'name',
            species:'species',
            gender:'gender',
            status:'status',
            image:'image'
        }

        const character2 ={
            id:2,
            name:'name',
            species:'species',
            gender:'gender',
            status:'status',
            image:'image'
        }

        it('Deberia registrar el personaje enviado por body en la lista de favoritos',async()=>{
            response = (await agent.post('/rickandmorty/fav').send(character)).body
            expect(response).toEqual([character])
        })

        it('Deberia registrar multiples personajes en la lista de favoritos',async()=>{
            response = (await agent.post('/rickandmorty/fav').send(character2)).body
            expect(response).toEqual([character,character2])
        })

    })

    describe('DELETE /rickandmorty/fav/:id',()=>{
        const character ={
            id:1,
            name:'name',
            species:'species',
            gender:'gender',
            status:'status',
            image:'image'
        }

        const character2 ={
            id:2,
            name:'name',
            species:'species',
            gender:'gender',
            status:'status',
            image:'image'
        }
        it('Si no recibe id, deberia entregar la lista sin cambios',async()=>{
            response = (await agent.delete('/rickandmorty/fav/999')).body
            expect(response).toEqual([character,character2])
        })

        it('Deberia elimnar al personaje que corresponde segun el id recibido',async()=>{
            response = (await agent.delete('/rickandmorty/fav/2')).body
            expect(response).toEqual([character])
        })
    })

})