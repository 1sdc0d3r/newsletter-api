const router = require("express").Router();
const db = require("../../../database/model/newsletterModel");

router.post("/", (req, res) => {
  let email = req.body;
  db.insertEmail(email)
  res.status(200).json(email)
});

router.get("/", (req, res) => {
  const list = db.getEmails()
  res.status(200).json(list)

})

router.use("/", (req, res) => {
  res.status(200).json({
    Route: "Auth Route up"
  });
});

module.exports = router;
