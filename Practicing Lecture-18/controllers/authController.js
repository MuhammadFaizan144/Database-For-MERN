exports.getLogin=(req,res,next)=>{
    res.render("auth/login", {pageTitle: "Login", currentPage: "addhome"})

}
exports.postLogin=(req,res,next)=>{
    res.redirect("/")
}