
const {User} = require('./../models/user');
const {app} = require('./index');


let init = () => {

    //messege one 

    app.get("/api/one_clicked", function (request, response) {
        User.find({
            $text: {$search: "SEKE'2018 conference = medium size , high-quality, therefore fosters originality"},
            "clicked" : true
        }, function (err, x) {
            if (x) {
                
                console.log(x.length)
                response.status(200);
                response.send(x);
            }
            else {
                response.status(500);
                response.send("Did not success");
            }
        });
    });
    app.get("/api/one_not_clicked", function (request, response) {
        User.find({
            $text: {$search: "SEKE'2018 conference = medium size , high-quality, therefore fosters originality"},
            "clicked" : false
        }, function (err, x) {
            let obj = {};
            if (x) {
                console.log(x.length)
                obj.quentety = x.length;
                response.status(200);
                response.send(x);
            }
            else {
                response.status(500);
                response.send("Did not success");
            }
        });
    });

    //message two

    app.get("/api/two_clicked", function (request, response) {
        User.find({
            $text: {$search: "LATTICE = non-obvious topic for a special session: Conceptual Lattices"},
            "clicked" : true
        }, function (err, x) {
            if (x) {
                
                console.log(x.length)
                response.status(200);
                response.send(x);
            }
            else {
                response.status(500);
                response.send("Did not success");
            }
        });
    });
    app.get("/api/two_not_clicked", function (request, response) {
        User.find({
            $text: {$search: "LATTICE = non-obvious topic for a special session: Conceptual Lattices"},
            "clicked" : false
        }, function (err, x) {
            let obj = {};
            if (x) {
                
                console.log(x.length)
                obj.quentety = x.length;
                response.status(200);
                response.send(x);
            }
            else {
                response.status(500);
                response.send("Did not success");
            }
        });
    });

    //message three

    app.get("/api/three_clicked", function (request, response) {
        User.find({
            $text: {$search: "LATTICE special session = rigorous Software Theory for use in practice"},
            "clicked" : true
        }, function (err, x) {
            if (x) {
                
                console.log(x.length)
                response.status(200);
                response.send(x);
            }
            else {
                response.status(500);
                response.send("Did not success");
            }
        });
    });
    app.get("/api/three_not_clicked", function (request, response) {
        User.find({
            $text: {$search: "LATTICE special session = rigorous Software Theory for use in practice"},
            "clicked" : false
        }, function (err, x) {
            let obj = {};
            if (x) {
                
                console.log(x.length)
                obj.quentety = x.length;
                response.status(200);
                response.send(x);
            }
            else {
                response.status(500);
                response.send("Did not success");
            }
        });
    });

    //message four

    app.get("/api/four_clicked", function (request, response) {
        User.find({
            $text: {$search: "SEKE'2018 conference = medium size , high-quality, therefore fosters originality"},
            "clicked" : true
        }, function (err, x) {
            if (x) {
                
                console.log(x.length)
                response.status(200);
                response.send(x);
            }
            else {
                response.status(500);
                response.send("Did not success");
            }
        });
    });
    app.get("/api/four_not_clicked", function (request, response) {
        User.find({
            $text: {$search: "SEKE'2018 conference = medium size , high-quality, therefore fosters originality"},
            "clicked" : false
        }, function (err, x) {
            let obj = {};
            if (x) {
                
                console.log(x.length)
                obj.quentety = x.length;
                response.status(200);
                response.send(x);
            }
            else {
                response.status(500);
                response.send("Did not success");
            }
        });
    });


}


module.exports = {
    init
}