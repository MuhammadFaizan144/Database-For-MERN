const { getDB } = require('../utils/databaseUtils')

module.exports=class Favourite{
  static addToFavourite(homeId,callback){
    
  }
  static getFavourite(callback){
    
  }
  
  static deleteById(homeId){
    console.log(homeId)
        const db = getDB()
        return db.collection('homes').deleteOne({ _id: new ObjectId(String(homeId)) })
  }
}