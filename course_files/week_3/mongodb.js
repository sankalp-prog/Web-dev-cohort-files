/*
 * steps -
 *  1. get the mongoose library
 * 2. connect the mongoose url
 * 3. describe the schema
 * 4. save the changes
 */

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:YHllxgNLkQGfR9JG@cluster0.nmdey0k.mongodb.net/userappnew",
);

const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

const user = new User({
  name: "Sankalp",
  email: "sankalp@gmai.com",
  password: "123456",
});

user.save();

/*  when you use express then use this block -
 *
app.post("/signup", function(req, res){
const name = req.body.name;
const email = req.body.email;
const password = req.body.password;

const user = new User({
name : name,
email : email,
password : password
});
})
*/
