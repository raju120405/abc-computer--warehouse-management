import React, { useEffect, useState } from 'react';

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='container'>
            <h2 className='text-primary text-center m-3'>Welcome To ABC Computers</h2>
           
            <div className='row container text-center '>
                {
                    products.map(pd => (<div className='col-4 '>

                        <div class="card ">
                            {/* <img src="..." class="card-img-top" alt="..."> */}
                            <img src={pd.picture} alt="" />
                            <div class="card-body">
                                <h5 class="card-title"> Name: {pd.name}</h5>
                                <h4>Price: {pd.price}</h4>
                                <h6>Quantity: {pd.Quantity}</h6>
                                <h6>Supplier: {pd.Supplier}</h6>
                                <p>description: {pd.description}</p>

                                <a href="#" class="btn btn-primary">Delivered</a>
                            </div>
                        </div>
                    </div>))
                }
            </div>
        </div>
    );
};

export default Home;