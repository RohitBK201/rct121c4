import axios from "axios"

export const Eactions = {

    getEreq : "getEreq",
    getEsuc : "getEsuc",
    getEfal : "getEfal"

}


export const handleEreq = () =>{


    return{
        type : Eactions.getEreq
    }

}

export const handleEsuc = (data) =>{


    return{
        type : Eactions.getEsuc,
        payload : data
    }

}

export const handleEfal = () =>{


    return{
        type : Eactions.getEfal
    }

}

export const getempdata =  (dispatch,pg) =>{

    const apireq = handleEreq()

    dispatch(apireq)

    return(
        axios({
            method : "GET",
            url : "http://localhost:8080/employee",
            params :{
                _page : pg,
                _limit : 5
            }
        }).then((res)=>{
            const apisuc = handleEsuc(res.data);

            dispatch(apisuc)
        })
        .catch((e)=>{
            const apifal = handleEfal();

            dispatch(apifal)
        })
    )

}