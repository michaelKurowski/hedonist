const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const SALT_WORK_FACTOR = 10

const userSchema = new Schema({
	username: {type: String, required: true, index: { unique: true }},
	password: {type: String, required: true},
	email: {type: String, required: true},
	createdDate: {type: String, required: true},
	authenticated: {type: String, required: true}
})
userSchema.methods.comparePasswords = function (candidatePassword) {
	return new Promise( (resolve, reject) => 
		bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
			if (err) return reject(err)
			resolve(isMatch)
		})
	)
}
userSchema.pre('save', function (next) {
	const user = this
	if (!user.isModified('password')) return next()
	bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
		if (err) return next(err);
		bcrypt.hash(user.password, salt, function(err, hash) {
		if (err) return next(err);
			user.password = hash;
			next()
		})
	})
})

const User = mongoose.model('User', userSchema)

module.exports = User
