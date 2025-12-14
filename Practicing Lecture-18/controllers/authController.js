exports.getLogin=(req,res,next)=>{
    res.render("auth/login", {pageTitle: "Login", currentPage: "addhome",isLoggedIn:false})

}
exports.postLogin=(req,res,next)=>{
    console.log(req.body)
    res.cookie("isLoggedIn",true)
    // res.isLoggedIn=true
    res.redirect("/")
}
exports.postLogout=(req,res,next)=>{
    console.log(req.body)
    res.cookie("isLoggedIn",false)
    // res.isLoggedIn=true
    res.redirect("/login")
}