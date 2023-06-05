// import './App.css'
// import '@/assets/main.scss'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from '@/components/Header'
import DayList from './components/DayList'
import Day from './components/Day'
import EmptyPage from '@/components/EmptyPage'
import CreateWord from './components/CreateWord'
import CreateDay from './components/CreateDay'
import Todo from './components/Todo'
import CreateTodo from './components/CreateTodo'
import CreateDate from './components/CreateDate'
import TodoDetail from './components/TodoDetail'
import Login from './components/Login'
// import Login from './components/Login'

function App() {
  console.table(import.meta.env)
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Routes>

          <Route path='/' element={<DayList />}>
          </Route>
          <Route path='/day/:day' element={<Day/>}> 
          </Route>
          <Route path='/create_word' element={<CreateWord/>}/>
          <Route path='/create_day' element={<CreateDay/>}/>
          <Route path='/todo' element={<Todo/>}/>
          <Route path='/todo/:id' element={<TodoDetail/>}/>
          <Route path='/create_todo' element={<CreateTodo/>}/>
          <Route path='/create_date' element={<CreateDate/>}/>
          <Route path='/login' element={<Login/>}/>

          <Route path="*" element={<EmptyPage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
