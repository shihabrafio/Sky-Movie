import { useEffect } from "react"

export const useTitle =(children)=>{
    useEffect(()=>{
        document.title = `${children}/Movie-API`
    })
    return null;
}