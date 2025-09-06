const mongodb=require("mongodb")
const MongoClient=mongodb.MongoClient;
const Mongo_url="mongodb+srv://fg7829098:faizanfk0309@cluster01.erroaal.mongodb.net/?retryWrites=true&w=majority&appName=Cluster01"
const mongoConnect=(callback)=>{
  MongoClient.connect(Mongo_url).then((client)=>{
    
    callback(client)
  })
  .catch((err)=>{
    console.log(err)
  })
}
module.exports=mongoConnect