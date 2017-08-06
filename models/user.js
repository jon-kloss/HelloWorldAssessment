const mongoose = require("mongoose");
const config = require("../config/database");

const dbSchema = mongoose.Schema({
	firstName:{
		type: String,
		required: true
	},
	lastName:{
		type:String,
		required: true
	},
	address1:{
		type:String,
		required: true
	},
	address2:{
		type:String
	},
	city:{
		type:String,
		required: true
	},
	state:{
		type:String,
		required: true
	},
	zip:{
		type:Number,
		required: true
	},
	country:{
		type:String,
		required: true
	},
	dateRegistered:{
		type:Date
	}
});

const User = module.exports = mongoose.model("User", dbSchema);

module.exports.addUser = function(newUser, callback){
	console.log("adding user");
	newUser.save(callback);
}

module.exports.getUsersByDateOfRegistration = function(registerDate, callback)
{
	const query = {registerDate: registerDate }
	//User.find().sort({query: -1 }).toArray(function(err, callback));
	User.findOne(query, callback);
}



