import express, { json } from "express";
import cors from "cors";
import router from "../routes/index.js";
import AppError from "../errors/AppError.js";

const app = express();
app.use(json());
app.use(cors());
app.use("/api", router);

app.use((error, req, res, next) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }

  return res.status(500).json({
    status: "error",
    message: error.message,
  });
});

export default app;
