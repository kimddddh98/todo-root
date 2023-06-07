// 페이지별 로그인 체크

const { User } = require('../models/User')

const auth = (req,res,next)=>{
  // 쿠키에서 토큰 가져오기
  const token = req.cookies.x_auth
  User.findByToken(token,(err,userInfo)=>{
    if(err) res.json({isAuth:false,err:'auth.js err'})
    if(!userInfo) res.json({isAuth:false,err:'auth.js !userinfo'})

    req.userInfo = userInfo
    req.token = token
    next()
  })
  
}
module.exports = {auth}