const Favourite = require("../models/favourite");
const Home = require("../models/home"); //Adding Module

exports.getIndex = (req, res, next) => {//Adding module
  Home.fetchAll().then(registeredHomes=>{
    res.render("store/index", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnb home",
      currentPage: "index",
    })
  })
};

exports.gethome = (req, res, next) => {//Adding module
  Home.fetchAll().then(registeredHomes=>{
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
    Favourite.getFavourites().then(favourites => {
    favourites = favourites.map(fav => fav.homeId);
    Home.fetchAll().then(registeredHomes => {
      console.log(favourites, registeredHomes);
      const favouriteHomes = registeredHomes.filter((home) =>
        favourites.includes(home._id.toString())
      );

      res.render("store/favourite-list", {
        favouriteHomes: favouriteHomes,
        pageTitle: "My Favourites",
        currentPage: "favourites",
        })
      });
    })
  }

exports.postAddToFavourite=(req,res,next)=>{
  const homeId=req.body.id
  const fav=new Favourite(homeId)
  fav.save().then(result=>{
    console.log('Fav added: ',result)
  }).catch(err=>{
    console.log("Error while making favourite: ",err)
  }).finally(()=>{
    res.redirect('/favourites')
  })
}
// exports.registeredHomes = registeredHomes;

exports.postRemoveFromFavourite = (req, res, next) => {
  const homeId = req.params.homeId;
  Favourite.deleteById(homeId).then(result=>{
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