const express = require("express");
const cors = require("cors");
const { connectToDB, getDB } = require("./db");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// --- SIGNUP ROUTE ---
app.post("/signup", async (req, res) => {
  try {
    const db = getDB();
    const { name, email, password } = req.body;

    // check if user exists
    const existingUser = await db.collection("users").findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // insert new user
    const result = await db.collection("users").insertOne({
      name,
      email,
      password, // (later we hash it)
      createdAt: new Date(),
    });

    res
      .status(201)
      .json({ message: "User registered", userId: result.insertedId });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
});

// Start server AFTER connecting to DB
async function startServer() {
  await connectToDB();

  app.listen(5000, () => {
    console.log("🚀 Server running on port 5000");
  });
}

startServer();
