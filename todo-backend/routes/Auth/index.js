const express = require('express')
const router = express.Router()

const {auth} = require('../../middleware/auth')

router.get('/',auth, (req,res)=>{
  if(req.userInfo){
    res
  .json({
    name:req.userInfo.name,
    email:req.userInfo.email
  })
  }
  
})

module.exports = router;
