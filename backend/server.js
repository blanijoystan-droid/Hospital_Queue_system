import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import supabase from "./config/supabase.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("Hospital Queue Backend Running 🚀");
});

// Test Supabase Connection
app.get("/test-db", async (req, res) => {
  const { data, error } = await supabase
    .from("users")
    .select("*");

  if (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }

  res.json({
    success: true,
    data,
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});