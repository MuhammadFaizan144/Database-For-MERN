const Home = require("../models/home")

exports.getAddHome=(req,res,next)=>{
  res.render("host/edit-home",{pageTitle:"Add Home",currentPage:"addhome",editing:false})
}
const registeredHome=[]
exports.getHomeAdd=(req,res,next)=>{
  // console.log(req.body)
  const{houseName,price,location,rating,photoURL}=req.body
  const home=new Home(houseName,price,location,rating,photoURL)
  home.save()
  res.redirect("/host/host-home-list")
}
exports.getHostHomeList=(req,res,next)=>{
  
  Home.fetchAll((registeredHome)=>{
    res.render("host/host-home-list",{registeredHome:registeredHome,pageTitle:"Host Home List",currentPage:"hostHomeList"})
  })
}
exports.getEditHome=(req,res,next)=>{
  
  const homeId=req.params.homeId
  const editing=req.query.editing==='true'
  Home.findById(homeId,home=>{
    if(!home){
      console.log("Home does not found for editing")
      return res.redirect("/host/host-home-list")
    }
    console.log(homeId, editing,home)
    res.render("host/edit-home",{home:home,pageTitle:"Edit your Home",currentPage:"addhome",editing:editing})

  })
}
exports.postEditHome=(req,res,next)=>{
  const{id,houseName,location,rating,price,photoURL}=req.body
  const home=new Home(houseName,price,location,rating,photoURL)
  home.id=id
  home.save()
  res.redirect("/host/host-home-list")
}

exports.postDeleteHome=(req,res,next)=>{
  const homeId=req.params.homeId
  console.log("Came to delete home ID",homeId)
  Home.deleteById(homeId,error=>{
    if(error){
      console.log("Error while deleting",error)
    }
    res.redirect("/host/host-home-list")
  })
}
exports.registeredHome=registeredHome