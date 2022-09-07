import React from 'react'
import { Link } from 'react-router-dom'
import Allproduct from '../Data/Allproduct'
import Products from '../Data/Products'
import Toprate from '../Data/Toprate'

export default function Shop() {
  return (
    <>
      <div className="shop-banner">
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
                          <Link to={`details/${i.id}`}><img src={i.image} alt="productImage" /></Link>
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
            </div>
            <div className="col-lg-10">
              <div className="shop-list">
                <div className="shop-head">
                  <div className="row">
                    <div className="col-lg-9">
                      <h6>Shop</h6>
                    </div>
                    <div className="col-lg-3 ">
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                          <li className="breadcrumb-item"><Link to="/products" >Products</Link></li>

                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="shop-main">
                  <div className="row">
                    {
                      Allproduct.map((a) => (
                        <>

                          <div className="col-lg-3">
                            <div className="flip-container">
                              <div className="card">
                                <div className="back">
                                  <img src={a.image} alt="" className=" w-100" height="210px" />

                                  <div className="card-body p-0">
                                    <h6 className="title text-center">{a.title}</h6>
                                    <div className="product-price text-center">
                                      <del><span className='p-item1'>{a.oldprice}</span></del>
                                      <span className='p-item2'>{a.newprice}</span>

                                    </div>

                                  </div>
                                </div>
                                <div className="front">
                                  <div className="card-body">
                                    <div className="d text-center mt-5 mb-4">
                                      <Link to={`Productdetail/${a.id}`}><span className="quick">Quick View</span></Link></div>
                                    <a href="" className=' d-block text-center mb-4 '><span className="icon-cart mt-5"><i class="bi bi-cart-plus"></i> Add to cart</span></a>
                                    <a href='' className=' d-block text-center'><span class="icon"> <i className="fa-solid fa-heart"></i> Wishlist</span></a>

                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>


                        </>

                      ))
                    }
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
