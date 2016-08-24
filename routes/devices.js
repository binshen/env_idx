var moment = require('moment');
var ua_parser = require('ua-parser');

module.exports = function (app, mongoose, config) {

    var Device = mongoose.model('Device');

    app.get('/devices', function (req, res, next) {
        res.render('device', {login_uid: req.session.login_user.u_id});
    });

    app.get('/devices/add', function (req, res, next) {
        res.render('device_add', {login_uid: req.session.login_user.u_id});
    });

    app.get('/devices/intro', function (req, res, next) {
        var r = ua_parser.parse(req.headers['user-agent']);
        res.render('device_intro', {os: r.os.family, login_uid: req.session.login_user ? req.session.login_user.u_id : null});
    });

    app.get('/devices/:device/detail', function (req, res, next) {
        var deviceID = req.params.device;
        Device.findOne({ _id: deviceID }, function(err, doc) {
            if (err) return next(err);
            res.render('device_detail', {device: doc, login_uid: req.session.login_user.u_id});
        });
    });

    app.get('/devices/:device/update_name', function (req, res, next) {
        var deviceID = req.params.device;
        Device.findOne({ _id: deviceID }, function(err, doc) {
            if (err) return next(err);
            res.render('device_name', {device: doc, login_uid: req.session.login_user.u_id});
        });

    });

    app.get('/devices/:device/history', function (req, res, next) {
        var deviceID = req.params.device;
        var today = moment().format('YYYYMMDD');
        var days = [];
        for(var i = 31; i--; i >= 0) {
            var day = moment().add(-i, 'd');
            days.push([day.format('YYYYMMDD'), day.format('YYYY-MM-DD')]);
        }
        Device.findOne({ _id: deviceID }, function(err, doc) {
            if (err) return next(err);
            res.render('device_history', {device: doc, days: days, login_uid: req.session.login_user.u_id});
        });
    });

    app.get('/devices/:device/unbind', function (req, res, next) {
        var deviceID = req.params.device;
        var user = req.session.login_user;
        res.render('device', {login_uid: req.session.login_user.u_id});
    });
};