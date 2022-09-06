import React from 'react';
import Allproduct from './Data/Allproduct';

export default function Footer() {

    return (
        <>
            <footer>

                <div className="container">
                    <div className="top-footer">
                        <div className="row">
                            <div className="col-lg-8">
                                <ul className='d-flex p-0 m-0'>
                                    <li>Orders</li>
                                    <li>Downloads</li>
                                    <li>Account details</li>
                                </ul>

                            </div>
                            <div className="col-lg-4 ">
                                <img src="https://wpthemes.themehunk.com/grocery-lite/wp-content/uploads/sites/128/2020/07/payment.png" alt="" />

                            </div>
                        </div>
                    </div>
                    <div className="widget-footer">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="media-image3">
                                    <img src="https://wpthemes.themehunk.com/grocery-lite/wp-content/uploads/sites/128/2020/07/logo.png" alt="" />
                                </div>
                                <div className="textwidget">

                                    <p className='pt-4'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>

                                </div>
                                <div className="media-image7">
                                    <img src="https://wpthemes.themehunk.com/grocery-lite/wp-content/uploads/sites/128/2020/06/download-app-footer-image-300x52.png" alt="" />
                                </div>



                            </div>
                            <div className="col-lg-3">
                                <div className="widget-product">
                                    <h4 className="widget-title">Products</h4>
                                    {
                                        Allproduct.slice(0, 2).map((i) => (
                                            <div className="p-list d-flex">
                                                <div className="p-img">
                                                    <img src={i.image} alt="" />
                                                </div>
                                                <div className="d-list mt-4">
                                                    <div className="list-title fw-semibold mb-2">{i.title}</div>
                                                    <div className="p "> <del><span className='p-item1'>{i.oldprice}</span></del>
                                                        <span className='p-item2'>{i.newprice}</span></div>
                                                </div>
                                            </div>

                                        ))

                                    }

                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="p-categories">
                                    <h4 class="widget-title">Product categories</h4>
                                    <ul>
                                        <li className='mt-4'>Beverages</li>
                                        <li>Dairy Products</li>
                                        <li>FoodGrains & Oil</li>
                                        <li>Personal Care</li>
                                        <li>Pet Care</li>
                                        <li>Vegetables & Fruits</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <h4 className="widget-title">Contact Details</h4>
                                <div className="text-widget mt-4"><p>Address: 3548 Columbia Mine Road,</p>
                                    <p>Wheeling,&nbsp;West Virginia,</p>
                                    <p>26003</p>
                                    <p>Contact :&nbsp;304-559-3023</p>
                                    <p>304-650-2694</p>
                                    <p>E-mail : shopnow@open2.com</p>
                                    <p>contact@open.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-footer">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="copyright">
                                    <p className="c">
                                        © 2022
                                        <a href="">  grocery-lite</a>
                                        <span>&nbsp;Designed by <a href="">
                Themehunk              </a></span>
                                        
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
