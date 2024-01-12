const express = require('express')
const app = express()
const fs = require('fs')
app.use(express.json())

let ts = Date.now();

let datetime= new Date(ts);
let date = datetime.getDate();
let month = datetime.getMonth() + 1;
let year = datetime.getFullYear();


console.log(year + " / " + month + " / " + date);
const timestamp = year + " / " + month + " / " + date
fs.writeFile('current date-time.txt',`${timestamp}`,(err) => {
    if(err) throw err
    console.log('File is Created!!!')

})
app.get('/',function(req,res){
    res.json(timestamp)
})

app.listen(3000)