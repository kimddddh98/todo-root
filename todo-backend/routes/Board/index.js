const express = require('express')
const router = express.Router()

const {Board} = require('../../models/Board')

router.post('/', async (req, res) => {
  // const board = new Board(req.body)
  try{
    const boardAll =  await Board.find()

    return res.status(200).json(
      boardAll
    )
  }catch(err){
    return res.json({
      success:false,
      message:err
    })
  }
});

router.post('/write', async (req, res) => {
  const board = new Board(req.body)
  try{
    await board.save()
    return res.status(200).json({
      success:true,
      message:'저장성공'
    })
  }catch(err){
    return res.json({
      success:false,
      message:err
    })
  }

});


router.post('/length', async (req, res) => {
  // const board = new Board(req.body)
  try{
    const boardLength =  await Board.countDocuments()
    return res.status(200).json(
      boardLength
    )
  }catch(err){
    return res.json({
      success:false,
      message:err
    })
  }

});


module.exports = router;