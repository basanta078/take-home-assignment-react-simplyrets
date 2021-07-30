import { useEffect } from "react";
import { getProperties } from "services/rets";


export function useProperties(){
    useEffect(() => {
        getProperties().then(properites => {
            console.log(properites)
        })
    }, [])
    return {}
}