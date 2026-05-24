const moment = require("moment");
const repo = require("../repository/datesRepository");

async function getAllDates() {
  let dates = [];
  await repo.getAllDates().then((d) => (dates = parseData(d)));
  return dates;
}

async function getHourlyDataByDate(date) {
  const parsedDate = moment(date, "DD-MM-YYYY", true);

  if (!parsedDate.isValid()) {
    throw new Error("Invalid date format.");
  }

  let dates;
  await repo.getAllDates().then((d) => (dates = parseData(d)));
  return dates;
}

async function addHourlyData(date, hour, data) {
  const parsedDate = moment(date, "DD-MM-YYYY", true);

  if (!parsedDate.isValid()) {
    throw new Error("Invalid date format.");
  }

  const document = {
    date: parsedDate.toDate(),
    hourlyData: { hour, data },
  };

  return await repo.insertHourlyData(document);
}

function parseData(data) {
  return data.map((d) => ({
    date: d.date,
    hourlyData: d.hourlyData,
  }));
}

module.exports = { getAllDates, getHourlyDataByDate, addHourlyData };
