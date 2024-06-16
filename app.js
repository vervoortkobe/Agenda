const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
require("dotenv").config();
process.env.PORT = 3000;

const datesRouter = require("./controller/datesController.js");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.use("/api/dates", datesRouter);

app.get("/", (req, res) => {
  let eventfile = require("./events/get/home.js");
  if (eventfile) eventfile.run(req, res, fs);

  let stats = require("./json/stats.json");
  stats.views += 1;

  fs.writeFile("./json/stats.json", JSON.stringify(stats), (err) => {
    if (err) console.log("err writing");
  });
});

app.get("/home", (req, res) => {
  res.redirect("/");
});

app.get("/ping", (req, res) => {
  let eventfile = require("./events/get/ping.js");
  if (eventfile) eventfile.run(req, res, fs);
});

app.get("/new", (req, res) => {
  let eventfile = require("./events/get/new.js");
  if (eventfile) eventfile.run(req, res, fs);
});

app.get("/manage/:id", async (req, res) => {
  let eventfile = require("./events/post/manage.js");
  if (eventfile) eventfile.run(req, res, fs);
});

app.post("/manage/edit", (req, res) => {
  let eventfile = require("./events/post/edit.js");
  if (eventfile) eventfile.run(req, res, fs);
});

app.post("/manage/delete", (req, res) => {
  let eventfile = require("./events/post/delete.js");
  if (eventfile) eventfile.run(req, res, fs);
});

app.use(express.json());

const listener = app.listen(process.env.PORT, () => {
  console.log(
    "\x1b[32m",
    `✔️  Your app is listening on port ${listener.address().port}!`,
    "\x1b[0m",
    ""
  );
});
