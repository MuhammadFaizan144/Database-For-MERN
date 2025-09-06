const fs=require("fs")
const path=require("path")
const rootDir=require("../utils/utilspath")
const { error } = require("console")
const Favourite = require("./favourite")
const filepath=(path.join(rootDir,"data","home.json"))
const registeredHome=[]
module.exports=class Home{
  constructor(houseName,price,location,rating,photoURL){
    this.houseName=houseName
    this.price=price
    this.location=location
    this.rating=rating
    this.photoURL=photoURL
  }

  save(){
    Home.fetchAll((registeredHome)=>{
      if(this.id){
        registeredHome=registeredHome.map(home=>home.id===this.id?this:home)
      }else{
        this.id=Math.random().toString()
        registeredHome.push(this)
      }
      fs.writeFile(filepath,JSON.stringify(registeredHome),(error)=>{
        console.log("File Writing Conclude: ",error)
      })
    })
  }
  static fetchAll(callback){
    fs.readFile(filepath,(err,data)=>{
      callback(!err?JSON.parse(data):[])
    })
  }
  static findById(homeId,callback){
    this.fetchAll(homes=>{
      const homefound=homes.find(home=>home.id===homeId)
      callback(homefound)
    })
  }
  static deleteById(homeId,callback){
    this.fetchAll(homes=>{
      homes=homes.filter(home=>home.id!==homeId)
      fs.writeFile(filepath,JSON.stringify(homes),error=>{
        Favourite.deleteById(homeId,callback)
      })
    })
  }
}