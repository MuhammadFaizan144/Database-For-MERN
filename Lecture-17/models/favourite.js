

module.exports = class Favourite {
  constructor(homeId){
    this.homeId=homeId;
  }


  save(){
    const db=getdb()
    return db.collection('favourites').findOne({homeId:this.homeId})
    .then(existingFav=>{
      if(!existingFav){
        return db.collection('favourites').insertOne(this)
      }
      return Promise.resolve()//blank return
    })
  }
  static getFavourites() {
    const db=getdb();
    return db.collection('favourites').find().toArray();
  }

  static deleteById(delHomeId) {
    const db=getdb();
    return db.collection('favourites').deleteOne({homeId:delHomeId})
  }

};
