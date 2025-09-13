const express=require('express')
const app=express()

app.get=(req,res,next)=>{
  console.log(req.url)
  // next()
}

const PORT=3000
app.listen(PORT,()=>{
  console.log(`Server port link http://localhost:${PORT}`)
})