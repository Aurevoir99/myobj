var express = require("express");
var app = express();
var request = require("request");
var path = require('path');
var controller = require("./controllers/controllers");
var fs = require("fs");
var data1 = fs.readFileSync("public/data1.txt","utf-8");
var data2 = fs.readFileSync("public/data2.txt","utf-8");
var data3 = fs.readFileSync("public/data3.txt","utf-8");
var datas1 = JSON.parse(data1);
var datas2 = JSON.parse(data2);
var datas3 = JSON.parse(data3);
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').__express);
app.use(express.static('public'));

app.get("/", function (req, res) {
    res.render("home", {datas1:datas1,datas2:datas2,datas3:datas3});
});

app.get("/home", function (req, res) {
    res.render("home", {datas1:datas1,datas2:datas2,datas3:datas3});
});

app.get("/tiao", function (req, res) {
    res.render("tiao", {});
});
app.get("/index", function (req, res) {
    res.render("index", {datas3:datas3});
});
app.get("/hot", function (req, res) {
    res.render("hot", {datas1:datas1});
});
app.get("/detail", function (req, res) {
    res.render("detail", {});
});
app.get("/coming", function (req, res) {
    res.render("coming", {datas2:datas2});
});
app.get("/com-details", function (req, res) {
    res.render("com-details", {});
});

app.listen(9999, function () {
    console.log("请通过http://localhost:9999访问");
})