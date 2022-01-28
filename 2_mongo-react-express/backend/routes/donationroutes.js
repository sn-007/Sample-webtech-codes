var express = require("express");
var router = express.Router();

// Load User model

const Donation = require("../models/donation");



// Getting all the recs
router.get("/alldonations", function (req, res) {
    console.log("request revieved");
    Donation.find(function (err, donations) {
        if (err) {
            console.log(err);
        } else {
            res.json(donations);
        }
    })
});

// Add a Donation to DB
router.post("/newdonation", function (req, res) { newDonation(req, res); });
async function newDonation(req, res) {
    const newDonation = new Donation({
        name: req.body.name,
        email: req.body.email,
        amount: req.body.amount

    });



    newDonation.save().then((arg) => { console.log(arg); })
        .catch((err) => { return res.status(200).json({ error: err }); })
};



module.exports = router;
