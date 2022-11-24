import User from '../models/userModel.js'
import Seller from '../models/SellerModel.js'
import Product from '../models/ProductModel.js'

export const registerUser = (req,res) => {
   const user = new User(req.body)
   user.save()
      .then((result) => console.log('user Registered'))
      .catch((err) => { console.log(err) })
}
export const authenticateUser = (req, res) => {
   const email = req.body.email
   const password=req.body.password
   User.findOne({ $and: [{ email }, { password }] })
      .then((result) => console.log(result.name))
   .catch((err)=>console.log('incorrect email or password'))
}
export const registerSeller = (req, res) => {
   const seller = new Seller(req.body)
   seller.save()
      .then((result) => console.log('Seller Registered'))
      .catch((err) => { console.log(err) })
}
export const authenticateSeller = (req, res) => {
   const email = req.body.email
   const password = req.body.password
   Seller.findOne({ $and: [{ email }, { password }] })
      .then((result) => console.log(result.name))
      .catch((err) => console.log('Seller Account not found'))
}

export const uploadFiles = (req, res) => {
   const name = req.body.name
   const description = req.body.description
   const price = req.body.price
   const imageUrl=req.file.path
   const product = new Product({ name, description, price, imageUrl })
   product.save()
      .then((result) => console.log('Product saved to database'))
      .catch((err) => { console.log(err) })
   // console.log(req.file);
   // console.log(req.body);
   // res.json({ message: "Successfully uploaded files" });
}
export const getProducts = (req, res) => {
   Product.find().sort({ createdAt: -1 })
      .then((result) => {
         res.json({ products: result })
      })
      .catch((err) => { console.log(err) })
}