import React from 'react'
import { Link } from 'react-router-dom'
import Products from '../Data/Products'
import Toprate from '../Data/Toprate'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import Allproduct from '../Data/Allproduct';



import { Autoplay, Pagination, Navigation } from "swiper";


export default function Home() {

    return (
        <>
            <div className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2">
                            <div className="sidebar">
                                <div className="sidelist">
                                    <h6>Products</h6>
                                    <div className="row box1">

                                        {
                                            Products.map((i) => (<>
                                                <div className="col-lg-4 img-box mt-4">
                                                    <Link to={`details/${i.id}`}><img src={i.image} alt="image" /></Link>
                                                </div>
                                                <div className="col-lg-8 mt-4">
                                                    <div className="ptitle">
                                                        <span class="product-title"><Link to={`details/${i.id}`}>{i.title}</Link></span>
                                                    </div>
                                                    <div className="product-price">
                                                        <del><span className='p-item1'>{i.oldprice}</span></del>
                                                        <span className='p-item2'>{i.newprice}</span>

                                                    </div>

                                                </div>
                                            </>


                                            ))
                                        }
                                    </div>
                                </div>


                            </div>
                            <div className="sidebar">
                                <div className="sidelist">
                                    <h6>Top rated products</h6>
                                    <div className="row box1">

                                        {
                                            Toprate.map((item) => (<>
                                                <div className="col-lg-4 img-box mt-3"><Link to={`detail/${item.id}`}><img src={item.image} alt="image" /></Link>

                                                </div>
                                                <div className="col-lg-8 mt-3">
                                                    <div className="ptitle">
                                                        <span class="product-title"><Link to={`detail/${item.id}`}>{item.title}</Link></span>
                                                    </div>
                                                    <div className="product-price">
                                                        <del><span className='p-item1'>{item.oldprice}</span></del>
                                                        <span className='p-item2'>{item.newprice}</span>

                                                    </div>

                                                </div>
                                            </>


                                            ))
                                        }
                                    </div>
                                </div>


                            </div>
                            <div className="sideimg">
                                <h4>Latest News</h4>
                                <div className="post-item">
                                    <div className="post-thumb">
                                        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                                            <SwiperSlide><img src="https://wpthemes.themehunk.com/grocery-lite/wp-content/uploads/sites/128/2020/06/post22.jpg" alt="pic" className='w-100' /></SwiperSlide>
                                            <SwiperSlide><img src="https://wpthemes.themehunk.com/grocery-lite/wp-content/uploads/sites/128/2020/06/post1.jpg" alt="pic" className='w-100' /></SwiperSlide>
                                        </Swiper>

                                    </div>
                                    <div className="post-body">
                                        <span className="title">Get More Offers in the Time of lockdown ( Covid-19 )</span>
                                    </div>
                                    <div className="post-date">
                                        <span className="entry-date">June 4, 2020</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-10 ">
                            <div className="banner-slide">
                                <Swiper spaceBetween={30}
                                    centeredSlides={true}
                                    autoplay={{
                                        delay: 4000,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={{
                                        clickable: true,
                                    }} modules={[Autoplay, Pagination]} className="mySwiper">
                                    <SwiperSlide><img src="https://wpthemes.themehunk.com/grocery-lite/wp-content/uploads/sites/128/2020/07/slider-n1-1.jpg" alt="" className='w-100' /></SwiperSlide>
                                    <SwiperSlide><img src="https://wpthemes.themehunk.com/grocery-lite/wp-content/uploads/sites/128/2020/07/slider2n-1.jpg" alt="" className='w-100' /></SwiperSlide>


                                </Swiper>

                            </div>
                            <div className="content-detail">
                                <div className="row">
                                    <div className="col-lg-3 ">
                                        <div className="row b-content border-end">
                                            <div className="col-lg-3">
                                                <div className="content-icon"><i className="fa-solid fa-plane"></i></div>
                                            </div>
                                            <div className="col-lg-9">
                                                <div className="content">
                                                    <h6>Free Shiping</h6>
                                                    <p>On all order over </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 ">
                                        <div className="row b-content border-end">
                                            <div className="col-lg-3">
                                                <div className="content-icon"><i className="bi bi-gem"></i></div>
                                            </div>
                                            <div className="col-lg-9">
                                                <div className="content">
                                                    <h6>Join Risk Free</h6>
                                                    <p>30 days refund</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 ">
                                        <div className="row b-content border-end">
                                            <div className="col-lg-3">
                                                <div className="content-icon"><i className="fa-solid fa-mug-saucer"></i></div>
                                            </div>
                                            <div className="col-lg-9">
                                                <div className="content">
                                                    <h6> Support 24/7</h6>
                                                    <p>Online 24 hours</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 ">
                                        <div className="row b-content border-0">
                                            <div className="col-lg-3">
                                                <div className="content-icon"><i className="fa-solid fa-anchor"></i></div>
                                            </div>
                                            <div className="col-lg-9">
                                                <div className="content">
                                                    <h6>100% Safe</h6>
                                                    <p>Secure shopping</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="allproduct mt-4">
                                <h4>All Products</h4>
                                <div className="allproduct-item">

                                    <OwlCarousel items="4" nav="true" autoPlay="true"  className="owl-theme">
                                        <div className='product-col'>
                                            {
                                                Allproduct.slice(0, 2).map((a) => (<>
                                                    <div className="h">
                                                        <div className="item allproduct-image">
                                                            <img src={a.image} alt="" />

                                                        </div>
                                                        <div className="item allproduct-title">
                                                            <h2 className='text-center'>{a.title}</h2>
                                                        </div>
                                                        <div className="item allproduct-price text-center ">
                                                            <del><span className='p-item1'>{a.oldprice}</span></del>
                                                            <span className='p-item2'>{a.newprice}</span>

                                                        </div>
                                                        <div className="sale">
                                                            <span className="badge text-bg-dark">{a.sale}</span>
                                                        </div>
                                                        <div className="thunk-product-hover  ">
                                                            <div className="d"><Link to={`Productdetail/${a.id}`}><span>Quick View</span></Link></div>
                                                            <a href="" className='border-end '><i class="bi bi-cart-plus"></i> Add to cart</a>
                                                            <a href=''  className='border-end '> <i className="fa-solid fa-heart"></i> wishlist</a>

                                                        </div>

                                                    </div>

                                                </>


                                                )
                                                )}



                                        </div>
                                        <div className='product-col'>
                                            {
                                                Allproduct.slice(2, 4).map((a) => (<>
                                                    <div className="h">
                                                        <div className="item allproduct-image">
                                                            <img src={a.image} alt="" />
                                                        </div>
                                                        <div className="item allproduct-title">
                                                            <h2 className='text-center'>{a.title}</h2>
                                                        </div>
                                                        <div className="item allproduct-price text-center ">
                                                            <del><span className='p-item1'>{a.oldprice}</span></del>
                                                            <span className='p-item2'>{a.newprice}</span>

                                                        </div>
                                                        <div className="sale">
                                                            <span className="badge text-bg-dark">{a.sale}</span>
                                                        </div>
                                                        <div className="thunk-product-hover  ">
                                                            <div className="d"><Link to={`Productdetail/${a.id}`}><span>Quick View</span></Link></div>
                                                            <a href="" className='border-end '><i class="bi bi-cart-plus"></i> Add to cart</a>
                                                            <a href=''  className='border-end '> <i className="fa-solid fa-heart"></i> wishlist</a>

                                                        </div>
                                                    </div>
                                                </>

                                                )
                                                )}



                                        </div>
                                        <div className='product-col'>
                                            {
                                                Allproduct.slice(4, 6).map((a) => (<>
                                                    <div className="h">
                                                        <div className="item allproduct-image">
                                                            <img src={a.image} alt="" />
                                                        </div>
                                                        <div className="item allproduct-title">
                                                            <h2 className='text-center'>{a.title}</h2>
                                                        </div>
                                                        <div className="item allproduct-price text-center ">
                                                            <del><span className='p-item1'>{a.oldprice}</span></del>
                                                            <span className='p-item2'>{a.newprice}</span>

                                                        </div>
                                                        <div className="sale">
                                                            <span className="badge text-bg-dark">{a.sale}</span>
                                                        </div>
                                                        <div className="thunk-product-hover  ">
                                                            <div className="d"><Link to={`Productdetail/${a.id}`}><span>Quick View</span></Link></div>
                                                            <a href="" className='border-end '><i class="bi bi-cart-plus"></i> Add to cart</a>
                                                            <a href=''  className='border-end '> <i className="fa-solid fa-heart"></i> wishlist</a>

                                                        </div>
                                                    </div>
                                                </>

                                                )
                                                )}



                                        </div>
                                        <div className='product-col'>
                                            {
                                                Allproduct.slice(6, 8).map((a) => (<>
                                                    <div className="h">
                                                        <div className="item allproduct-image">
                                                            <img src={a.image} alt="" />
                                                        </div>
                                                        <div className="item allproduct-title">
                                                            <h2 className='text-center'>{a.title}</h2>
                                                        </div>
                                                        <div className="item allproduct-price text-center ">
                                                            <del><span className='p-item1'>{a.oldprice}</span></del>
                                                            <span className='p-item2'>{a.newprice}</span>

                                                        </div>
                                                        <div className="sale">
                                                            <span className="badge text-bg-dark">{a.sale}</span>
                                                        </div>
                                                        <div className="thunk-product-hover  ">
                                                            <div className="d"><Link to={`Productdetail/${a.id}`}><span>Quick View</span></Link></div>
                                                            <a href="" className='border-end '><i class="bi bi-cart-plus"></i> Add to cart</a>
                                                            <a href=''  className='border-end '> <i className="fa-solid fa-heart"></i> wishlist</a>

                                                        </div>
                                                    </div>
                                                </>

                                                )
                                                )}



                                        </div>
                                        <div className='product-col'>
                                            {
                                                Allproduct.slice(8, 10).map((a) => (<>
                                                    <div className="h">
                                                        <div className="item allproduct-image">
                                                            <img src={a.image} alt="" />
                                                        </div>
                                                        <div className="item allproduct-title">
                                                            <h2 className='text-center'>{a.title}</h2>
                                                        </div>
                                                        <div className="item allproduct-price text-center ">
                                                            <del><span className='p-item1'>{a.oldprice}</span></del>
                                                            <span className='p-item2'>{a.newprice}</span>

                                                        </div>
                                                        <div className="sale">
                                                            <span className="badge text-bg-dark">{a.sale}</span>
                                                        </div>
                                                        <div className="thunk-product-hover  ">
                                                            <div className="d"><Link to={`Productdetail/${a.id}`}><span>Quick View</span></Link></div>
                                                            <a href="" className='border-end '><i class="bi bi-cart-plus"></i> Add to cart</a>
                                                            <a href=''  className='border-end '> <i className="fa-solid fa-heart"></i> wishlist</a>

                                                        </div>
                                                    </div>
                                                </>

                                                )
                                                )}



                                        </div>

                                        <div className='product-col'>
                                            {
                                                Allproduct.slice(10, 12).map((a) => (<>
                                                    <div className="h">
                                                        <div className="item allproduct-image">
                                                            <img src={a.image} alt="" />
                                                        </div>
                                                        <div className="item allproduct-title">
                                                            <h2 className='text-center'>{a.title}</h2>
                                                        </div>
                                                        <div className="item allproduct-price text-center ">
                                                            <del><span className='p-item1'>{a.oldprice}</span></del>
                                                            <span className='p-item2'>{a.newprice}</span>

                                                        </div>
                                                        <div className="sale">
                                                            <span className="badge text-bg-dark">{a.sale}</span>
                                                        </div>
                                                        <div className="thunk-product-hover  ">
                                                            <div className="d"><Link to={`Productdetail/${a.id}`}><span>Quick View</span></Link></div>
                                                            <a href="" className='border-end '><i class="bi bi-cart-plus"></i> Add to cart</a>
                                                            <a href=''  className='border-end '> <i className="fa-solid fa-heart"></i> wishlist</a>

                                                        </div>
                                                    </div>
                                                </>

                                                )
                                                )}



                                        </div>
                                        <div className='product-col'>
                                            {
                                                Allproduct.slice(12, 14).map((a) => (<>
                                                    <div className="h">
                                                        <div className="item allproduct-image">
                                                            <img src={a.image} alt="" />
                                                        </div>
                                                        <div className="item allproduct-title">
                                                            <h2 className='text-center'>{a.title}</h2>
                                                        </div>
                                                        <div className="item allproduct-price text-center ">
                                                            <del><span className='p-item1'>{a.oldprice}</span></del>
                                                            <span className='p-item2'>{a.newprice}</span>

                                                        </div>
                                                        <div className="sale">
                                                            <span className="badge text-bg-dark">{a.sale}</span>
                                                        </div>
                                                        <div className="thunk-product-hover  ">
                                                            <div className="d"><Link to={`Productdetail/${a.id}`}><span>Quick View</span></Link></div>
                                                            <a href="" className='border-end '><i class="bi bi-cart-plus"></i> Add to cart</a>
                                                            <a href=''  className='border-end '> <i className="fa-solid fa-heart"></i> wishlist</a>

                                                        </div>
                                                    </div>
                                                </>

                                                )
                                                )}



                                        </div>
                                        <div className='product-col'>
                                            {
                                                Allproduct.slice(14, 16).map((a) => (<>
                                                    <div className="h">
                                                        <div className="item allproduct-image">
                                                            <img src={a.image} alt="" />
                                                        </div>
                                                        <div className="item allproduct-title">
                                                            <h2 className='text-center'>{a.title}</h2>
                                                        </div>
                                                        <div className="item allproduct-price text-center ">
                                                            <del><span className='p-item1'>{a.oldprice}</span></del>
                                                            <span className='p-item2'>{a.newprice}</span>

                                                        </div>
                                                        <div className="sale">
                                                            <span className="badge text-bg-dark">{a.sale}</span>
                                                        </div>
                                                        <div className="thunk-product-hover  ">
                                                            <div className="d"><Link to={`Productdetail/${a.id}`}><span>Quick View</span></Link></div>
                                                            <a href="" className='border-end '><i class="bi bi-cart-plus"></i> Add to cart</a>
                                                            <a href=''  className='border-end '> <i className="fa-solid fa-heart"></i> wishlist</a>

                                                        </div>
                                                    </div>
                                                </>

                                                )
                                                )}



                                        </div>
                                        <div className='product-col'>
                                            {
                                                Allproduct.slice(16, 18).map((a) => (<>
                                                    <div className="h">
                                                        <div className="item allproduct-image">
                                                            <img src={a.image} alt="" />
                                                        </div>
                                                        <div className="item allproduct-title">
                                                            <h2 className='text-center'>{a.title}</h2>
                                                        </div>
                                                        <div className="item allproduct-price text-center ">
                                                            <del><span className='p-item1'>{a.oldprice}</span></del>
                                                            <span className='p-item2'>{a.newprice}</span>

                                                        </div>
                                                        <div className="sale">
                                                            <span className="badge text-bg-dark">{a.sale}</span>
                                                        </div>
                                                        <div className="thunk-product-hover  ">
                                                            <div className="d"><Link to={`Productdetail/${a.id}`}><span>Quick View</span></Link></div>
                                                            <a href="" className='border-end '><i class="bi bi-cart-plus"></i> Add to cart</a>
                                                            <a href=''  className='border-end '> <i className="fa-solid fa-heart"></i> wishlist</a>

                                                        </div>
                                                    </div>
                                                </>

                                                )
                                                )}



                                        </div>
                                        <div className='product-col'>
                                            {
                                                Allproduct.slice(18, 20).map((a) => (<>
                                                    <div className="h">
                                                        <div className="item allproduct-image">
                                                            <img src={a.image} alt="" />
                                                        </div>
                                                        <div className="item allproduct-title">
                                                            <h2 className='text-center'>{a.title}</h2>
                                                        </div>
                                                        <div className="item allproduct-price text-center ">
                                                            <del><span className='p-item1'>{a.oldprice}</span></del>
                                                            <span className='p-item2'>{a.newprice}</span>

                                                        </div>
                                                        <div className="sale">
                                                            <span className="badge text-bg-dark">{a.sale}</span>
                                                        </div>
                                                        <div className="thunk-product-hover  ">
                                                            <div className="d"><Link to={`Productdetail/${a.id}`}><span>Quick View</span></Link></div>
                                                            <a href="" className='border-end '><i class="bi bi-cart-plus"></i> Add to cart</a>
                                                            <a href=''  className='border-end'> <i className="fa-solid fa-heart"></i> wishlist</a>

                                                        </div>
                                                    </div>
                                                </>

                                                )
                                                )}



                                        </div>

                                    </OwlCarousel>
                                </div>

                            </div>
                            <div className="thunk-ribbon-section my-4">
                                <div className="thunk-ribbon-content">
                                    <div className="row">
                                        <div className="col-lg-9">
                                            <h3 className='m-0'>Excepteur qui officia deserunt mollit anim id est laborum.</h3>
                                        </div>
                                        <div className="col-lg-3">
                                            <a href="" className='ribbon-btn text-center fw-semibold'>CALL TO ACTION</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="thunk-product-list-section">
                                <div className="thunk-heading">
                                    <h4 className="thunk-title">
                                        Daily Use
                                    </h4>
                                </div>
                                <div className="content-wrap">
                                    <OwlCarousel className="owl-theme" items="4" nav="true" loop="true" autoPlay="true" dotsClass='false'>
                                        {
                                            Allproduct.map((item) => (
                                                <div className="thunk list d-flex">
                                                     <div className="item">
                                                    <Link to={`Productdetail/${item.id}`}><img src={item.image}/></Link>
                                                </div>
                                                <div className="item">
                                                    <div className="list-title"><Link to={`Productdetail/${item.id}`}><h6>{item.title}</h6></Link></div>
                                                    <div className="p"> <del><span className='p-item1'>{item.oldprice}</span></del>
                                                            <span className='p-item2'>{item.newprice}</span></div>
                                                </div>

                                                </div>
                                               

                                            ))
                                        }


                                    </OwlCarousel>
                                </div>
                            </div>
                            <div className="thunk-banner-section">
                                <div className="thunk-banner-col1">
                                    <img src="https://wpthemes.themehunk.com/grocery-lite/wp-content/uploads/sites/128/2020/07/banner-ad.png" alt="" />
                                </div>

                            </div>




                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
