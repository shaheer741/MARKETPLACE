import React, { useEffect, useState } from 'react'
import axios from 'axios'

function ProductDisplay() {

   const [products, setProducts] = useState([])
   // console.log(products)
   useEffect(() => {
      axios.get('http://localhost:5000/getproducts')
         .then((result) => {
            // console.log(result.data)
            setProducts(result.data.products)
         })
         .catch((err) => console.log(err))
   }, [])

   
   return (
      <div>

        {products.map(product => <div key={product._id}>
           <div className='image_display'><img src={`http://localhost:5000/${product.imageUrl}`} alt='not found'/></div> 
           <div>{product.name}</div>
            <div>{product.price}</div>
         </div>)}

      </div>
   )
}

export default ProductDisplay