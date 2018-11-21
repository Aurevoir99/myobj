var fs = require("fs");
module.exports = {
    home: function (req, res) {
        var name = req.query.name;
        if (name == undefined) {
            res.render("home", {});
        } else {
            var data1 = fs.readFileSync("public/data1.txt");
            var data2 = fs.readFileSync("public/data2.txt");
            var data3 = fs.readFileSync("public/data3.txt");
            var test1 = JSON.stringify(data1);
            var test2 = JSON.stringify(data2);
            var test3 = JSON.stringify(data3);
            var name = req.query.name;
            switch (name) {
                case "data1":
                    res.send(test1);
                    break;
                case "data2":
                    res.send(test2);
                    break;
                case "data3":
                    res.send(test3);
                    break;
            }
        }


    },


}