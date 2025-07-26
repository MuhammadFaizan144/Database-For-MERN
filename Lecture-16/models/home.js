
const db=require("../utils/databaseUtil")
const {getdb} = require('../utils/databaseUtil');

//Database


module.exports = class Home {
  constructor(houseName, price, location, rating, photoURL,description,id) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoURL = photoURL;
    this.description=description
    this.id=id;
  }
  //To save Files
  save() {
    const db=getdb()
    return db.collection("homes").insertOne(this).then((result)=>{
      console.log(result)
    })
    
  }

  //Read File
  static fetchAll() {

   }
  static findById(homeId) {
  }
  
  static deleteById(homeId) {
  }
};
