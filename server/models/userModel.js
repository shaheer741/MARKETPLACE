import mongoose from "mongoose";

const userSchema = mongoose.Schema({
   name: String,
   birthDate: Date,
   email: String,
   password: String
})

const User = mongoose.model('User', userSchema)
export default User
