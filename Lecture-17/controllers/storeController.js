const Favourite = require("../models/favourite");
const Home = require("../models/home"); //Adding Module

exports.getIndex = (req, res, next) => {//Adding module
  Home.find().then(registeredHomes=>{
    res.render("store/index", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnb home",
      currentPage: "index",
    })
  })
};

exports.gethome = (req, res, next) => {//Adding module
  Home.find().then(registeredHomes=>{
    res.render("store/home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Homes List",
      currentPage: "Home",
    })
});
};

exports.getBookings=(req, res, next) => {
    res.render("store/bookings", {
      pageTitle: "My bookings",
      currentPage: "bookings",
    })
};

exports.getFavouriteList=(req, res, next) => {
    Favourite.find()
    .populate('houseId')
    .then(favourites => {
    const favouriteHomes = favourites.map(fav => fav.houseId);
      res.render("store/favourite-list", {
        favouriteHomes: favouriteHomes,
        pageTitle: "My Favourites",
        currentPage: "favourites",
        })
      });
    }

exports.postAddToFavourite=(req,res,next)=>{
  const homeId=req.body.id
  Favourite.findOne({homeId:homeId}).then(fav=>{
        if (fav) {
      console.log("Already marked as favourite");
    } else {
      fav = new Favourite({houseId: homeId});
      fav.save().then((result) => {
        console.log("Fav added: ", result);
      });
    }
    res.redirect("/favourites");
  }).catch(err => {
    console.log("Error while marking favourite: ", err);
  });
}
// exports.registeredHomes = registeredHomes;

exports.postRemoveFromFavourite = (req, res, next) => {
  const homeId = req.params.homeId;
  Favourite.findOneAndDelete({houseId:homeId}).then(result=>{
    console.log('Fav removed: ',result)
  }).catch(err=>{
    console.log("Error while removing favourite: ",err)
  }).finally(()=>{
    res.redirect('/favourites')
  })
}


exports.getHomeDetails = (req, res, next) => {//Adding module
   const homeId = req.params.homeId;
  Home.findById(homeId).then(home => {
    // const home = homes[0];
    if (!home) {
      console.log("Home not found");
      res.redirect("/homes");
    } else {
      res.render("store/home-detail", {
        home: home,
        pageTitle: "Home Detail",
        currentPage: "Home",
      });
    }
    })
};