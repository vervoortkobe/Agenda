const express = require("express");

const svc = require("../service/datesService");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.json(await svc.getAllDates());
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "An error occurred while fetching data." });
  }
});

router.get("/:date", async (req, res) => {
  const { date } = req.params;
  try {
    res.send(await svc.getHourlyDataByDate(date));
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "An error occurred while fetching data." });
  }
});

router.post("/:date", async (req, res) => {
  const { date } = req.params;
  const { hour, data } = req.body;

  if (!hour || !data) {
    return res.status(400).send({ error: "Hour and data are required." });
  }

  try {
    const insertedId = await svc.addHourlyData(date, hour, data);
    res
      .status(201)
      .send({ message: "Data inserted successfully", _id: insertedId });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "An error occurred while fetching data." });
  }
});

module.exports = router;
