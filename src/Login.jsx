import { useRef } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./Store";

function Login(){
    let username=useRef();
    let password=useRef();
    let dispatch=useDispatch(); 
    let navigate=useNavigate();
    let loginCheck =() =>{
        if(username.current.value==="kallu" && password.current.value==="kallu12"){
            dispatch(login(username.current.value))
            navigate("/Home");
        }
        else{
            alert("your credentials are wrong .check once !")
        }
    }
    return (
        <>
        <br /><br />
        <label htmlFor="username"><strong>User Name :</strong> </label>
        <input type="text"  ref={username}/> <br /><br />
        <label htmlFor="password"> <strong>Password :</strong> </label>
        <input type="password" ref={password} /> <br /><br />
        <button style={{backgroundColor:"green"}} onClick={loginCheck}>Login</button>
        </>
    )
}
export default Login;
