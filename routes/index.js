module.exports = function (app, mongoose, config) {

  app.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
  });

  app.get('/register', function (req, res, next) {
    res.render('register');
  });

  app.get('/forget_password', function (req, res, next) {
    res.render('forget_password');
  });

  app.post('/main', function (req, res, next) {
    var session = req.session;
    session.login_user = req.body;
    res.render('main', {user: session.login_user});
  });

  app.get('/main', function (req, res, next) {
    var session = req.session;
    res.render('main', {user: session.login_user});
  });

  app.post('/monitor/:index', function (req, res, next) {
    var index = req.params.index;
    res.render('monitor', {index:index, data:req.body});
  });
};