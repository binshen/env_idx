module.exports = function (app, mongoose, config) {

    var Device = mongoose.model('Device');

    app.get('/devices/', function (req, res, next) {
        var user = req.session.login_user;
        res.render('device', {u_id: user.u_id});
    });

    app.get('/devices/add', function (req, res, next) {
        res.render('device_add');
    });

    app.get('/devices/detail/:device', function (req, res, next) {
        var deviceID = req.params.device;
        Device.findOne({ _id: deviceID }, function(err, doc) {
            if (err) return next(err);
            doc.mac = doc.mac.toUpperCase();
            res.render('device_detail', {device: doc});
        });
    });

    app.get('/devices/update_name', function (req, res, next) {
        res.render('device_name');
    });

    app.get('/devices/history', function (req, res, next) {
        res.render('device_history');
    });
};