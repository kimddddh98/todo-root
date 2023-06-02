import useFetch from '@/hooks/useFetch'
import { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import {ENV} from '@/hooks/useEnv'
interface Days{
  id:number,
  day:number
}

export default function CreateDay(){

  const nav = useNavigate()
  const days:Days[]= useFetch(ENV+'/days')

  function addDay(e:FormEvent){
    e.preventDefault()
    fetch(`${ENV}/days`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
      day:days.length+1
      })
    })
    .then(res=>{
      if(res.ok){
        alert('날짜가 추가되었습니다.')
        nav(`/`)
      }
    })
  }
  
  return(
    <div>
      <h3>현재 일수: {days.length}</h3>
      <button onClick={addDay}>day추가</button>
    </div>
  )
}