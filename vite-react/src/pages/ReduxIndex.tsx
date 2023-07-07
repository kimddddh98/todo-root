import { RootState } from '@/redux'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '@/redux/counterSlice'
import { asyncValue } from '@/redux/postListSlice'
import api from '@/core'
import { useEffect, useState } from 'react'
import type {AppDispatch} from '@/redux'


const reduxIndex = ()=>{
  const reduxCount = useSelector((state:RootState) => state.
  counter.value)

  // const reduxPost = useSelector((state:RootState)=>state.post.value)
  const reduxPostData = useSelector((state:RootState)=>state.post.value)
  const lengthLoad = async() => {
    const res = await api.post('/board/length')
    setlength(res.data)
  } 

  const [boardlength,setlength] = useState()
  // const [posts,setPosts] = useState<Board[]>([])

  useEffect(()=>{
    lengthLoad()
    // setPosts()
    dispatch(asyncValue())
    
  },[])

  const [date,setDate] = useState(new Date())

  console.log(reduxPostData)

  const dispatch = useDispatch<AppDispatch>()
  return(
    <>

      <span>{reduxCount}</span>
      <button onClick={() => { dispatch(increment()) }}>count up</button>
      <ul>
        {reduxPostData.map(post => (
          <li key={post._id}>{post.content}</li>
        ))}
        <li></li>
      </ul>

      <div className="container">
        <div className="login-form">
          <h2>Login</h2>
          <form>
            <input type="text" name="username" placeholder="Username" required />
            <input type="password" name="password" placeholder="Password" required />
            <button type="submit">Login</button>
          </form>
        </div>

        <div className="signup-form">
          <h2>Sign Up</h2>
          <form>
            <input type="text" name="username" placeholder="Username" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>


      <div className="container">
        <h2>게시판 목록</h2>
        <ul className="post-list">
          {reduxPostData.map(post => (
            <li key={post._id}>
              <h3 className="post-title">{post.content}</h3>
              <p className="post-date">{date.toISOString()}</p>
              <p className="post-author">{post.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default reduxIndex