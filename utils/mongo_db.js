import { MongoClient } from "mongodb";

let custDb;

async function connectCustomMongoDb() {
  const client = new MongoClient(process.env.MONGODB_URI);
  const dbCon = await client.connect(process.env.MONGODB_URI);

  custDb = dbCon;
}

function getDB() {
  return custDb;
}

const mongoDbData = {
  connectCustomMongoDb,
  getDB,
};

export default mongoDbData;
