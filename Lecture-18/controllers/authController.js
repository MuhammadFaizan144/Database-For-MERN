exports.getLogin = (req, res, next) => {
  //mvc
  res.render("auth/Login", {
    pageTitle: "Login", currentPage:"login",
  });
  //Important to change in partial
};
exports.postLogin=(req,res,next)=>{
  res.redirect("/");
}