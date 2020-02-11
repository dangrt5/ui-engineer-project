// keep external API endpoints in env variables
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { get } = require("axios");
const PORT = process.env.NODE_ENV || 5000;

const app = express();

// Mount middlware
app.use(cors());

// Configure route
app.use("/retrieve-data", async (req, res, next) => {
  try {
    const { data } = await get(process.env.MV_ENDPOINT);
    res.send({ status: 200, response: data });
  } catch (e) {
    return next(e);
  }
});

// Listen on specific port
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
