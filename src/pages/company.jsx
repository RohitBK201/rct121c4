import { useEffect, useState } from "react"
import { getcompdata } from "../redux/company/Cactions"
import { useDispatch,useSelector } from "react-redux"
import axios from "axios"

export const Company = () =>{

    const dispatch = useDispatch()

    useEffect(()=>{

        dispatch(getcompdata())

    },[])

    const loading = useSelector((store)=>store.comp.loading)

    const data = useSelector(store=>store.comp.data)

    const [nm,setNm] = useState("")

    const adddata = (nm) =>{

        axios({
            method : "POST",
            url : "http://localhost:8080/company",
            data : {

                name : nm
            }
        }).then((res)=>{  dispatch(getcompdata()) })
        .catch((e)=>{ console.log(e) })

    }



    return(<div>

        <div style={{margin:"auto"}}>
            <h1>Company Names</h1>
            {loading&& 
        <div>
            ....loading
        </div>}

        {data.map((i)=>(<div key={i.id}>{i.name}</div>))}

        </div>


        <div style={{margin : "50px 0px"}}>
            <input type="text" placeholder="Enter Company Name" onChange={(e)=>{setNm(e.target.value)}}/>
            <button onClick={()=>{adddata(nm)}}>Add</button>
        </div>

        
    </div>)
}