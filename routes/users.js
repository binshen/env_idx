module.exports = function (app, mongoose, config) {

    app.get('/users/', function (req, res, next) {
        res.render('user');
    });

    app.get('/users/nickname', function (req, res, next) {
        res.render('user_nickname');
    });

    app.get('/users/password', function (req, res, next) {
        res.render('user_password');
    });

    app.get('/users/feedback', function (req, res, next) {
        res.render('user_feedback');
    });

    app.get('/users/logout', function (req, res, next) {
        res.render('index');
    });
};