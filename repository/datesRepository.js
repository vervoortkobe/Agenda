const { MongoClient } = require("mongodb");

const url = process.env.MONGO_URL;
const db = process.env.MONGO_DB;
const coll = process.env.MONGO_COLL;
let client;

async function connectToMongoDB() {
  if (!client) {
    client = new MongoClient(url, {});
    await client.connect();
  }
  return client.db(db);
}

async function getAllDates() {
  const db = await connectToMongoDB();
  const collection = db.collection(coll);
  const documents = await collection.find({}).toArray();
  return documents;
}

async function getHourlyDataByDate(date) {
  const db = await connectToMongoDB();
  const collection = db.collection(coll);
  const data = await collection.findOne({ date: new Date(date) });
  return data;
}

async function insertHourlyData(document) {
  const db = await connectToMongoDB();
  const collection = db.collection(coll);
  const result = await collection.insertOne(document);
  return result.insertedId;
}

module.exports = { getAllDates, getHourlyDataByDate, insertHourlyData };
