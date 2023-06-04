const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const cp = require('cookie-parser');
require('dotenv').config();
const mongoose = require('mongoose')

// user 모델생성
const {User} = require('./models/User')

// 로그인이 되어있는지 체크
const { auth } = require('./middleware/auto')

const uri = process.env.MONGODB_URI

// db연결
mongoose.connect(uri,{})
.then(()=>console.log('연결완료'))
.catch(err=>console.log(err))

app.set('port', process.env.PORT || 3030);
app.use(cors()).use(express.static(path.join(__dirname, '../public'))).use(express.json()).use(express.urlencoded({extended:true}));
app.use(cp())


let node = 'first'


// 회원가입
// user 정보 db 저장
app.post('/test', async(req,res)=>{
  // req.body 에서 받은 유저 정보를 user 모델에 전달
  const user =  new User(req.body)

  try{
    await user.save()
    console.log('저장 후')
    
    res.status(200).json({
      success:true
    })
  }catch(err){
    return res.json({success:false,err})
  }

})


// 로그인 인증
app.post('/login', async(req,res)=>{
  try{
    //  db에서 유저 이메일에 맞는정보 찾기
    const findUser =  await User.findOne({email:req.body.email})
    if(findUser===null){
      res.json({
        loginSuccess:false,
        message:'매칭안됨'
      })
    }
    // 패스워드 체크

    findUser.comparePassword(req.body.password,(err,isMatch)=>{
      if(!isMatch){
        return res.json({
          loginSuccess:false,
          message:'비밀번호가 틀렸습니다.'
        }) 
      }
      // isMatch 라면 토큰발급
      if(isMatch){
        findUser.generateToken((err,user)=>{
          if(err) return res.json({
            loginSuccess:false,
            message:'토큰 발급 실패'
          })
          // 쿠키에 토큰저장
          res.cookie('x_auth',user.token)
          .json({
          loginSuccess:true,
          message:'토큰 발급 성공'
          })
          
        })
      } 
    })
  }catch(err){
    res.json({err})

  }

})
// app.get('/auth', auth,(req, res) => {
//   res.json({data:'testGet'})
// });


app.get('/test', (req, res) => {
  res.json({data:'testGet'})
});
const days = [
  {
    id:1,
    day:1
  }
]

app.get('/days', (req, res) => {
  res.json(days)
});
app.get('/days/:id', (req, res) => {
  const params = req.params.id
  const data = days.filter(day=>day.id === params)
  res.json(data)
});

app.get('/', (req, res) => {
  sendFile(path.join(__dirname, '../public/index.html'))  
});
app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중')
})
