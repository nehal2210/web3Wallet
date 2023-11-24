const express = require("express")
const accountController = require("../controllers/accountController")

const router = express.Router()


router.route("/decrypt").post(accountController.decrypt)
router.route("/").post(accountController.addAccount).get(accountController.getAccount)





module.exports = router