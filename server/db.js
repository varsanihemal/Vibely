const { MongoClient, ServerApiVersion } = require("mongodb");

const uri =
  "mongodb+srv://hemal_db_user:hemz321@vibelydb.ivh9wi3.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let db; // store connected database instance

async function connectToDB() {
  try {
    await client.connect();
    db = client.db("VibelyDB"); // select your database
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
}

function getDB() {
  return db;
}

module.exports = { connectToDB, getDB };
