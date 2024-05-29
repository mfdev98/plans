console.log("Web serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();

//MongoDB chaqirish
const db = require("./server").db();
const mongodb = require("mongodb");

// 1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session
// 3: Views code            
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing code   
app.post("/create-item", (req, res) => {
    console.log('user entered /create-item');
    console.log(req.body);
    // res.end("success");
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
        // console.log(data.ops);
        res.json(data.ops[0]);
    });
});

app.post("/delete-item", (req, res) => {
    const id = req.body.id;
    // console.log(id);
    // res.end("done");

    db.collection("plans").deleteOne({ _id: new mongodb.ObjectId(id) }, function (err, data) {
        res.json({ state: "success" });
    });
});

app.post("/delete-item", (req, res) => {
    const id = req.body.id;
    db.collection("plans").deleteOne({ _id: new mongodb.ObjectId(id) }, function (err, data) {
        res.json({ state: "success" });
    }
    );
});

app.post("/edit-item", (req, res) => {
    const data = req.body;
    db.collection("plans").findOneAndUpdate({ _id: new mongodb.ObjectId(data.id) },
        { $set: { reja: data.new_input } }, function (err, data) {
            res.json({ state: "success" });
        }
    );
});

app.post("/delete-all", (req, res) => {
    if (req.body.delete_all) {
      db.collection("plans").deleteMany(function () {
        res.json({ state: "hamma rejalar o'chirildi" });
      });
    }
  });

app.get("/", function (req, res) {
    console.log('user entered /');
    db.collection("plans")
        .find()
        .toArray((err, data) => {
            if (err) {
                console.log(err);
                res.end("something went wrong");
            } else {
                // console.log(data);
                res.render("reja", { items: data });
            }
        });
});

module.exports = app;