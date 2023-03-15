const express = require("express");
const boydparser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");
app.use(boydparser.urlencoded({ extended: true }));
app.use(express.static("public"));

let itemList = ["buy food"];

app.get("/", (req, resp) => {
  let dateOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  let date = new Date();
  let fulldate = date.toLocaleDateString("eng-us", dateOptions);

  resp.render("lists", { data: itemList, date: fulldate });
});

app.post("/", (req, resp) => {
  let data = req.body.itemforadd.toString();
  itemList.push(data);
  resp.redirect("/");
});

app.listen(3000, (err) => {
  console.log("server is running on port 3000");
});
