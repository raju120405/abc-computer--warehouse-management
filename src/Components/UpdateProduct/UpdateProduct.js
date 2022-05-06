import React from 'react';

const UpdateProduct = () => {
    return (
        <div>
            <h2 className='text-center mt-3 text-primary'>Upload your Product</h2>
            <div className='w-50 mx-auto'>
                <form>
                    <div class="mb-3 ">
                        <label  class="form-label">Product name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        
                    </div>
                    <div class="mb-3">
                        <label  class="form-label">Price</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" />
                    </div>

                    <button type="submit" class="btn btn-primary">Upload</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;