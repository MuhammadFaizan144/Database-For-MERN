const { getDB } = require("../utils/databaseUtil")

module.exports=class Favourite{
  constructor(houseId){
    this.houseId=houseId
  }
  save(){
    const db=getDB()
    return db.collection('favourites').insertOne(this)
  }
  static addToFavourite(homeId,callback){
    
  }
  static getFavourite(){
    const db=getDB()
    return db.collection('favourite').find().toArray()
  }
  static deleteById(delHomeId,callback){
    
  }
}