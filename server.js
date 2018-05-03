const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

const eventRouter = require("./routes/events");

const app = express();
const port = process.env.PORT || 8431;
const db = process.env.MONGODB_URI || "mongodb://localhost:27017/clubevents";

//middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client", "build")));

// routes
app.use("/api/events", eventRouter);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

mongoose.connect(db, (err) => {
    if (err) console.error(err);
    console.log("Connected to MongoDB");
})

app.listen(port, () => console.log("Server running in port " + port)); 