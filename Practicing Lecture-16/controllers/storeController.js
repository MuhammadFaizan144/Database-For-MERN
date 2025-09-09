const Favourite = require("../models/favourite");
const Home = require("../models/home");
const { registeredHome } = require("./hostController");
exports.getIndex = (req, res, next) => {
  Home.fetchAll().then(registeredHome => {
    res.render("store/index", {
      registeredHome: registeredHome,
      pageTitle: "Home",
      currentPage: "home",
    });
  });
};
exports.getHomeList = (req, res, next) => {
  Home.fetchAll().then(registeredHome => {
    res.render("store/home-list", {
      registeredHome: registeredHome,
      pageTitle: "Home List",
      currentPage: "Home",
    });
  });
};
exports.getBooking = (req, res, next) => {
  res.render("store/bookings", {
    pageTitle: "Booking",
    currentPage: "bookings",
  });
};
exports.getFavouriteList = (req, res, next) => {
  Favourite.getFavourite().then(favourite => {
    favourite=favourite.map(fav=>fav.houseId)

    Home.fetchAll().then(registeredHome => {
      console.log(favourite,registeredHome)
      const favouriteHomes = registeredHome.filter(home =>
        favourite.includes(home._id.toString())
      );
      res.render("store/favourite-list", {
        favouriteHomes: favouriteHomes,
        pageTitle: "Favourite",
        currentPage: "favourite",
      });
    });
  });
};

exports.postAddToFavourite = (req, res, next) => {
  const houseId=req.body.id
  const fav=new Favourite(houseId)
  fav.save().then(result=>{
    console.log("Fav added", result)
  }).catch(err=>{
    console.log("Error in adding fav",err)
  }).finally(()=>{
    res.redirect("/favourite");
  })
};

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId).then(home => {
    if (!home) {
      console.log("Home not found");
      res.redirect("/Homes");
    } else {
      res.render("store/home-detail", {
        home: home,
        pageTitle: "Home Details",
        currentPage: "home-details",
      });
    }
  });
};
exports.postDeleteFavourite=(req,res,next)=>{
  const homeId=req.params.homeId
  Favourite.deleteById(homeId,error=>{
    if(error){
      console.log("Error while removing favourite",error)
    }
    res.redirect("/favourite")
  })
}