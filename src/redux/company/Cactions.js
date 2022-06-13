import axios from "axios"

export const Cactions = {

    getCreq : "getCreq",
    getCsuc : "getCsuc",
    getCfal : "getCfal"

}

export const handleCreq = () =>{

    return{
        type : Cactions.getCreq
    }

}

export const handleCsuc = (data) =>{

    return{
        type : Cactions.getCsuc,
        payload : data
    }

}
export const handleCfal = () =>{

    return{
        type : Cactions.getCfal
    }

}


export const getcompdata = () => (dispatch)=> {

    const apireq = handleCreq()

    dispatch(apireq)

    return(
        axios({
            method : "GET",
            url : "http://localhost:8080/company"
        }).then((res)=>{
            
            const apiscu = handleCsuc(res.data)
            dispatch(apiscu)
        })
        .catch((e)=>{
            const apifal = handleCfal();
            dispatch(apifal)
        })
    );
}