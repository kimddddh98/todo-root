import useFetch from '@/hooks/useFetch'
import TodoList from './TodoList'
import { ENV } from '@/hooks/useEnv'

// interface TypeTodo{
//   id: number
//   name:string
//   isDone:false
// }
interface BoardList{
  
  id: number,
  userId: string
  title: string
  content: string
  date: string
  
}
export default function Todo(){
  const Board:BoardList[] = useFetch(ENV+'/view')
  
  return(
    <>
      <table className='todo_table'>
        <thead>
          <tr>
            <th>NO</th>
            <th>글 제목</th>
            <th>작성자</th>
            <th>작성일</th>
            {/* <th>조회수</th> */}
          </tr>
        </thead>
        <tbody>
          {Board.map((view,index)=>(
            <TodoList key={view.id} view={view} index={index}></TodoList>
          ))}
          
        </tbody>
      </table>
      {/* <ul>
        {Board.map(view=>(
          <TodoList key={view.id} view={view}></TodoList>
        ))}
      </ul> */}
    </>
  )
}