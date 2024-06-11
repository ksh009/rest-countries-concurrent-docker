const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./api/countries/routes.js");

app.use(express.json({ extended: false }));
const port = process.env.PORT || 5000;

const corsOptions = {
  origin: "http://localhost:4200",
};

app.use(cors(corsOptions));
app.use(routes);

app.listen(port, () => {
  console.log(`Flag service is running at http://localhost:${port}`);
});
