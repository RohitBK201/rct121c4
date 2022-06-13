import axios from "axios";
import {useParams} from "react-router-dom"
import { useEffect, useState } from "react";

export const SingleEmp = () =>{

    const {id} = useParams();

    const [data,setdata] = useState([]);

   useEffect(()=>{

    axios({
        method : "GET",
        url: `http://localhost:8080/employee/${id}`
    })
    .then((res)=>{setdata(res.data)})
    .catch((e)=>{console.log(e)})

   },[])

    console.log(data)

    return(
            <div>
                <h1>Employee Detail</h1>
                <div>
                    <h4>Name : {data.name}</h4>
                    <p>Id : {data.id}</p>
                    <p>company : {data.company}</p>
                    <p>salary : {data.salary} rs</p>
                    <p>CTC : {data.ctc} LPA</p>
                    <p>email : {data.email}</p>
                    <p>contact : {data.phone}</p>


                </div>
            </div>
    )

}