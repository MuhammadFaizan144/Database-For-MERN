const mongo=require('mongodb')
const MongoClient=mongo.MongoClient;
const MONGO_URL="mongodb+srv://fg7829098:faizanfk0309@cluster01.erroaal.mongodb.net/?retryWrites=true&w=majority&appName=Cluster01"
let _db;//creating mongodb connection
const mongoConnect=(callback)=>{

  MongoClient.connect(MONGO_URL).then(client=>{
    
    console.log(client)
    _db=client.db("airbnb")//creating mongodb connection
    callback(client)
  }).catch(err=>{
    console.log('Error while connecting to Mongo',err)
  })
}

//creating mongodb connection
const getdb=()=>{
  if(!_db){
    throw new Error('Mongo not connected')
  }
  return _db;
}

exports.mongoConnect=mongoConnect
exports.getdb=getdb