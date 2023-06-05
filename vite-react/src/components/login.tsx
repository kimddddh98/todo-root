import { ENV } from '@/hooks/useEnv'
import {  useRef } from 'react'
import axios from 'axios'


export default function DayList(){
  const id = useRef<HTMLInputElement>(null)
  const password = useRef<HTMLInputElement>(null)


  async function userCheck(id:string,password:string) {
    const res = await axios.post(`${ENV}/login`,{
      email: id,
      password:password
    })
    console.log(res)
  } 

  return(
    <>
    <form>
      <label>
        email <input type="text" ref={id}/>
      </label>
      <label>
        password <input type="password" ref={password}/>
      </label>
    </form>

    <button type='button' onClick={()=>userCheck(id.current!.value,password.current!.value)}>로그인</button>


    </>
  )
}