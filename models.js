var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');


var userSchema = mongoose.Schema({
	"name" : { type: String },
	"id" : { type: String },
	"access_token" : { type: String }
});
//fbid, istaid, access token for ig, access token for fb

userSchema.plugin(findOrCreate);

exports.User = mongoose.model('User', userSchema);

