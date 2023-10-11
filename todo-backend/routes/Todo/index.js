const express = require('express')
const router = express.Router()

router.post('/',async(req,res)=>{
  try{
    return res.json({
      m:'성공'
    })
  }catch(err){
    return res.json({
      m:'실패'
    })
  }
  
})
module.exports = router;
