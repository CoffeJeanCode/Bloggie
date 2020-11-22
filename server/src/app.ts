import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";

const app: Application = express();

app.set("PORT", process.env.PORT || 4000);

app.use(morgan("dev"));
app.use(cors());

export default app;
