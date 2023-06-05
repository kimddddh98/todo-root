const mongoose = require('mongoose')

const boardSchema =  mongoose.Schema({
  name:{
    type:String,
    maxlength:10
  },
  title:{
    type:String,
    maxlength:30
  },
  content:{
    type:String,
    maxlength:500
  }
})

const Board = mongoose.model('board',boardSchema)

module.exports = {Board}