const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const DonationSchema = new Schema({
	
    name: {
		type: String,
		required: true
    },

	email: {
		type: String,
		required: true
    },
    amount: {
		type: String,
		required: true
    },

});

module.exports = Applicant = mongoose.model("Donations", DonationSchema);
