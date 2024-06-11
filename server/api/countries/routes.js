const express = require("express");
const router = express.Router();
const flagData = require("../../flag_data/cleaned_data.json");

router.get("/api/countries", (req, res) => {
  try {
    res.status(200).json(flagData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/api/country/:name", (req, res) => {
  try {
    const countryName = req.params.name;
    const country = flagData.find(
      (country) => country.common_name === countryName
    );
    if (country) {
      res.status(200).json(country);
    } else {
      res.status(404).json({ message: "Country not found" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
