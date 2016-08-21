var request = require('request');

module.exports = function (app, mongoose, config) {

    var User = mongoose.model('User');

    app.get('/users/', function (req, res, next) {
        var user = req.session.login_user;
        var nickname = user.n_name == "" || user.n_name == null ? user.u_name : user.n_name;
        res.render('user', { n_name: nickname });
    });

    app.get('/users/nickname', function (req, res, next) {
        var user = req.session.login_user;
        var nickname = user.n_name == "" || user.n_name == null ? user.u_name : user.n_name;
        res.render('user_nickname', { u_id: user.u_id, n_name: nickname });
    });

    app.get('/users/password', function (req, res, next) {
        var user = req.session.login_user;
        res.render('user_password', { u_id: user.u_id });
    });

    app.get('/users/feedback', function (req, res, next) {
        var user = req.session.login_user;
        res.render('user_feedback', { u_id: user.u_id });
    });

    app.get('/users/logout', function (req, res, next) {
        req.session.destroy();
        res.render('index');
    });

    app.get('/users/:user', function (req, res, next) {
        var userID = req.params.user;
        User.findOne({ _id: userID }, function(err, user) {
            if(err) return next(err);

            var nickname = user.nickname == "" || user.nickname == null ? user.username : user.nickname;
            var user = req.session.login_user;
            user.n_name = nickname;
            req.session.login_user = user;

            res.render('user', { n_name: nickname });
        });
    });
};