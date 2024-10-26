const moongose = require('mongoose');
const bycrypt = require('bcrypt');


const userSchema = new moongose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        required: true,
    }
});

userSchema.pre('save', async function(next) {
    if(!this.isModified('password')) return next();
    this.password = await bycrypt.hash(this.password, 10);
    next();
});

const User = moongose.model('User', userSchema);

module.exports = User;