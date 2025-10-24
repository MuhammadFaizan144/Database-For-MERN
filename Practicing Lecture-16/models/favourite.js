

module.exports=class Favourite{
  static addToFavourite(homeId,callback){
    Favourite.getFavourite((favourites)=>{
      if(favourites.includes(homeId)){
        callback("Home already in favourite")
      }else{
        favourites.push(homeId)
        fs.writeFile(favouritepath,JSON.stringify(favourites),callback)
      }
    })
  }
  static getFavourite(callback){
    fs.readFile(favouritepath,(err,data)=>{
      callback(!err?JSON.parse(data):[])
    })
  }
  static deleteById(delHomeId,callback){
    Favourite.getFavourite(homeIds=>{
      homeIds=homeIds.filter(homeId=>delHomeId!==homeId)
      fs.writeFile(favouritepath,JSON.stringify(homeIds),callback)
    })
  }
}