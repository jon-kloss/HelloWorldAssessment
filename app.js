const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require("./config/database");
const app =express();
const port = process.env.PORT || 8080;
const users = require("./routes/users");

//const users = require("./routes/adminreport");

mongoose.connect(config.database);
mongoose.connection.on("connected",function(){
	console.log("conected to database" + config.database );
})

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use("/users", users)

app.listen(port, function(){
	console.log("server started on port " + port);
})