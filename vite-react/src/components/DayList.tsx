// import db from '@/db/data.json'
import { ENV } from '@/hooks/useEnv'
import useFetch from '@/hooks/useFetch'
// import {Link} from 'react-router-dom'
interface Days{
  // id:number,
  // day:number
  data:string
}
export default function DayList(){
  const days:Days[]= useFetch(ENV+'/test')
  
  console.log(days)
  
  return(
    <>
    테스트
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