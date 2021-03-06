let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let permissionList = ['default', 'operator', 'admin']

let userSchema = new Schema({
    email: {type: String, lowercase: true, unique: true },
    password: String,
    location: String,
    salt: String,
    permission: {type: String, default: 'default', enum:permissionList, lowercase: true},
    sessions: [{SID: String, ip: String, fingerprint: String}],
    modification: String,
    secret: String,
    secret_unconfirmed: String
});

module.exports = mongoose.model('user', userSchema);