import express from "express";
import cors from "cors";
import apiV1Routes from "./routes/api/v1.js";
import connectDB from "./db/index.js";

export const app = express();
connectDB();

app.use(express.json());
app.use(cors());
apiV1Routes(app);
app.get("/", (req, res) => {
  res.json({
    message: "Bodega Version 1 API",
  });
});
