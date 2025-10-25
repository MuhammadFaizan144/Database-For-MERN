
const { error } = require("console")
const Favourite = require("./favourite")
const {getDB}=require('../utils/databaseUtils')
const {ObjectId}=require('mongodb')

module.exports=class Home{
  constructor(houseName,price,location,rating,photoURL,_id){
    this.houseName=houseName
    this.price=price
    this.location=location
    this.rating=rating
    this.photoURL=photoURL
    if(_id){
      this._id=_id
    }
  }

  save(){
    const db=getDB()
    return db.collection('homes').insertOne(this).then((result)=>{
      console.log(result)
    })
  }
  static fetchAll(){
    const db=getDB()
    return db.collection('homes').find().toArray()
  }
  static findById(homeId){
    console.log(homeId)
    const db=getDB()
    return db.collection('homes').find({_id:new ObjectId(String(homeId))}).next()
  }
  static deleteById(){
    
  }
}