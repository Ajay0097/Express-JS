const express = require('express');
const app     = express();
const port    = 3000;

app.listen(port,()=>{
    console.log("Running Express App");
});

app.use(express.static('public'));
app.get('/',function(res,req){
    res.sendFile(path.join(__dirname,'public','index.html'))
});
app.get('/Home',function(res,req){
    res.sendFile(path.join(__dirname,'public','Home.html'))
});