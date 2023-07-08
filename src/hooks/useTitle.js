import { useEffect } from "react"

export const useTitle =(children)=>{
    useEffect(()=>{
        document.title = `${children}/Sky Movie`
    })
    return null;
}