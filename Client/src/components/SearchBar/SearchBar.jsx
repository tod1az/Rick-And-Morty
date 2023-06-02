import styles from './SearchBar.module.css'
import { useState } from 'react';

export default function SearchBar({onSearch,existe}) {
   const[id,setId]= useState('')
   const changeHandler =(event)=>{ 
      setId(event.target.value);   
   }                                       
   const addRandom=()=>{
      let num = Math.ceil((Math.random()*826)+1); 
      existe(num)!==true&&onSearch(num);
   }
   const clickHandler=()=>{
      onSearch(id)
      setId('')
   }
   const guardaEnter =(event)=>{
      if(event.keyCode===13){
          clickHandler();
      }
  }
  
   return (
      <div className={styles.search}>
          <input type='number' value={id} onChange={changeHandler} onKeyDown={guardaEnter} placeholder='Ingrese ID...' />
         <button  onClick={clickHandler}>Agregar</button> 
         <button onClick={addRandom}>Random</button>
      </div>
   );
}
