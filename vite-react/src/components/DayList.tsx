// import db from '@/db/data.json'
// import { ENV } from '@/hooks/useEnv'
import { useEffect, useState } from 'react'
import api  from '@/core'
import {Link} from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '@/redux/counterSlice'

export default function DayList(){
  // const data:MongoUser[] = call()
  const count = useSelector((state: any) => state.counter.value)
  const dispatch = useDispatch()

  const [data,setData] = useState<Board[]>([])
  console.log(data)
  async function call() {
    const res = await api.post(`/board`)

    setData(res.data)
  }
  useEffect(()=>{
    call()
  },[])
  
  const authCheck =  async() => {
    const res = await api.get('/auth')
    console.log(res.data)
  }

  const logout =  async() => {
    const res = await api.get('/logout')
    console.log(res.data)
  }

  async function userAdd() {
    const res = await api.post(`/test`,{
      name:'add',
      email:'asdasd@naver.com',
      password:'dlfehd5941'
    })
    console.log(res.data)
  }
  // async function userCheck(db:MongoUser) {
  //   const res = await axios.post(`api/login`,{
  //     name:db.name,
  //     email: db.email,
  //     password:'dlfehd5941'
  //   })
  //   if(res.data.loginSuccess){
  //     console.log('로그인성공')
  //   }
    
  //   console.log(res.data)
  // } 
  
  return(
    <>
  
    {/* <button onClick={}></button> */}
    <Link to='/login'>로그인</Link>
    <ul>
      {data.map(board=>(
        <li key={board._id}>
          {board.title}<br></br>
          {board.content}<br></br>
        </li>
      ))}
    </ul>
    <button onClick={authCheck}>
      auth 체크
    </button>

    <button onClick={logout}>
      로그아웃
    </button>
    <button onClick={userAdd}>
      유저추가
    </button>
        <br />
    <button onClick={()=>dispatch(increment())}>{count} 증가</button>
    {/* 테스트 */}
    {/* {}
      할일목록
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