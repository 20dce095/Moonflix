import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import http from "http";
import mongoose from "mongoose";
import "dotenv/config";
import routes from "./src/routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v1", routes);

const port = 5000;

const server = http.createServer(app);

mongoose.set('strictQuery', true);
mongoose
  .connect("mongodb+srv://pradippipaliya02:moonflixdb@cluster0.bqa5czs.mongodb.net/moonflix?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

//test
