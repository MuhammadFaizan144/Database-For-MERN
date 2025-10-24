
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
    getDB()
  }
  static fetchAll(){
  }
  static findById(){
  
  }
  static deleteById(){
    
  }
}