const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    //required - 
    email: { type:String , required:true, unique:true, lowercase:true },
    password: { type:String, required:true, select:false },
    created: { type: Date, default: Date.now }
});

UserSchema.pre('save', function(next){
    let user = this;
    if(!user.isModified('password')) return next();

    bcrypt.hash(user.password,10,(err,encrypted) =>{//encrypts the password
        user.password = encrypted; //password = password encrypted
        return next(); //continue 
    });
});

module.exports = mongoose.model('User',UserSchema);