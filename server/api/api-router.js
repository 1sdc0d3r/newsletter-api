const router = require("express").Router();
const db = require("../../database/model/newsletterModel");


router.get("/", (req, res) => {
  db.getEmails().then((list) => res.status(200).json(list)).catch(err => res.status(500).json(err))
})

router.post("/", (req, res) => {

  const {
    email
  } = req.body;
  console.log(email)

  if (email.includes("@") & email.includes(".")) {
    db.checkExistingEmails(email).then(([user]) => {
      if (user) {
        res.status(200).json({
          message: "This email is already subscribed."
        })
      } else {
        db.insert(email).then(resp => res.status(201).json({
          resp,
          message: "Successfully subscribed."
        })).catch(err => res.status(500).json(err))
      }
    }).catch(err => res.status(500).json(err))
  } else {
    res.status(200).json({
      message: "Please provide a valid email."
    })
  }
})

router.delete("/", (req, res) => {
  db.remove(req.body.email).then(resp => res.status(200).json(resp)).catch(err => res.status(500).json(err))
})

module.exports = router;
