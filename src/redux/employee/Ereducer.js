import { Eactions } from "./Eactions"

const initState = {

    loading: false,
    error :false,

    edata : []

}


export const Ereducer = (store=initState,action) =>
{
    switch(action.type)
    {
        case Eactions.getEreq : {

            return {
                ...store,
                loading : true
            }

        }
        case Eactions.getEsuc : {

            return {
                ...store,
                loading : false,
                edata : action.payload
            }

        }
        case Eactions.getEfal : {

            return {
                ...store,
                loading : false,
                error : true
            }

        }

        default : return store;
    }
}