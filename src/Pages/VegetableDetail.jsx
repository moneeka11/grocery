import React from 'react'
import { useParams } from 'react-router-dom'
import Vegetables from '../Data/Vegetables'
export default function VegetableDetail() {
    let {id}=useParams();
    let veg=Vegetables.find((a)=>a.id==id)

  return (
    <>
    <div className="product-display">
      <div className="container">
        <div className="product-items">
          <div className="row">
            
            <div className="col-lg-6">
              <img src={veg.image} alt="" />
            </div>
            <div className="col-lg-6">
              <div className="p-title">
                 <h3>{veg.title}</h3>
              </div>
              <div className="p-price">
                <span className="p-old"><del>{veg.oldprice}</del></span>
                <span className="p-new">{veg.newprice}</span>
              </div>
              <div className="p-description">
                <p>{veg.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
    </>
  )
}
