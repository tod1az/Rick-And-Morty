import { ADD_FAV,REMOVE_FAV,FILTER,ORDER } from "./actions-type";
import axios from "axios";

const addFav =  (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async(dispatch) => {
        try {
            const {data} = await axios.post(endpoint, character)
            dispatch({
                type: ADD_FAV,
                payload: data,
             });
        } catch (error) {
            console.log(error);
        }
    };
};
const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async (dispatch) => {
       try {
        const {data} = await axios.delete(endpoint)
        dispatch({
            type: REMOVE_FAV,
            payload: data,
        });
       } catch (error) {
        console.log(error);
       } 
    };
 };
const filterCards =(gender)=>{
    return{
        type:FILTER,
        payload:gender
    }
};
const orderCards =(orden)=>{
    return{
        type:ORDER,
        payload:orden
    }
};


export{addFav,removeFav,filterCards,orderCards};