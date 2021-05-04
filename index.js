const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const userRouter = require("./routes/userRouter");
const skillsRouter = require("./routes/skillsRouter");
const projectsRouter = require("./routes/projectsRouter");
const contactRouter = require("./routes/contactRouter");
const connectDB = require("./db/db");
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/user", userRouter);
app.use("/api/skills", skillsRouter);
app.use("/api/projects", projectsRouter);
app.use("/api/contact", contactRouter);
connectDB();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("*", (req, res) => {
    res.send("api is running in development environment");
  });
}

app.listen(PORT, () => console.log("Servering in listening on port : " + PORT));
