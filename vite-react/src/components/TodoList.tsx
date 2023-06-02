import { Link } from 'react-router-dom'


interface BoardList{
  
  id: number,
  userId: string
  title: string
  content: string
  date: string
  
}
interface Props{
  view:BoardList
  index:number
}
export default function TodoList({view,index}:Props){
  // const [todoDone,setTodoDone] = useState<boolean>(todo.isDone)

  // function isDonePut(){
  //   fetch(`http://localhost:3030/todo/${todo.id}`,{
  //     method:'PUT',
  //     headers:{
  //       'Content-Type':'application/json'

  //     },
  //     body:JSON.stringify({
  //       ...todo,
  //       isDone:!todoDone
  //     })
  //   })
  //   .then(res=>{
  //     if(res.ok) setTodoDone(!todoDone)
  //   })
  // }
  return(
    <>
      <tr>
        <th>{index}</th>
        <td>
          <Link to={`/todo/${view.id}`} state={{data:view}}>
            {view.title}
          </Link>
        </td>
        <th>{view.userId}</th>
        <th>{view.date}</th>
      </tr>
  
    </>
  )
}