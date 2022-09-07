import React from 'react'
import { useParams } from 'react-router-dom'
import Allproduct from '../Data/Allproduct'

export default function Productdetail() {
    let {id}=useParams();
    let allproduct=Allproduct.find((a)=>a.id==id)
  return (
    <>
     <div className="product-display">
      <div className="container">
        <div className="product-items">
          <div className="row">
           
            <div className="col-lg-6">
              <img src={allproduct.image} alt="" />
            </div>
            <div className="col-lg-6">
              <div className="p-title">
                 <h3>{allproduct.title}</h3>
              </div>
              <div className="p-price">
                <span className="p-old"><del>{allproduct.oldprice}</del></span>
                <span className="p-new">{allproduct.newprice}</span>
              </div>
              <div className="p-description">
                <p>{allproduct.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
    </>
  )
}
