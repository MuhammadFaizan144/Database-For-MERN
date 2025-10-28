const { ObjectId } = require('mongodb')
const mongoose=require('mongoose')
const homeSchema=mongoose.Schema({
  houseName:{type:String, required:true},
  price:{type:String, required:true},
  location:{type:String, required:true},
  rating:String,
  photoURL:String,
});
module.exports=mongoose.model('home',homeSchema)

// module.exports = class Home {
//   constructor(houseName, price, location, rating, photoURL, _id) {
//     this.houseName = houseName
//     this.price = price
//     this.location = location
//     this.rating = rating
//     this.photoURL = photoURL

//       this._id = _id
// save() 
// static fetchAll()
// static findById(homeId)
// static deleteById(homeId)

//     

 