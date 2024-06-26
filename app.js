const express = require("express");
const bodyParser = require("body-parser");
const rotesApi = require("./src/Routes/router");
const connectDB = require("./src/Config/db");
const app = express();
app.use(bodyParser.json());

// mongo connection
connectDB();
app.use("/api", rotesApi);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`server start in this ${PORT}`);
});
