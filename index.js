const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000

console.log(PORT);

express()
    .use(express.static(path.join(__dirname,'public')))
    .set('views',path.join(__dirname,'views'))
    .engine('html',require('ejs').renderFile)
    .get('/',(req , res) => {
        res.render('pages/index.html')
    })
    .listen(PORT , () => {
        console.log(`Listening on ${PORT}`);
    })