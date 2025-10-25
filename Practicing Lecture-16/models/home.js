
const { error } = require("console")
const Favourite = require("./favourite")
const {getDB}=require('../utils/databaseUtils')

module.exports=class Home{
  constructor(houseName,price,location,rating,photoURL){
    this.houseName=houseName
    this.price=price
    this.location=location
    this.rating=rating
    this.photoURL=photoURL
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
  static findById(){
  
  }
  static deleteById(){
    
  }
}