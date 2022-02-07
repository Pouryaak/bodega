import express from "express";
import cors from "cors";
import apiV1Routes from "./routes/api/v1.js";

export const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/v1", apiV1Routes);
app.get("/", (req, res) => {
  res.json({
    message: "Bodega Version 1 API",
  });
});
