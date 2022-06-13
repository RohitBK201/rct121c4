import axios from "axios"
import { useEffect, useState } from "react"
import { getempdata } from "../redux/employee/Eactions"
import { useDispatch,useSelector } from "react-redux"
import {useNavigate} from "react-router-dom"

export const Employee = () =>{

    const [pg,setPg] =useState(1)

    const dispatch = useDispatch()

useEffect(()=>{
   getempdata(dispatch,pg)
   console.log(pg)
},[pg])




const data = useSelector(store=>store.emp.edata)

console.log(data)

const [eml,setEml] = useState("");
const [nme,setNme] = useState("");
const [cnt,setCnt] = useState("");
const [sal,setSal] = useState(0);
const [ct,setCt] = useState(0);
const [cmp,setCmp] = useState("") ;




const addemp = (nme,eml,cmp,ct,cnt,sal) =>{


    axios({
        method : "POST",
        url : "http://localhost:8080/employee",
        data : {
            "name": nme,
            "company": cmp,
            "ctc": ct,
            "salary": sal,
            "email": eml,
            "phone": cnt
          }
    }).then((res)=>{getempdata(dispatch)})
    .catch((e)=>{console.log(e)})

}



return(<div>
    <div>
    <div><h1>Employee list</h1></div>

    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Company</th>
                <th>CTC</th>
                <th>View</th>
                <th>Delete</th>
                <th>Edit</th>
            </tr>            
        </thead>
        <tbody>
                <Employ data={data}/>
            </tbody>
    </table>


    <button onClick={()=>{if(pg>1){setPg(pg-1)}}}>prev</button>
    <button onClick={()=>{setPg(pg+1)}}>next</button>
    </div>


<div style={{margin: "150px 0px"}}>

<div><h3>ADD Employee</h3></div>

<div style={{display : "flex",flexDirection: "column", width: "400px"}}>
    <input type="text" placeholder="name" onChange={(e)=>{setNme(e.target.value)}} />
    <br/>
    <input type="text" placeholder="email" onChange={(e)=>{setEml(e.target.value)}}/>
    <br/>
    <input type="text" placeholder="company" onChange={(e)=>{setCmp(e.target.value)}}/>
    <br/>
    <input type="text" placeholder="CTC" onChange={(e)=>{setCt(e.target.value)}}/>
    <br/>
    <input type="text"  placeholder="Contact" onChange={(e)=>{setCnt(e.target.value)}}/>
    <br/>
    <input type="text"  placeholder="Salary"onChange={(e)=>{setSal(e.target.value)}}/>    
</div>
<br/>
<button onClick={()=>{addemp(nme,eml,cmp,ct,cnt,sal)}}>ADD</button>


</div>


</div>)

}

const Employ = ({data}) =>{

    const dispatch =useDispatch()


    const naviagte = useNavigate();

    const delt= (id) =>{

        axios({
            method : "DELETE",
            url : `http://localhost:8080/employee/${id}`
        })
        .then((res)=>{getempdata(dispatch)})

    }




    return (
        <>
        {data.map((i)=>(
            
            <tr key={i.id}>
            <td>{i.id}</td>
            <td>{i.name}</td>
            <td>{i.company}</td>
            <td>{i.ctc}</td>
            <td> <button onClick={()=>{naviagte(`/employee/${i.id}`)}} >view</button> </td>
            <td> <button onClick={()=>{delt(i.id)}}>Delete</button> </td>
            <td> <button>Edit</button> </td>
            </tr>
        
        ))}
        </>
    );
}


