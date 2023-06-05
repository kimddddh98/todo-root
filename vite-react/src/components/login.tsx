import { useRef } from 'react'
import axios from 'axios'
export default function Login(){
  const id = useRef<HTMLInputElement>(null)
  const password = useRef<HTMLInputElement>(null)


  async function userCheck(id:string,password:string) {
    const res = await axios.post(`/api/login`,{
      email: id,
      password:password
    })
    if(res.data.loginSuccess){
      console.log('로그인성공')
    }
    console.log(res)
  } 

  async function write() {
    const res = await axios.post(`/api/board/write`,{
      name:'username2',
      title:'글제목 테스트2',
      content:'글 내용 테스트2'
    })
    console.log(res.data)
    // if(res.data.loginSuccess){
    //   console.log('로그인성공')
    // }
  } 

  return(
    <>
    <form>
      <label>
        email  <input type="text" ref={id}/>
      </label>
      <label>
        password <input type="password" ref={password}/>
      </label>
    </form>

    <button type='button' onClick={()=>userCheck(id.current!.value,password.current!.value)}>로그인</button>
    <button type='button' onClick={()=>write()}>글 asd작sdd성 </button>


    </>
  )
}