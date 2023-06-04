const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
require('dotenv').config();

const {User} = require('./models/User')


const mongoose = require('mongoose')

const uri = process.env.MONGODB_URI

mongoose.connect(uri,{})
.then(()=>console.log('연결완료'))
.catch(err=>console.log(err))

app.set('port', process.env.PORT || 3030);
app.use(cors()).use(express.static(path.join(__dirname, '../public'))).use(express.json()).use(express.urlencoded({extended:true}));



let node = 'first'

app.post('/test', async(req,res)=>{
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

app.post('/login', async(req,res)=>{
  try{
    const findUser =  await User.findOne({email:req.body.email})
    if(findUser===null){
      res.json({
        loginSuccess:false,
        message:'매칭안됨'
      })
    }
    findUser.comparePassword(req.body.password,(err,isMatch)=>{
      if(!isMatch) 
        findUser.generateToken((err,user)=>{

        })
      
      
      return res.json({
        loginSuccess:false,
        message:'비밀번호가 틀렸습니다.'
      }) 
      res.json({
        loginSuccess:true,
      })

    })

   
  }catch(err){
    res.json({err})

  }

  // User.findOne({email:req.body.email},(err,user)=>{
  //   if(!user){
  //     return res.json({
  //       loginSuccess:false,
  //       message:'매칭안됨'
  //     })
  //   }
  //   return res.json({
  //     loginSuccess:true,
  //   })
  // }) 

})



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
