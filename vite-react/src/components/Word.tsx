import { ENV } from '@/hooks/useEnv';
import {  useState } from 'react';

interface Word{
  id: number ;
  day: number| string;
  eng: string;
  kor: string;
  isDone: boolean;
}
interface Props{
  word:Word
}
const Word = ({word}:Props)=>{
  
  const [isShow,setIsShow] = useState(false)
  const [isDone,setIsDone] = useState(word.isDone)


  const [isDeleted, setIsDeleted] = useState(false);
  function deleteIsDone(){
    if(confirm('삭제하시겠습니까?')){
      fetch(`${ENV}/words/${word.id}`,{
        method:'DELETE'
      })
      .then(res=>{
        if(res.ok){
          setIsDeleted(true)
        }
      })
    }
    
  }
  if (isDeleted) {
    return null; // 삭제된 항목은 렌더링하지 않음
  }
  function toggleIsDone(){
    fetch(`${ENV}/words/${word.id}`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json'

      },
      body:JSON.stringify({
        ...word,
        isDone:!isDone,
      })
      
    })
    .then(res=>{
      if(res.ok){
        setIsDone(!isDone)
      }
    })
  }

  return(
    <>
      <tr className={isDone?'off':''}>
        <td><input type="checkbox" checked={isDone} onChange={toggleIsDone} /></td>
        <td>{word.eng}</td>
        <td>{isShow&&word.kor}</td>
        <td>
          <button onClick={()=>setIsShow(!isShow)}>
            뜻 {isShow?'숨기기':'보기'}
            </button>
          <button className='btn_del' onClick={deleteIsDone}>삭제</button>
        </td>
      </tr>
    </>
  )
} 
export default Word