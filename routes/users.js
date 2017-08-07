const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/register", function(req, res, next)
{
	let newUser = new User({
	firstName: req.body.firstName,
	lastName: req.body.lastName,
	address1: req.body.address1,
	address2: req.body.address2,
	city: req.body.city,
	state: req.body.state,
	zip: req.body.zip,
	country: req.body.country,
	dateRegistered: new Date(Date.now()).toISOString()
	});

	User.addUser(newUser, function(err, user)
	{
		if(err){
			res.json({success:false, msg:"Failed to create user"});
		}
			
		else{
			res.json({success:true, msg:"Created a user"});
		}
			
	});
});

router.get("/adminReport", function(req, res, next){
	User.find(function(err,user){
		res.json(user);
	})
});

module.exports = router;