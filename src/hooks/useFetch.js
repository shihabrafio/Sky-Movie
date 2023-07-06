import { useEffect, useState } from 'react'

export const useFetch = (apiPath,queryTerm="") => {
    const [data,setData] = useState([])
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.React_APP_API_KEY}&query=${queryTerm}`
    useEffect(()=>{
        const fetchMovie = async ()=>{
          const response = await fetch(url);
          const json = await response.json()
          setData(json.results)
        }
        fetchMovie();
      },[url])

  return {data}
}
