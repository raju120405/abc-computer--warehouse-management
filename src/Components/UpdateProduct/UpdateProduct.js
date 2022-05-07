import React from 'react';

const UpdateProduct = () => {
    const handelupload = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const price = event.target.price.value;
        console.log(name,price)


        const url = 'http://localhost:5000/uploadPd';
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                name,price
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
            <h2 className='text-center mt-3 text-primary'>Upload your Product</h2>
            <div className='w-50 mx-auto'>
                <form onSubmit={handelupload}>
                    <div class="mb-3 ">
                        <label class="form-label">Product name</label>
                        <input type="text" name='name' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div class="mb-3">
                        <label class="form-label">Price</label>
                        <input type="text" name='price' class="form-control" id="exampleInputPassword1" />
                    </div>

                    <button type="submit" class="btn btn-primary">Upload</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;