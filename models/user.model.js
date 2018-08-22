const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    a: [Number]
}, {
    timestamps: true
});

const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;
