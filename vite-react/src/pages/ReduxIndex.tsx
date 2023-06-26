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

  console.log(reduxPostData)

  const dispatch = useDispatch<AppDispatch>()
  return(
    <>

    <span>{reduxCount}</span>
    <button onClick={()=>{dispatch(increment())}}>count up</button>
    <ul>
      {reduxPostData.map(post=>(
        <li key={post._id}>{post.content}</li>
      ))}
      <li></li>
    </ul>
    </>
  )
}

export default reduxIndex