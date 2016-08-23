module.exports = function (app, mongoose, config) {

  app.get('/', function (req, res, next) {
    res.render('index', {login_uid: null});
  });

  app.get('/register', function (req, res, next) {
    res.render('register', {login_uid: null});
  });

  app.get('/forget_password', function (req, res, next) {
    res.render('forget_password', {login_uid: null});
  });

  app.post('/main', function (req, res, next) {
    var session = req.session;
    session.login_user = req.body;
    res.render('main', {user: session.login_user, login_uid: req.session.login_user.u_id});
  });

  app.get('/main', function (req, res, next) {
    var session = req.session;
    res.render('main', {user: session.login_user, login_uid: req.session.login_user.u_id});
  });

  app.post('/monitor/:index', function (req, res, next) {
    var index = req.params.index;
    res.render('monitor', {index:index, data:req.body, login_uid: req.session.login_user.u_id});
  });

  app.get('/shop', function (req, res, next) {
    res.render('shop', {login_uid: req.session.login_user.u_id});
  });
};