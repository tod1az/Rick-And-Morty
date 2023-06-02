import SearchBar from "../SearchBar/SearchBar";
import styles from './Nav.module.css'
import {  NavLink } from "react-router-dom";
const Nav =({onSearch,existe})=>{
    
    return(
        <div className={styles.nav}>
            <NavLink to='/about' >
                <button className={styles.link} >About</button> 
            </NavLink> 
            <NavLink to='/home' >
                <button className={styles.link} >Home</button>
            </NavLink> 
            <NavLink to ='/favorites'>
                <button className={styles.link}>Favorites</button>
            </NavLink>
            <SearchBar onSearch={onSearch} existe = {existe} />
           



        </div>
    )
}
export default Nav;