const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const { connectToDB, getDB } = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

// --- SIGNUP ---
app.post("/signup", async (req, res) => {
  try {
    const db = getDB();
    const { name, email, password } = req.body;

    const existingUser = await db.collection("users").findOne({ email });
    if (existingUser)
      return res.status(400).json({ error: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await db.collection("users").insertOne({
      name,
      email,
      password: hashedPassword,
      createdAt: new Date(),
    });

    res
      .status(201)
      .json({ message: "User registered", userId: result.insertedId });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// --- LOGIN ---
app.post("/login", async (req, res) => {
  try {
    const db = getDB();
    const { email, password } = req.body;

    const user = await db.collection("users").findOne({ email });
    if (!user) return res.status(400).json({ error: "User does not exist" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ error: "Password does not match" });

    res
      .status(200)
      .json({ message: "Login successful", userId: user._id, name: user.name });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// --- START SERVER ---
async function startServer() {
  await connectToDB();
  app.listen(5000, () => console.log("🚀 Server running on port 5000"));
}

startServer();
