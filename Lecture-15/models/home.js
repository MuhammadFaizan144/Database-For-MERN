
const db=require("../utils/databaseUtil")

//Database


module.exports = class Home {
  constructor(houseName, price, location, rating, photoURL) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoURL = photoURL;
  }
  //To save Files
  save() {
    //Write File

    
  }

  //Read File
  static fetchAll() {
    return db.execute('SELECT * FROM homes')
    
// .then(([rows,fields])=>{
//       console.log('Getting from DB',rows)
//     })
//     .catch(error=>{
//       console.log('Error while reading home records',error)
//     })

   }
  static findById(homeId, callback) {
  }
  
  static deleteById(homeId, callback) {
    
  }
};
