import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {


    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://tranquil-badlands-27515.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    return (
        <div className='container'>
            <h2 className='text-primary text-center mt-3 mb-3'>Welcome To ABC Computers</h2>
            {/* slider section */}
            <div id="carouselExampleCaptions" className='carousel slide' data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className='carousel-inner'>
                    <div class="carousel-item active">
                        <img src="https://i.ibb.co/Srh0WHM/xps-Gi3i-UJ1-Fwx-I-unsplash-1.jpg" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://i.ibb.co/zmRwZ1r/domenico-loia-h-GV2-Tf-Oh0ns-unsplash-1.jpg" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://i.ibb.co/s3L6vVG/anete-lusina-zws-Hjak-E-i-I-unsplash-1.jpg" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            {/* cadr section */}
            <div className='row container text-center mb-3 mt-5'>
                {
                    products.slice(0, 6).map(pd => (<div className='col-lg-4 col-md-6 col-sm-12 ' key={pd._id}>

                        <div class="card mb-3 ">
                            <img src={pd.picture} alt="" />
                            <div class="card-body">
                                <h5 class="card-title"> Name: {pd.name}</h5>
                                <h4>Price: {pd.price}</h4>
                                <h6>Quantity: {pd.Quantity}</h6>
                                <h6>Supplier: {pd.Supplier}</h6>
                                <p>description: {pd.description}</p>

                                <button className='btn btn-primary'>Product Details</button>

                            </div>
                        </div>
                    </div>))
                }
                <div>
                    {/* section 1 */}
                    <div className='mt-5 mb-4'>
                        <div className='row'>
                            <div className='col-sm-5 col-md-6'>
                                <img src="https://i.ibb.co/V3R2X03/michail-sapiton-al-CEn-Nmzh-PE-unsplash-2.jpg" alt="" />

                            </div>
                            <div className='col-sm-5 offset-sm-2 col-md-6 offset-md-0'>
                                <h3>Buy MacBook Pro - Apple</h3>
                                <h5>8-Core CPU
                                    14-Core GPU
                                    16GB Unified Memory
                                    512GB SSD Storage¹</h5>
                                <p>16-core Neural Engine
                                    14-inch Liquid Retina XDR display
                                    Three Thunderbolt 4 ports, HDMI port, SDXC card slot, MagSafe 3 port
                                    Magic Keyboard with Touch ID
                                    Force Touch trackpad
                                    67W USB-C Power Adapter</p>
                                <a href="#" class="btn btn-primary">Explorer Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {/* section 2 */}
                    <div className='mt-5 mb-3'>
                        <div className='row'>
                            <div className='col-sm-5 offset-sm-2 col-md-6 offset-md-0'>
                                <h3>Apple MacBook Air</h3>
                                <h5>Apple MacBook Air 13.3-Inch Retina Display 8-core Apple M1 chip with 8GB RAM, 256GB SSD (MGN63) Space Gray</h5>
                                <p>Apple M1 chip with 8-core CPU and 7-core GPU
                                    8GB RAM
                                    256GB SSD
                                    13.3-inch 2560x1600 LED-backlit Retina Display</p>
                                <a href="#" class="btn btn-primary">Explorer Now</a>
                            </div>

                            <div className='col-sm-5 col-md-6'>
                                <img src="https://i.ibb.co/K6Hcd8J/mohamed-m-u-Amgf8k-Rvqg-unsplash-1.jpg" alt="" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Home;