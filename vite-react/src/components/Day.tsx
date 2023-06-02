import {useParams} from 'react-router-dom'
import Word from './Word'
import useFetch from '@/hooks/useFetch';
import { useEffect, useState } from 'react';
import { ENV } from '@/hooks/useEnv';

interface Words{
  id: number ;
  day: number| string;
  eng: string;
  kor: string;
  isDone: boolean;
}

export default function Day(){
  const {day} = useParams()
  const words:Words[] =  useFetch(`${ENV}/words?day=${day}`)
  const [load,setload] =  useState(true)
  useEffect(()=>{
    setload(false)
  },[])
  
  return(
    <>
      {load&&<span>loading...</span>}
      <table>
        <tbody>
          
          {words.map(word=>(
            <Word word={word} key={word.id}/>
          ))}
        </tbody>
      </table>
    </>
  )
}