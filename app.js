const express = require('express')
const app = express()
app.get('/',(req,res)=>res.send('Hello Express hola arresh'))
app.listen(80)