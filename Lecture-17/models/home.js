
const { ObjectId } = require("mongodb");
const db=require("../utils/databaseUtil")
const {getdb} = require('../utils/databaseUtil');

//Database


module.exports = class Home {
  constructor(houseName, price, location, rating, photoURL,description,_id) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoURL = photoURL;
    this.description=description;
    if(_id){
      this._id=_id;
    }
  }
  //To save Files
  save() {
    const db=getdb()
      const updateFields = {
        houseName: this.houseName,
        price: this.price,
        location: this.location,
        rating: this.rating,
        photoURL: this.photoURL,
        description: this.description
      };
    if(this._id){
      return db.collection('homes').updateOne({_id: new ObjectId(String(this._id))}, {$set: updateFields});
    } else { // insert
      return db.collection('homes').insertOne(this);
    }
  }

  //Read File
  static fetchAll() {
    const db =getdb()
    return db.collection('homes').find().toArray()
  }
  static findById(homeId) {
    const db =getdb()
    return db.collection('homes').find({_id: new ObjectId(String(homeId)) }).next()
  }
  
  static deleteById(homeId) {
    const db =getdb()
    return db.collection('homes').deleteOne({_id: new ObjectId(String(homeId)) })
  } 
};
