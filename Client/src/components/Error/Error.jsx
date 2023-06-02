import Nav from "../Nav/Nav";
const Error=({onSearch,existe})=>{
    return(
       <div> 
            <Nav onSearch={onSearch} existe={existe}/> 
            <div>404notFound</div>    
       </div>
    );
}
export default Error