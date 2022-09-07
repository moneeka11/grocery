import React from 'react'
import { useParams } from 'react-router-dom';
import Personalcare from '../Data/Personalcare';

export default function PersonalCareDetail() {
    let {id}=useParams();
    let personal=Personalcare.find((a)=>a.id==id);
  return (
    <>
      <div className="product-display">
      <div className="container">
        <div className="product-items">
          <div className="row">
            
            <div className="col-lg-6">
              <img src={personal.image} alt="" />
            </div>
            <div className="col-lg-6">
              <div className="p-title">
                 <h3>{personal.title}</h3>
              </div>
              <div className="p-price">
                <span className="p-old"><del>{personal.oldprice}</del></span>
                <span className="p-new">{personal.newprice}</span>
              </div>
              <div className="p-description">
                <p>{personal.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
    </>
  )
}
