import {Link, useLocation,} from 'react-router-dom'

export default function Header(){
  const path = useLocation().pathname
  const isLogin = false 
  return(
    <>
      <header>
        <h1>Todo-List</h1>
        {/* <nav className='header_top'>
          <Link to="/user">마이페이지</Link>
          <Link to="/board">고객센터</Link>
          <Link to="/login">로그인</Link>
          <Link to="/redux">리덕스</Link>
        </nav>
        <nav className='header_bottom'>
          
        </nav> */}


      </header>


    </>
  )
}