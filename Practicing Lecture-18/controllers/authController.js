exports.getLogin=(req,res,next)=>{
    res.render("auth/login", {pageTitle: "Login", currentPage: "addhome",isLoggedIn:false})

}
exports.postLogin=(req,res,next)=>{
    console.log(req.body)
    res.isLoggedIn=true
    res.redirect("/")
}