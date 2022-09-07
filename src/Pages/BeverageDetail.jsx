import React from 'react'
import { useParams } from 'react-router-dom';
import Beverage from '../Data/Beverage'

export default function BeverageDetail() {
    let {id}=useParams();
    let Bev=Beverage.find((a)=>a.id==id)
  return (
    <>
     <div className="product-display">
      <div className="container">
        <div className="product-items">
          <div className="row">
            
            <div className="col-lg-6">
              <img src={Bev.image} alt="" />
            </div>
            <div className="col-lg-6">
              <div className="p-title">
                 <h3>{Bev.title}</h3>
              </div>
              <div className="p-price">
                <span className="p-old"><del>{Bev.oldprice}</del></span>
                <span className="p-new">{Bev.newprice}</span>
              </div>
              <div className="p-description">
                <p>{Bev.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
    </>
  )
}
