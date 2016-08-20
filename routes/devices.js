module.exports = function (app, mongoose, config) {

    var Device = mongoose.model('Device');

    app.get('/devices/', function (req, res, next) {
        var user = req.session.login_user;
        res.render('device', {u_id: user.u_id});
    });

    app.get('/devices/add', function (req, res, next) {
        res.render('device_add');
    });

    app.get('/devices/:device/detail', function (req, res, next) {
        var deviceID = req.params.device;
        Device.findOne({ _id: deviceID }, function(err, doc) {
            if (err) return next(err);
            doc.mac = doc.mac.toUpperCase();
            res.render('device_detail', {device: doc});
        });
    });

    app.get('/devices/:device/update_name', function (req, res, next) {
        var deviceID = req.params.device;
        res.render('device_name', {deviceID: deviceID});
    });

    app.get('/devices/:device/history', function (req, res, next) {
        var deviceID = req.params.device;
        res.render('device_history', {deviceID: deviceID});
    });

    app.get('/devices/:device/unbind', function (req, res, next) {
        var deviceID = req.params.device;
        var user = req.session.login_user;
        res.render('device', {u_id: user.u_id});
    });
};