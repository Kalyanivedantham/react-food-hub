import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import './NotFound.css'; 

function Notfound(){
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate("/Home")
        }, 5000);
    }, [])

    return (
        <>
            <h1>404 Page Not Found</h1>
            <img 
                src="https://www.wp-assistance.fr/files/2023/05/erreur-404-WordPress.jpg" 
                style={{ height: '500px', width: '1000px' }} 
                alt="image"  
            />
        </>
    );
}
export default Notfound;
