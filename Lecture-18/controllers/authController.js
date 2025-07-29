exports.getLogin = (req, res, next) => {
  //mvc
  res.render("auth/Login", {
    pageTitle: "Login", currentPage:"login", isLoggedIn:false
  });
  //Important to change in partial
};
exports.postLogin=(req,res,next)=>{
  console.log(req.body)
  req.isLoggedIn=true;
  res.redirect("/");
}