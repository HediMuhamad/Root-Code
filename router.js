const express = require('express');
const app = express();

app.set('view engine','ejs')

const env = require("dotenv");
env.config();

app.use(express.static('public'));

// app.get('/about',(req,res)=>{
//     res.render('about',{});
// });

// app.get('/ask',(req,res)=>{
//     res.render('ask',{});
// });

// app.get('/account',(req,res)=>{
//     res.render('account',{});
// });

app.get('*',(req,res)=>{
    res.render('main',{});
});

console.log(`The server was started in port: ${process.env.port}`);
app.listen(process.env.port);