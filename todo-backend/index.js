const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const cp = require('cookie-parser');
require('dotenv').config();
const mongoose = require('mongoose')
const RouterIndex = require('./routes')


// 로그인이 되어있는지 체크

const uri = process.env.MONGODB_URI

// db연결
mongoose.connect(uri,{})
.then(()=>console.log('연결완료'))
.catch(err=>console.log(err))

app.set('port', process.env.PORT || 3030);

app.use(cp()).use(express.json()).use(express.urlencoded({extended:true}));
app.use(cors({
  origin: true,
  credentials: true
}));
app.use(express.static(path.join(__dirname, '/public')))



app.use('/',RouterIndex)

// 회원가입
// user 정보 db 저장




// 리액트 라우터로 
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))  
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중')
})
