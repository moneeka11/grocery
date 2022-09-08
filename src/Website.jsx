import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import './Style/Style.scss'
import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Allproduct from './Data/Allproduct'
export default function Website() {

  return (
    <>
    <Header />
    <Footer/>
    </>
  )
}
