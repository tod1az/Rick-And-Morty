import { useParams } from "react-router-dom";
import axios from "axios";
import { useState,useEffect } from "react";


const Detail =()=>{
   let {id}= useParams();
   const [character,setCharacter] = useState({});
   useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
          
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);
 
 const {name ,species,status,gender,image,origin} = character;
    return (<div>  
                <h1>{character&&name}</h1>
                <h1>{character&&species}</h1>
                <h1>{character&&status}</h1>
                <h1>{character&&gender}</h1>                              
                <h1>{character&&origin?.name}</h1>
                <img className="image" src={image} alt='' />
        </div>)
}
export default Detail