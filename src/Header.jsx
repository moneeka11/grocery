import React, { useState } from 'react'
import { Routes, Route, NavLink, Link } from "react-router-dom";
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Vegetable from './Pages/Vegetable';
import Data from './Data/Listdata';
import Details from './Pages/Details';
import Detail from './Pages/Detail';
import Productdetail from './Pages/Productdetail';
import Search from './Search';
import Allproduct from './Data/Allproduct'





export default function Header() {
    const [show, setShow] = useState(false)

    return (
        <>
            <div className='top'>
                <div className='container'>
                    <div className='top-bar'>
                        <div className='row'>
                            <div className='col-lg-9 top-header-left'>
                                <div className="content">We are committed to provide service 24 X 7 </div>


                            </div>
                            <div className='col-lg-3 top-header-right '>
                                <div className='content-social'>
                                    <ul className='socialicon d-flex m-0'>
                                        <li><a href='#'><i className="bi bi-facebook"></i></a></li>
                                        <li>
                                            <a href='#'><i className="bi bi-linkedin"></i></a>
                                        </li>
                                        <li>
                                            <a href='#'><i className="bi bi-pinterest"></i></a>
                                        </li>
                                        <li>
                                            <a href='#'>
                                                <i className="bi bi-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#' >
                                                <i className="bi bi-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#'>
                                                <i className="fa-brands fa-tumblr"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#'>
                                                <i className="bi bi-youtube"></i>

                                            </a>
                                        </li>
                                        <li>
                                            <a href='#'>
                                                <i className="fa-brands fa-stumbleupon"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#'>
                                                <i className="fa-brands fa-dribbble"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#'>
                                                <i className="bi bi-skype"></i>


                                            </a>
                                        </li>


                                    </ul>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <div className='main-header'>
                <nav className="navbar navbar-expand-lg bg-light p-0">
                    <div className="container">
                        <img className='logo' src='https://wpthemes.themehunk.com/grocery-lite/wp-content/uploads/sites/128/2020/07/logo.png' />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeClassName="active" aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeClassName="active" to="/shop">Shop</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeClassName="active" to="/vegetable">Vegetables & Fruits</NavLink>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" activeClassName="active" href="https://themehunk.com/product/open-shop-pro/">Upgrade to pro</a>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeClassName="active" to="/contact">Contact Us</NavLink>
                                </li>


                            </ul>
                            <div className=' main-tel d-flex m-0'>
                                <div className='main-icon'>
                                    <i class="fa-solid fa-phone"></i>

                                </div>
                                <div className='main-content'>
                                    <span className='tel d-block'>
                                        <b>Call To</b>
                                        <a href="#"> +1800090098</a>
                                    </span>
                                    <span className='email'>
                                        Email :
                                        <a href="#"> Info@gmail.com</a>
                                    </span>
                                </div>

                            </div>

                        </div>
                    </div>
                </nav>
            </div>
            <div className='below-header'>
                <div className="container">
                    <div className="below-bar">
                        <div className="row">
                            <div className="col-lg-2">
                                <div className="row">

                                    <div className="menulist" onClick={() => setShow(!show)}>
                                        <span className="menuicon"><i class="fa-solid fa-bars"></i></span>
                                        <span className="menu-title">Category</span>
                                        <span className="micon"><i className={show ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"}></i></span>
                                        {/* <span className="micon"><i className="fa-solid fa-angle-down"></i></span> */}

                                    </div>                  <div className="c">{
                                        show ? <ul class="list-g">
                                            <li class="list-item"><Link to="/vegetable">Vegetables&Fruits</Link></li>
                                            <li class="list-item">Beverages</li>
                                            <li class="list-item">DairyProducts</li>
                                            <li class="list-item">FoodGrains&Oil</li>
                                            <li class="list-item">PersonalCare</li>
                                            <li class="list-item">PetCare</li>
                                            {/* {
                                                Data.map((i) => (

                                                    <li class="list-item"><a href='#'>{i.listName}</a></li>
                                                ))
                                            } */}


                                        </ul> : null}

                                    </div>

                                </div>



                            </div>
                            <div className="col-lg-7">
                                <Search placeholder="Search..." data={Allproduct} />
                            </div>
                            <div className="col-lg-3">
                                <div className="cart-icon">
                                    <span className='wishlist'><a href=""><i class="fa-regular fa-heart"></i></a></span>
                                    <span className="user"><a href=""><i class="fa-regular fa-user"></i></a></span>
                                    <span className="cart"><a href="">
                                        <i className="bi bi-bag"></i></a></span>


                                </div>


                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/vegetable" element={<Vegetable />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/details/:id" element={<Details />} />
                <Route path="/detail/:id" element={<Detail />} />
                <Route path='/Productdetail/:id' element={<Productdetail />} />
                <Route path="/shop/details/:id" element={<Details />} />
                <Route path="/shop/detail/:id" element={<Detail />} />
                <Route path='/shop/Productdetail/:id' element={<Productdetail />} />
            </Routes>

        </>
    )
}
