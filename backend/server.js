import express from 'express'
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const port = process.env.PORT || 3000

app.get('/', (request,response)=>{
    response.send("Hello")
})

app.listen(port, ()=>{
    console.log(`Server is  http://localhost:${port}`)
})