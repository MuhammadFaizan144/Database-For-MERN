const express=require('express')
const app=express()
const path=require('path')
const rootDir=require('./utils/pathutils')
const storeRouter=require("./routes/storeRouter")
const hostRouter=require("./routes/hostRouter")
const authRouter=require("./routes/authRouter")
const get404=require("./controllers/error")
// const { default: mongoose } = require('mongoose')
const mongoose=require('mongoose')
app.set("view engine","ejs")
app.set("views","views")
app.use(express.static(path.join(rootDir,"public")))

app.use(express.urlencoded())
app.use((req,res,next)=>{
  console.log(req.url)
  next()
})
app.use(authRouter)
app.use(storeRouter)
app.use("/host",hostRouter)
app.use(get404.getError)

const POST=3000
const DB_PATH="mongodb+srv://fg7829098:faizanfk0309@cluster01.erroaal.mongodb.net/?appName=Cluster01"
mongoose.connect(DB_PATH).then(()=>{
  console.log('Connected to Mongo')
  app.listen(POST,()=>{
    console.log(`Server link http://localhost:${POST}` )
  })
}).catch(err=>{
  console.log('Error while connecting to Mongo: ',err)
})