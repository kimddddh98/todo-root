const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
app.set('port', process.env.PORT || 3000);
app.use(cors()).use(express.static(path.join(__dirname, '../public'))).use(express.json()).use(express.urlencoded({extended:false}));

let node = 'first'
app.get('/', (req, res) => {
  res.json({asd:'index'})
});
app.post('/test',(req,res)=>{
  node = req.body.data
  res.json({data:node})
})

app.get('/test', (req, res) => {
  res.json({data:node})
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중')
})
