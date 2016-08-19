module.exports = function (app, mongoose, config) {

    app.get('/devices/', function (req, res, next) {
        res.render('device');
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