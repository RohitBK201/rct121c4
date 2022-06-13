import { Cactions } from "./Cactions"

const initState = {

    loading : false,
    error : false,
    data : []
}

export const Creducer = (store=initState,action) =>{

    switch(action.type)
    {
        case Cactions.getCreq : {

            return{
                ...store,
                loading : true,
            }
        }
        case Cactions.getCsuc : {

            return{
                ...store,
                loading : false,
                data : action.payload
            }
        }
        case Cactions.getCfal : {

            return{
                ...store,
                loading : false,
                error : true
            }
        }

        default : return store;
    }

}