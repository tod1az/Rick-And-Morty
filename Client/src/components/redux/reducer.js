import { ADD_FAV,REMOVE_FAV,FILTER, ORDER } from "./actions-type";
const initialState = {
    myFavorites:[],
    allCharacters:[]
}

function reducer(state = initialState,{type,payload}){
    switch(type){
        case ADD_FAV:
            return{
                ...state, myFavorites: payload, allCharacters: payload
            }
        case REMOVE_FAV:
            return{
                ...state, myFavorites: payload,allCharacters:payload 
            }
        case FILTER:
            let allCharactersFiltered = []
            payload==='All'?allCharactersFiltered=state.allCharacters:allCharactersFiltered = state.allCharacters.filter((char)=>char.gender===payload)
            return{
                ...state,
                myFavorites:allCharactersFiltered
            }
        case ORDER:
            let characters = [...state.myFavorites]   
            
            return{
                ...state,
                myFavorites:payload==='A'?characters.sort((a,b)=>a.id-b.id):characters.sort((a,b)=>b.id-a.id)
            }   
        default:
            return{...state}        
    }
}
export default reducer;