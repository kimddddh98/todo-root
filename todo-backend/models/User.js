const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt  = require('jsonwebtoken')

const userSchema = mongoose.Schema({
  name:{
    type:String,
    maxlength:10
  },
  email:{
    type:String,
    trim:true,
    unique:1
  },
  password:{
    type:String,
    minLength:10
  },
  lastname:{
    type:String,
    maxLength:50
  },
  role:{
    type:Number,
    default:0
  },
  image:String,
  token:{
    type:String
  },
  tokenExp:{
    type:Number
  }
})



userSchema.pre('save', function (next) {
  const user = this;

  if (user.isModified('password')) {
      //비밀번호를 암호화 시킨다.
      bcrypt.genSalt(saltRounds, function (err, salt) {
          if (err) return next(err)

          bcrypt.hash(user.password, salt, function (err, hash) {
              if (err) return next(err)
              user.password = hash
              next()
          })
      })
  } else {
      next()
  }
})

userSchema.methods.comparePassword= function (inputPassword,cb){
  bcrypt.compare(inputPassword, this.password,(err,isMatch)=>{
    if(err) return cb(err)
    cb(null,isMatch)
  })
}
userSchema.methods.generateToken = async function(callback){
  // 토큰 발급
  var user = this
  var token = jwt.sign(user._id.toHexString(), 'token');
  user.token = token
  try{
    await user.save()
    callback(null,user)
  }catch(err){
    callback(err)
  }
}
userSchema.statics.findByToken = function(token,auth){
  var user = this
  // user._id
  jwt.verify(token,'token',async (err,decode)=> {
    try{
      const userInfo = await  user.findOne({
        '_id':decode, 
        'token':token
      })
      auth(null,userInfo)

    }catch(err){
      auth(err)
    }

  })
}


const User = mongoose.model('first',userSchema)

module.exports = {User}