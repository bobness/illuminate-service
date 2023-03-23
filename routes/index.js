const express = require("express");
const router = express.Router();

router.get("/suggestions", (req, res, next) => {
  // TODO: when actually implementing, merge these blocks together
  // since all suggestions should be the same
  if (req.query.userId) {
    return res.send([
      {
        text: "Artificial Intelligence",
        reason: "Popular in job listings",
      },
      {
        text: "Rust",
        reason: "Popular with candidates",
      },
      {
        text: "3D Printing",
        reason: "Popular with candidates",
      },
    ]);
  } else if (req.query.listingId) {
    return res.send([
      {
        text: "Artificial Intelligence",
        reason: "Popular in job listings",
      },
      {
        text: "Rust",
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
