import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';  

const userSchema = mongoose.Schema({
    Fname: String,
    Lname: String,
    RNo: String,
    ENo: String,
    Phno: String,
    Email: String,
    Dept: String,
    Yr: String,
})

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'user');

const user = mongoose.model('user', userSchema);

export default user;