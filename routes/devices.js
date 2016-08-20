module.exports = function (app, mongoose, config) {

    app.get('/devices/', function (req, res, next) {
        var user = req.session.login_user;
        res.render('device', {u_id: user.u_id});
    });

    app.get('/devices/add', function (req, res, next) {
        res.render('device_add');
    });

    app.get('/devices/detail', function (req, res, next) {
        res.render('device_detail');
    });

    app.get('/devices/update_name', function (req, res, next) {
        res.render('device_name');
    });

    app.get('/devices/history', function (req, res, next) {
        res.render('device_history');
    });
};