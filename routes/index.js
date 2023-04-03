const express = require("express");
const router = express.Router();

router.get("/suggestions", (req, res, next) => {
  if (req.query.userId || req.query.listingId) {
    // TODO: replace demo with real implementation
    return res.send([
      {
        text: "Artificial Intelligence",
        reason: "Popular in job listings",
      },
      {
        text: "Typescript",
        reason: "Popular with candidates",
      },
      {
        text: "3D Printing",
        reason: "Popular with candidates",
      },
    ]);
  }
  return res.sendStatus(400);
});

module.exports = router;
