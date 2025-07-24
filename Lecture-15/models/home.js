
const db=require("../utils/databaseUtil")

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
    //Write File
    return db.execute('INSERT INTO homes (houseName, price, location, rating, photoUrl, description) VALUES (?, ?, ?, ?, ?, ?)', [this.houseName, this.price, this.location, this.rating, this.photoURL, this.description])
    
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
  static findById(homeId) {
     return db.execute('SELECT * FROM homes WHERE id=?', [homeId]);
  }
  
  static deleteById(homeId) {
    return db.execute('DELETE FROM homes WHERE id=?', [homeId]);
  }
};
