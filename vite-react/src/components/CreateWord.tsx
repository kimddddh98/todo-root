import { ENV } from '@/hooks/useEnv'
import useFetch from '@/hooks/useFetch'
import {  FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
interface Days{
  id:number,
  day:number
}

export default function CreateWord(){

  const nav = useNavigate()
  const days:Days[]= useFetch(ENV+'/days')
  // const engRef = useRef<HTMLInputElement>(null)
  // const korRef = useRef<HTMLInputElement>(null)
  // const dayRef = useRef<HTMLSelectElement>(null)

  const [eng,setEng] = useState('')
  const [kor,setKor] = useState('')
  const [day,setDay] = useState('1')

  const [isLoading, setLoading] = useState(false)


  function onSubmit(e:FormEvent){
    e.preventDefault()
    setLoading(true)
    if(!isLoading){
      e.preventDefault()
    fetch(ENV+`/words`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'

      },
      body:JSON.stringify({
        eng:eng,
        kor:kor,
        day:day,
        isDone:false
      })
      
    })
    .then(res=>{
      if(res.ok){
        alert('단어가 추가되었습니다.')
        nav(`/day/${day}`)
        setLoading(true)
      }
    })
    }
  }
  return(
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label>ENG</label>
        <input type="text" placeholder='computer' value={eng} 
        onChange={(e)=>setEng(e.target.value)} />
      </div>
      <div className="input_area">
        <label>KOR</label>
        <input type="text" placeholder='컴퓨터' value={kor} 
        onChange={(e)=>setKor(e.target.value)} />
      </div>
      <div className="input_area">
        <label>Day</label>
        <select value={day} onChange={e=>setDay(e.target.value)}>
          {days.map(day=>(
              <option key={day.id} value={day.day}>{day.day}</option>
          ))}
        </select>
      </div>
      <button>{isLoading?'..loading':'저장'}</button>
    </form>
  )
}