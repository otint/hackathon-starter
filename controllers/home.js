/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home', {
    title: 'Home'
  });

  // dump the user for debugging
  if (req.isAuthenticated()) {
    console.log("authenticated as user:");
    console.log(JSON.stringify(req.user, null, 4));
  }
};
