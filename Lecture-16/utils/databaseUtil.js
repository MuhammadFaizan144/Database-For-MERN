const mongo=require('mongodb')
const MongoClient=mongo.MongoClient;
const MONGO_URL="mongodb+srv://fg7829098:faizanfk0309@cluster01.erroaal.mongodb.net/?retryWrites=true&w=majority&appName=Cluster01"
const mongoConnect=(callback)=>{
  MongoClient.connect(MONGO_URL).then(client=>{
    console.log(client)
    callback(client)
  }).catch(err=>{
    console.log('Error while connecting to Mongo',err)
  })
}
module.exports=mongoConnect