import dayjs from 'dayjs'
import { useRef, useState,useEffect } from 'react'
import api from '@/core'
// import firebaseMessagingSw from '@/core/firebase-messaging-sw'
import {getMessaging,getToken} from 'firebase/messaging'


export default function Main(){
  
// Add the public key generated from the console here.

// const call = async()=>{
//   const data = await fetch(url)
//   const res = await data.json()
//   setData(res)

useEffect(()=>{
  // const messaging = getMessaging();

},[])
  dayjs.locale('es')
  const today = useRef(new Date())
  const [title,setTitle] = useState(false)
  const postTest = async ()=>{
    console.log('as')
    const res = await api.post(`/todo`)
    console.log(res.data)
  }
  return(
    <>
    <div className="main">
      <div className="main_head">
        <h3>
          {dayjs(today.current).format('ddd, D MMMM YYYY ')}
          <button className='add' onClick={postTest}>+</button>
        </h3>
        <span >할 일: 3</span>
      </div>
      <div className="main_body">
        <ul className='todo_list_ul'>
          <li>
            <input type="checkbox" name="" id="todo-1" checked={title} onChange={()=>setTitle(!title)}/>
            <label htmlFor="todo-1"></label>
            <span>제목 <span>time</span></span>
          </li>
        </ul>
      </div>
    </div>
    </>
  )
}