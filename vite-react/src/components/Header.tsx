import {Link, useLocation,} from 'react-router-dom'

export default function Header(){
  const path = useLocation().pathname
  const isLogin = false 
  return(
    <>
      <header>
        <nav className='header_top'>
          <Link to="/user">마이페이지</Link>
          <Link to="/board">고객센터</Link>
          <Link to="/login">로그인</Link>
          <Link to="/redux">리덕스</Link>
        </nav>
        <nav className='header_bottom'>
          
        </nav>
        {/* <div className="header">
          <h1>
            <Link to="/">영단어</Link>
          </h1>


        </div>
        <div className="header">
          <h1>
            <Link to="/todo">투두리스트</Link>
          </h1>
        </div> */}

      </header>
      {/* <div className="menu">
        {path==='/'?
        (<>
          <Link to='create_word'>단어추가</Link>
          <Link to='create_day'>day추가</Link>
        </>)
        :(<>
        <Link to='create_todo'>게시글 작성</Link>
        <Link to='create_date'>일정추가</Link>
        </>)}
      
      </div> */}

    </>
  )
}