import './App.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Routes, useLocation, useNavigate } from 'react-router-dom';
import { Route } from 'react-router-dom';
import About from './components/About/About';
import Home from './components/Home/Home';
import Detail from'./components/Detail/Detail';
import Error from './components/Error/Error';
import Nav from './components/Nav/Nav';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/favorites';


function App() {

   const [characters , setCharacters] = useState([]);
   const existe=(id)=>{
      id = Number(id);
      let flag = false;
      characters.forEach(character=>{
            if(character.id===id) flag = true;
      })
      return flag
   }
   async function  onSearch(id) {
      if(existe(id)) return alert('Id duplicada'); 
      try {
         let {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         setCharacters((oldChars) => [...oldChars, data])
      } catch (error) {
         console.log(error);         
         window.alert('¡No hay personajes con este ID!');
      } 
   }

   const onClose =(selId)=>{
      selId =  Number(selId);
      let newList = [];
      characters.forEach(character=>{
         if(selId!==character.id)newList.push(character)
      }) 
      setCharacters(newList);
   }
   const location = useLocation();
   const [access, setAccess] = useState(false)
   const navigate = useNavigate();

   async function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      try {
         const {data} = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      } catch (error) {
        window.alert('No se ha encontrado un usuario con las credenciales ingresadas');
      }
   }
      

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

  

   return (
      
   <div>
      {location.pathname!=='/'&&<Nav setAccess={setAccess} access={access} onSearch={onSearch} existe={existe} characters={characters} setCharacters={setCharacters}/>}
      <Routes>
         <Route path='/' element={<Form login={login}/>}/>
         <Route path='/home' element={<Home onClose={onClose} characters ={characters} />}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/detail/:id' element={<Detail />}/>
         <Route path='/favorites' element={<Favorites onClose={onClose}/>}/>
         <Route path='*' element={<Error />}/>
      </Routes>
   </div>
    );

}
export default App;
