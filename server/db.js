const { MongoClient, ServerApiVersion } = require("mongodb");

const uri =
  "mongodb+srv://hemal_db_user:hemz321@vibelydb.ivh9wi3.mongodb.net/VibelyDB";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectToDB() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
}

module.exports = { client, connectToDB };
