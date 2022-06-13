import {useNavigate} from "react-router-dom"

export const Home = () =>{

    const navigate = useNavigate()

    return(<div>
        
    <div style={{border: "1px solid black"}} onClick={()=>{navigate("/company")}}><h1>Company</h1></div>
    
    <br/>
    
        <div style={{border: "1px solid black"}} onClick={()=>{navigate("/employee")}}><h1>Employee</h1></div>
    </div>)
}