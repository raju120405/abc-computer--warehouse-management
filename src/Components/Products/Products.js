import React, { useEffect, useState } from 'react';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div>
           <h2>total products:{products.length}</h2> 
           <div className='row'>
               
           </div>
        </div>
    );
};

export default Products;