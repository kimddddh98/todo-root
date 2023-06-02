const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
app.set('port', process.env.PORT || 3030);
app.use(cors()).use(express.static(path.join(__dirname, '../vite-react/dist'))).use(express.json()).use(express.urlencoded({extended:false}));

let node = 'first'

app.post('/test',(req,res)=>{
  node = req.body.data
  res.json({data:node})
})

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
// app.get('/test', (req, res) => {
//   res.json({data:node})
// });
app.get('*', (req, res) => {
  sendFile(path.join(__dirname, '../vite-react/dist/index.html'))  
});
app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중')
})
