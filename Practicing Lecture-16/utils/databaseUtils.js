const mongodb = require("mongodb")
const MongoClient = mongodb.MongoClient;
const url = "mongodb+srv://fg7829098:faizanfk0309@cluster01.erroaal.mongodb.net/?appName=Cluster01"
const mongoConnect = (callback) => {
    MongoClient.connect(url).then(client => {
        callback(client)
    }).catch(err => {
        console.log('Error while connecting to Mongo: ', err)
    });
}
module.exports=mongoConnect;