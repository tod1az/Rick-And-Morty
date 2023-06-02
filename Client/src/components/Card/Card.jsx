import styles from './Card.module.css'
import { Link,useLocation } from 'react-router-dom';
import {addFav,removeFav} from '../redux/actions'
import { connect } from "react-redux";
import { useState,useEffect } from 'react';

 function Card({id, name, status, species, gender, origin, image, onClose,addFav,removeFav,myFavorites}) {
   const [isFav,setIsFav] = useState(false)
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const handleFavorite=()=>{
      if(isFav){
         setIsFav(!isFav);
         removeFav(id);
      }
      if(!isFav){
         setIsFav(!isFav);
         addFav({id,name, status, species, gender, origin, image})
      }
   }
   const location = useLocation();
   return( 
      <div key={id} className={styles.card}>
         {
         isFav ? (<button className={styles.boton2} onClick={handleFavorite}>❤️</button>) :
         (<button  className={styles.boton2} onClick={handleFavorite}>🤍</button>)
         }
         {location.pathname!=='/favorites'&&<button className={styles.boton} onClick={()=>onClose(id)}>x</button>}
         <img className="image" src={image} alt='' /> 
         <Link className={styles.link} to={`/detail/${id}`}>
            <button className={styles.detail}>Detail</button>
         </Link>
         <h2>{`Name:${name}`}</h2>
         <h2>{`Status:${status}`}</h2>
         <h2>{`Species:${species}`}</h2>
         <h2>{`Gender:${gender}`}</h2>
         <h2>{`Origin:${origin}`}</h2>
      </div>
   );
}
const mapDispatchToProps=(dispatch)=>{
   return{
      addFav:(character)=>dispatch(addFav(character)),
      removeFav:(id)=>dispatch(removeFav(id))
   }
}
const mapStatetoProps=(state)=>{
   return {
      myFavorites:state.myFavorites
   }

}
export default connect(mapStatetoProps,mapDispatchToProps)(Card) 

