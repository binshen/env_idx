var request = require('request');

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

    app.post('/users/login', function (req, res, next) {
        // var username = req.body.username;
        // var password = req.body.password;
        // request.post({
        //     url: config.api.uri + "/user/login",
        //     body: "username="+username+"&password="+password
        // }, function(err, res, body){
        //     //console.log("username="+username+"&password="+password);
        //     //console.log(body);
        //     //res.send();
        // });
    });

    app.get('/users/logout', function (req, res, next) {
        //req.session.destroy();
        res.render('index');
    });
};