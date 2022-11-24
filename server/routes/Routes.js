import express from 'express'
import { registerUser, authenticateUser, registerSeller, authenticateSeller, uploadFiles, getProducts } from '../controllers/RegController.js'
import multer from "multer";

const router = express.Router()
const upload = multer({ dest: "uploads/" });

router.post('/userregister', registerUser)
router.post('/userlogin', authenticateUser)
router.post('/sellerregister', registerSeller)
router.post('/sellerlogin', authenticateSeller)
router.post("/addproduct", upload.single("image"), uploadFiles);
router.get('/getproducts',getProducts)


export default router