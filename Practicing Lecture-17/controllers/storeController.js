const Favourite = require("../models/favourite");
const Home = require("../models/home");
const { registeredHome } = require("./hostController");
exports.getIndex = (req, res, next) => {
  Home.find().then(registeredHome => {
    res.render("store/index", {
      registeredHome: registeredHome,
      pageTitle: "Home",
      currentPage: "home",
    });
  });
};
exports.getHomeList = (req, res, next) => {
  Home.find().then(registeredHome => {
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
  Favourite.find().then(favourite => {
    favourite=favourite.map(fav=>fav.houseId.toString())
    Home.find().then(registeredHome=> {
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

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId).then(home=> {
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

exports.postAddToFavourite = (req, res, next) => {
  const homeId=req.body.id
  const fav=new Favourite(homeId);
  fav.save().then(result=>{
    console.log('Fav added: ', result)
  }).catch(err=>{
    console.log("Error while marking favourites: ",err)
  }).finally(()=>{
    res.redirect("/favourite");
  })
  
};
exports.postDeleteFavourite=(req,res,next)=>{
  const homeId=req.params.homeId
  Favourite.deleteById(homeId).then(result=>{
    console.log('Fav Removed: ', result);
  }).catch(err => {
    console.log("Error while removing favourite: ", err);
  }).finally(() => {
    res.redirect("/favourite");
  });
}