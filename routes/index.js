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

  app.get('/main', function (req, res, next) {
    res.render('main');
  });

  app.get('/monitor', function (req, res, next) {
    res.render('monitor');
  });
};