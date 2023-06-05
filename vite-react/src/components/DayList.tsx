// import db from '@/db/data.json'
// import { ENV } from '@/hooks/useEnv'
import { useEffect, useState } from 'react'

// import useFetch from '@/hooks/useFetch'
import {Link} from 'react-router-dom'
// interface Days{
//   // id:number,
//   // day:number
//   // data:string

import axios from 'axios'

// }

interface MongoUser{
  name:string
  email:string
  password:string
  lastname?:string
  role:number
  image?:string
  token?:string
  tokenExp?:string
  _id?:string
  __v?:any
}
export default function DayList(){
  // const data:MongoUser[] = call()
  const [data,setData] = useState<MongoUser[]>([])
  
  async function call() {
    const res = await axios.get(`api/test`)
    setData(res.data)
  }
  useEffect(()=>{
    call()
  },[])
  
  async function userAdd() {
    const res = await axios.post(`api/test`,{
      name:'react',
      email:'react@google.com',
      password:'dlfehd5941'
    })
    console.log(res.data)
  }
  async function userCheck(db:MongoUser) {
    const res = await axios.post(`api/login`,{
      name:db.name,
      email: db.email,
      password:'dlfehd5941'
    })
    console.log(res.data)
  } 
  
  return(
    <>
    <ul>
      {data.map(db=>(
        <li key={db._id} >
          {db.email}
          {db.__v}
          <button onClick={()=>userCheck(db)}>로그인 체크</button>
        </li>
      ))}
    </ul>
    <button onClick={userAdd}>유저 추가</button>
    <Link to='/login'>로그인</Link>
    {/* 테스트 */}
    {}
      {/* 할일목록
      {days.length===0&&<span>loading..</span>}
      <ul className="list_day">
        {
          days.map(day=>(
            <li key={day.id}>
              <Link to={`/day/${day.day}`}>Day:{day.day}</Link>
              
              </li>
          ))
        }
      </ul> */}
    </>
  )
}