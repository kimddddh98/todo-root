import { useEffect, useState } from 'react'

export default function useFetch(url:string){
  const [data,setData] = useState([])
  const call = async()=>{
    const data = await fetch(url)
    const res = await data.json()
    setData(res)
  }
  useEffect(()=>{
    call()
  },[])
  return data
}