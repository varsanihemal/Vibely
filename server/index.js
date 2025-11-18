const express = require("express");
const { connectToDB } = require("./db");

const app = express();

async function startServer() {
  await connectToDB(); // connect to MongoDB first

  app.listen(5000, () => {
    console.log("🚀 Server running on port 5000");
  });
}

startServer();
