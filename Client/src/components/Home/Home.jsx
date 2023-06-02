import Cards from "../Cards/Cards";
const Home =({onClose,characters,onSearch ,existe})=>{
    return (
            <div>
                <Cards  characters={characters} onClose={onClose}/>
                <header>Home</header>
            </div> 
    )
} 




export default Home;
