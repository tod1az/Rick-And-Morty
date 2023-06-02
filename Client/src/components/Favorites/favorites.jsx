import styles from './favorites.module.css'
import Card from '../Card/Card'
import { connect,useDispatch } from "react-redux";
import {filterCards,orderCards} from '../redux/actions'
import { useState } from 'react';

const Favorites =({myFavorites,onClose})=>{
    const [aux,setAux]= useState(false);
    const dispatch=useDispatch();

    const handleOrder =(e)=>{
        dispatch(orderCards(e.target.value))
        setAux(!aux)
    }
    const handleFilter =(e)=>{
        dispatch(filterCards(e.target.value))
        setAux(!aux)
    }
    return(
       
        <div className={styles.container}>
          <div>
            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>    
            </select>
            <select onChange={handleFilter}>
                <option value="All" >All</option>
                <option value="Male" >Male</option>
                <option value="Female" >Female</option>
                <option value="Genderless" >Genderless</option>
                <option value="unknown" >unknown</option>
            </select> 
          </div>  
          
          {myFavorites.map((fav)=>
            <Card  
                id={fav.id}
                name={fav.name}
                status={fav.status}
                species={fav.species}
                gender={fav.gender}
                origin={fav.origin}
                image={fav.image}
                onClose={onClose}  
            />
            )}
        </div>
    )
}

const mapStatetoProps =(state)=>{
    return {
        myFavorites:state.myFavorites
    }


}
export default connect(mapStatetoProps,null)(Favorites)