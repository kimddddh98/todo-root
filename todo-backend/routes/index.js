const express = require('express')
const router = express.Router()

const { User } = require('../models/User')
const { auth } = require('../middleware/auth')

const AuthRouter = require('./Auth')
const BoardRouter = require('./Board')
const TodoRouter = require('./Todo')

// board
router.use('/board',BoardRouter)
router.use('/todo',TodoRouter)



// auth 요창
router.use('/auth', AuthRouter)

router.post('/push',(req,res)=>{
  console.log(req.body)
  return res.json({
    mes:'성공'
  })
})


router.get('/test', async (req, res) => {
  const findUser =  await User.find()
  res.json(findUser)
});
router.post('/test', async(req,res)=>{
  // req.body 에서 받은 유저 정보를 user 모델에 전달 후 저장
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


// 로그인 , 맞으면 토큰발급
router.post('/login', async(req,res)=>{
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
          message:'토큰 발급 성공',
          })
          
        })
      } 
    })
  }catch(err){
    res.json({err})
  }
})
// app.use('/board')


router.get('/logout',auth,async (req,res)=>{
  try{
    await User.findOneAndUpdate({_id:req.userInfo._id},{token:""})
    res.json({success:true})
  }catch(err){
    res.json({success:false})
  }
})

module.exports = router;