const dotenv = require('dotenv');

dotenv.config({
    path: ".env"
});

const captainRouter=require("./Routes/captainRoute")
const cors = require('cors');
const cookieParser = require("cookie-parser");
const db = require("./db/db");
const userRouter = require('./Routes/userRoute');
const express = require('express');
const app = express();

db();
app.use(cors());
app.use(express.urlencoded({ extended: true })); 
app.use(cookieParser());
app.use(express.json());

app.get("/", async (req, res) => {
    res.send("Hello");
});


app.use("/user", userRouter);
app.use("/captain",captainRouter);

module.exports = app;