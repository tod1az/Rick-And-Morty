//import { log } from '@11ty/eleventy/src/EleventyErrorHandler';
import Card from "../Card/Card";
import styles from './Cards.module.css'
 export default function Cards({characters,onClose}) {
   return (<div key= {Date.now}className={styles.cardsContainer}>  
      {characters.map((character)=>
         <Card  
         id={character.id}
         name={character.name}
         status={character.status}
         species={character.species}
         gender={character.gender}
         origin={character.origin.name}
         image={character.image}
         onClose={onClose}  
         />
      )}
    </div>);
}

