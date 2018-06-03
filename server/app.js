"use strict";
exports.__esModule = true;
var procfs = require("procfs-stats");
var express = require("express");
var ps = procfs(9850);
var app = express();
app.get('/api/io', function (req, res) {
    ps.status(function (r) {
        res.send(r);
    });
});
app.get('/api/stat', function (req, res) {
    ps.status(function (r) {
        res.send(r);
    });
});
app.get('/api/statm', function (req, res) {
    ps.status(function (r) {
        res.send(r);
    });
});
app.get('/api/status', function (req, res) {
    ps.status(function (r) {
        res.send(r);
    });
});
app.get('/api/cpu', function (req, res) {
    ps.status(function (r) {
        res.send(r);
    });
});
app.get('/api/meminfo', function (req, res) {
    ps.status(function (r) {
        res.send(r);
    });
});
app.use(express.static(__dirname + '/public'));
app.listen(80);
