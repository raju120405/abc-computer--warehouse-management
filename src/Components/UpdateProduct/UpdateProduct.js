import React from 'react';

const UpdateProduct = () => {
    const handelupload = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const supplier = event.target.supplier.value;
        const description = event.target.description.value;
        const picture = event.target.picture.value;
        console.log(name,price,quantity,supplier,description,picture)


        const url = 'https://tranquil-badlands-27515.herokuapp.com/uploadPd';
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                name,price,quantity,supplier,description,picture
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                event.target.reset()
            })
            
    }
    return (
        <div>
            <h2 className='text-center text-primary'>Upload your Product</h2>
            <div className='w-50 mx-auto'>
                <form onSubmit={handelupload}>
                    <div>
                        <label className='form-label'>Product name</label>
                        <input type="text" name='name' className='form-control' id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Supplier</label>
                        <input type="text" name='supplier'className='form-control' id="exampleInputPassword3" />
                    </div>
                    <div >
                        <label className='form-label'>Price</label>
                        <input type="text" name='price'className='form-control' id="exampleInputPassword1" />
                    </div>
                    
                    <div className='mb-3'>
                        <label className='form-label'>Quantity</label>
                        <input type="text" name='quantity'className='form-control' id="exampleInputPassword2" />
                    </div>
                    
                    <div className='mb-3'>
                        <label className='form-label'>description</label>
                        <input type="text" name='description'className='form-control' id="exampleInputPassword4" />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>picture</label>
                        <input type="text" name='picture'className='form-control' id="exampleInputPassword5" />
                    </div>
                        <div className='text-center'>
                        <button type="submit" className='btn btn-primary text-center'>Upload A New Product</button>
                        </div>
                    
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;