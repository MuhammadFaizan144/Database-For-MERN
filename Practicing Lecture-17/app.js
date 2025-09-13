const path=require('path')
const rootDir=require('./utils/pathutils')
const express=require('express')
const app=express()
//ejs
app.set('view engine', 'ejs'); // Tells Express to use EJS templates
app.set('views', path.join(rootDir, 'views')); // Correct key is 'views' new version key


const storeRouter=require('./routes/storeRouter')//Export Router
const hostrouter=require('./routes/Hostrouter')//Export Router
const { error } = require('console')
const Homecontroller =require('./controllers/error');
const {mongoConnect} = require('./utils/databaseUtil');

//Database
// qsq
app.use((req,res,next)=>{
  console.log(req.url,req.method)
  next()
})

app.use(express.urlencoded())//parcel
app.use(storeRouter)//Export Router
app.use("/host",hostrouter)//Export Router /host for overall path sharing
app.use(express.static(path.join(rootDir,'public')))//To access css file

app.use(Homecontroller.page404)

const PORT=3002
mongoConnect(()=>{
  app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`)
  })
})