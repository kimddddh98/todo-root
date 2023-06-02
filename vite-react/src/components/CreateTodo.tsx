import { ENV } from '@/hooks/useEnv'
import { FormEvent, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CreateTodo(){
  const title = useRef<HTMLInputElement>(null)
  const userId = useRef<HTMLInputElement>(null)
  const content = useRef<HTMLTextAreaElement>(null)
  const nav = useNavigate()
  async function write(e:FormEvent) {
    e.preventDefault();
    
    const res= await fetch(ENV+'/view',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        title:title.current?.value,
        userId:userId.current?.value,
        content:content.current?.value,
        date:new Date()
      })
    })
    if(res.ok){
      nav('/todo')
    }

  } 
  return(
    <form className='write_from' onSubmit={write}>
      <label>글 제목 : <input type="text" ref={title}/></label>
      <label>ID : <input type="text" ref={userId} /></label>
      <div>
        내용
        <textarea ref={content}></textarea>
      </div>
      <button className='btn-type-1'>등록</button>
    </form>
  )
}