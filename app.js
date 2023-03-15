const express = require("express");
const boydparser = require("body-parser");
const ejs = require("ejs");
const fulldate = require("./date");

const app = express();
const date = require(__dirname + "/date.js");

app.set("view engine", "ejs");
app.use(boydparser.urlencoded({ extended: true }));
app.use(express.static("public"));

let itemList = ["buy food"];
let worklist = ["api testing", "database mirgration", "bug fixing"];

app.get("/", (req, resp) => {
  resp.render("lists", { url: "/", data: itemList, date: date.fulldate() });
});

app.post("/", (req, resp) => {
  let data = req.body.itemforadd.toString();

  itemList.push(data);
  resp.redirect("/");
});

app.get("/worklist", (eq, resp) => {
  resp.render("lists", {
    url: "/worklist",
    data: worklist,
    date: date.fulldate(),
  });
});

app.post("/worklist", (req, resp) => {
  let worklistitem = req.body.itemforadd.toString();

  worklist.push(worklistitem);

  resp.redirect("/worklist");
});

app.listen(3000, (err) => {
  console.log("server is running on port 3000");
});
