import { useState } from "react";
import validation from "../jsFunctions/validation";
const Form=({login})=>{
    const [userData,setUserData]=useState({
        email:'',
        password:''
    });
    const[errors,setErrors] = useState({ email:'',password:''});
    const changeHandler=(e)=>{
      setUserData({...userData, [e.target.name]:e.target.value})  
      setErrors({...errors,[e.target.name]:validation(e.target.name,e.target.value)})
    }

  
    const clickHandler=(e)=>{
        e.preventDefault();
        login(userData);
        setUserData({email:'',password:''})
        
    }

    return(
        <form onSubmit={clickHandler}>
            <label htmlFor="email">Email:</label>
            <hr />
            <input name="email" value={userData.email} onChange={changeHandler} placeholder="example@example.com"/>
            <hr />
            {errors.email!==''&&<span>{errors.email}</span>}
            <hr />
            <label htmlFor="password">Contraseña:</label>
            <hr />
            <input  type="password" name="password" value={userData.password} onChange={changeHandler}  />
            <hr />
            {errors.password!==''&&<span>{errors.password}</span>}
            <hr />
            <button type="submit">Submit</button>
        </form>
    )
}
export default Form;