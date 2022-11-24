import './App.css';
import { Routes, Route } from "react-router-dom"
import UserLogin from './components/User/UserLogin';
import UserRegistration from './components/User/UserRegistration';
import SellerLogin from './components/Seller/SellerLogin';
import SellerRegistration from './components/Seller/SellerRegistration';
import Homepage from './components/Homepage';
import ProductEntry from './components/Seller/ProductEntry';
import ProductDisplay from './components/ProductDisplay';

function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/userlogin' element={<UserLogin />} />
          <Route path='/userregister' element={<UserRegistration />} />
          <Route path='/sellerlogin' element={<SellerLogin />} />
          <Route path='/sellerregister' element={<SellerRegistration />} />
          <Route path='/addproduct' element={<ProductEntry />} />
          <Route path='/productdisplay' element={<ProductDisplay />} />
        </Routes>
      </>
      
    </div>
  );
}

export default App;
