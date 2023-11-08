const router = require("express").Router();

const notFound = (req, res) => {
  res.status(404);
  res.send("NOT FOUND");
}

router.get("*", notFound);
router.post("*", notFound);
router.patch("*", notFound);
router.delete("*", notFound);

module.exports = router;
