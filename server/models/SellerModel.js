import mongoose from "mongoose";

const sellerSchema = mongoose.Schema({
   name: String,
   birthDate: Date,
   email: String,
   password: String
})

const Seller = mongoose.model('Seller', sellerSchema)
export default Seller