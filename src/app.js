import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

// middlerware always implmented through use command

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

//

export { app };
