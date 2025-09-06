const Favourite = require("../models/favourite");
const Home = require("../models/home");
const { registeredHome } = require("./hostController");
exports.getIndex = (req, res, next) => {
  Home.fetchAll((registeredHome) => {
    res.render("store/index", {
      registeredHome: registeredHome,
      pageTitle: "Home",
      currentPage: "home",
    });
  });
};
exports.getHomeList = (req, res, next) => {
  Home.fetchAll((registeredHome) => {
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
  Favourite.getFavourite((favourite) => {
    Home.fetchAll((registeredHome) => {
      const favouriteHomes = registeredHome.filter(home =>
        favourite.includes(home.id)
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
  Favourite.addToFavourite(req.body.id, (error) => {
    if (error) {
      console.log("Error while marking favourite", error);
    }
    res.redirect("/favourite");
  });
};

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log("At home details:", homeId);

  Home.findById(homeId, (home) => {
    if (!home) {
      console.log("Home not found");
      res.redirect("/Homes");
    } else {
      console.log("At home details:", home);
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