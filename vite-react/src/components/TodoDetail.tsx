import { ENV } from '@/hooks/useEnv'
import useFetch from '@/hooks/useFetch'
import {  FormEvent, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
interface BoardList{
  
  id: number,
  userId: string
  title: string
  content: string
  date: string
  
}
interface Reply{
  id: number,
  viewId: number,
  content: string,
  userId: string,
  date: string
}
export default function TodoDetail(){
  // const viewData = useFetch()
  const [replyText,setReplyText] = useState('')
  const location = useLocation()
  const viewData:BoardList = location.state.data
  const reply:Reply[] = useFetch(`${ENV}/reply?viewId=${viewData.id}`)
  const nav = useNavigate()
  async function replyPost(e:FormEvent){
    
    e.preventDefault()
    if(replyText.length>0){
      const post = await fetch(ENV+'/reply',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        viewId:viewData.id,
        content:replyText,
        userId:'댓글 관리자',
        date:new Date()

      })
    })
    if(post.ok){
      alert('댓글이 입력되었습니다.')
      window.location.reload()
    }
    }
    else{
      alert('내용을 입력해주세요.')
    }

  }
  return(
    <>
      <div className="detail_wrap">
        <h2>제목 : {viewData.title}</h2>
        <p>글쓴이 : {viewData.userId}</p>
        <div className='view_content'>
          {viewData.content}
        </div>
        <button className='btn-type-1' onClick={() => nav(-1)}>목록으로</button>
        <div className="reply_wrap">
          <h3>댓글({reply.length})</h3>
          <ul>
            {reply.map(re => (
              <li key={re.id}>{re.content}</li>
            ))}
          </ul>
          <form onSubmit={replyPost}>
            <div>
              <label>id : <input type="text" /></label>
              <label>password : <input type="password" /></label>
            </div>
           
            <textarea value={replyText} onChange={(e) => setReplyText(e.target.value)}></textarea>
            <button className='btn-type-1'>댓글등록</button>
          </form>
        </div>

      </div>

    </>
  )
}