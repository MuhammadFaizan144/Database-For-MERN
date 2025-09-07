const mongodb=require("mongodb")
const MongoClient=mongodb.MongoClient;
const Mongo_url="mongodb+srv://fg7829098:faizanfk0309@cluster01.erroaal.mongodb.net/?retryWrites=true&w=majority&appName=Cluster01"
let _db;
const mongoConnect=(callback)=>{
  MongoClient.connect(Mongo_url).then((client)=>{
    
    callback(client)
    _db=client.db('airbnb')
  })
  .catch((err)=>{
    console.log(err)
  })
}
const getDB=()=>{
  if (!_db){
    throw new Error('Mongo not connected')
  }
  return _db
}
exports.getDB=getDB
exports.mongoConnect=mongoConnect