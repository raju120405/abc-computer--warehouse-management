import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';

const Products = () => {
    const [products, setProducts] = useState([])
    const [user, loading, error] = useAuthState(auth);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleOder = (products) => {
        const { name, price } = products
        console.log(products, user.email);
        fetch('http://localhost:5000/addOrder', {
            method: 'PATCH',
            body: JSON.stringify({
                name,
                price,
                email: user.email

            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }
    return (
        <div className='container'>
            <h2 className='text-center m-4'>Total Products: {products.length}</h2>
            <div className='row container text-center'>
                {
                    products.map(pd => (<div className='col-lg-4 col-md-6 col-sm-12' key={pd._id}>

                        <div class="card text-center">
                            <img src={pd.picture} alt="" />
                            <div class="card-body">
                                <h5 class="card-title"> Name: {pd.name}</h5>
                                <h4>Price: {pd.price}</h4>
                                <h6>Quantity: {pd.Quantity}</h6>
                                <h6>Supplier: {pd.Supplier}</h6>
                                <p>description: {pd.description}</p>

                                <button  class="btn btn-primary" onClick={() => handleOder(pd)}>Order Now</button>
                            </div>
                        </div>
                    </div>))
                }
            </div>
        </div>
    );
};

export default Products;