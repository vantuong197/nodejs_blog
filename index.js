const express = require('express')
const app = express();

const port = 3000;
app.get('/', (req, res) =>{
    res.send('Hello');
})
app.get('/news', (req, res) =>{
    res.send('This is news page')
})

app.listen(port, ()=>{
    console.log(`app listening on port ${port}`)
})