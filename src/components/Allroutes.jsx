import {Routes,Route} from "react-router-dom"
import { Company } from "../pages/company"
import { Employee } from "../pages/employee"
import { Home } from "../pages/home"
import { SingleEmp } from "../pages/singlemp"

export const Allroute = () =>{


    return(<Routes>
        <Route path="/" element={<Home/>}/>
        <Route path= "/company" element={<Company/>}/>
        <Route path="/employee" element={ <Employee/> }/>
        <Route path="/employee/:id" element={ <SingleEmp/> }/>
    </Routes>)

}