const Home = require("../models/home"); //Adding Module

const registeredHomes = [];
exports.getAddhome = (req, res, next) => {
  //mvc
  res.render("host/edit-home", {
    pageTitle: "Add Home",
    currentPage: "addHome",
    editing:false,
  });
  //Important to change in partial
};

exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === "true";

  Home.findById(homeId,home=>{//14 part 2
    if(!home){
      console.log("Home not found for editing")
      return res.redirect("/host/host-home-list")
    }
    console.log(homeId, editing,home);
    res.render("host/edit-home", {
      home:home,
      pageTitle: "Edit your Home",
      currentPage: "host-home",
      editing:editing,
  })
  });
};

exports.getHostHomes = (req, res, next) => {
  Home.fetchAll().then(([registeredHomes])=>{
      res.render("host/host-home-list", {
        registeredHomes: registeredHomes,
        pageTitle: "Host Home List",
        currentPage: "host-homes",
      }) //Important to change in partial
  });
};

//Editing home
exports.postAddHome = (req, res, next) => {
  console.log(req.body); //parcel

  const { houseName, price, location, rating, photoURL,description } = req.body;
  const home = new Home(houseName, price, location, rating, photoURL,description); //Adding Module
  home.save()
  res.redirect("/host/host-home-list");
};

exports.postEditHome = (req, res, next) => {
  console.log(req.body); //parcel

  const {id, houseName, price, location, rating, photoURL,description } = req.body;
  const home = new Home(houseName, price, location, rating, photoURL,description,id); //Adding Module
  // home.id=id

  home.save();

  res.redirect("/host/host-home-list");
};
//delete
exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log('Came to delete ', homeId);
  Home.deleteById(homeId, error => {
    if (error) {
      console.log('Error while deleting ', error);
    }
    res.redirect("/host/host-home-list");
  })
}
exports.registeredHomes = registeredHomes;
