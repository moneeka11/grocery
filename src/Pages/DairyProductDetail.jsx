import React from 'react'
import { useParams } from 'react-router-dom';
import Dairyproduct from '../Data/Dairyproduct';

export default function DairyProductDetail() {
  let {id}=useParams();
  let Dairy=Dairyproduct.find((a)=>a.id==id)
  return (
    <>
    <div className="product-display">
      <div className="container">
        <div className="product-items">
          <div className="row">
            
            <div className="col-lg-6">
              <img src={Dairy.image} alt="" />
            </div>
            <div className="col-lg-6">
              <div className="p-title">
                 <h3>{Dairy.title}</h3>
              </div>
              <div className="p-price">
                <span className="p-old"><del>{Dairy.oldprice}</del></span>
                <span className="p-new">{Dairy.newprice}</span>
              </div>
              <div className="p-description">
                <p>{Dairy.description}</p>
              </div>
              <div className="add-btn">
                <button className='btn'>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
    </>
  )
}
