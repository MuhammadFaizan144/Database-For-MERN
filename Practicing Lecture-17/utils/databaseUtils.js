const mongodb = require("mongodb")
const MongoClient = mongodb.MongoClient;
const url = "mongodb+srv://fg7829098:faizanfk0309@cluster01.erroaal.mongodb.net/?appName=Cluster01"
let _db;
const mongoConnect = (callback) => {
    MongoClient.connect(url).then(client => {
        callback()
        _db=client.db('airbnb')
    }).catch(err => {
        console.log('Error while connecting to Mongo: ', err)
    });
}
const getDB=()=>{
    if(!_db){
        throw new Error("Mongo not connected")
    }
    return _db
}
exports.mongoConnect=mongoConnect;
exports.getDB=getDB