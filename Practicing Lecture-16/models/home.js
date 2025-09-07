const { getDB } = require("../utils/databaseUtil")

module.exports=class Home{
  constructor(houseName,price,location,rating,photoURL){
    this.houseName=houseName
    this.price=price
    this.location=location
    this.rating=rating
    this.photoURL=photoURL
  }

  save(){
    const db=getDB();
    return db.collection("homes").insertOne(this).then((result)=>{
      console.log(result)
    })
  }
  static fetchAll(callback){
    
  }
  static findById(homeId,callback){
    
  }
  static deleteById(homeId,callback){
    
  }
}