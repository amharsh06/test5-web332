const express = require("express");
const path = require("path");  
const bodyParser = require("body-parser");
const cors = require("cors");
const studentRoutes = require("./routes/studentRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, "public"))); 

app.use(bodyParser.json());


app.use(cors());


app.use("/api", studentRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html")); 
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
