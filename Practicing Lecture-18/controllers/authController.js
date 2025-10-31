exports.getAddHome = (req, res, next) => {
  res.render("host/edit-home", { pageTitle: "Add Home", currentPage: "addhome", editing: false })
}

